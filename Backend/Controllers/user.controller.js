import { UserModel } from "../Models/UserModel.js";
import error from "../utils/error.js";
import bcrypt from "bcrypt";
import verificationEmailTemplate from "../utils/verificationEmailTemplate.js";
import { sendEmail } from "../utils/sendEmail.js";
import dotenv from "dotenv";
import generateToken from "../utils/generateToken.js";
dotenv.config();

/**
 * @desc   Register a new user
 * @route  POST /auth/register
 * @access Public
 */
const registerController = async (req, res) => {
    try {
        // Extract user input from request body
        const { email, name, password } = req.body;

        // Check if all required fields are provided
        if (!email || !name || !password) {
            return res.status(400).json({
                success: false,
                message: "Mandatory fields are required",
            });
        }

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            // If user exists but is not verified, resend verification email
            if (!existingUser.isVerified) {
                const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${existingUser._id}`;
                const mailOptions = {
                    from: "shivamnegi896@gmail.com",
                    to: email,
                    subject: "Click the button to verify your account",
                    html: verificationEmailTemplate(verifyEmailUrl),
                };
                sendEmail(mailOptions, res);
                return res.status(200).json({
                    success: true,
                    message: "Verify your account.",
                });
            }
            return res.status(400).json({
                success: false,
                message: "Email is already registered",
            });
        }

        // Hash the password before saving it
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create new user instance
        const user = new UserModel({
            email,
            name,
            password: hashPassword,
        });

        // Save user in the database
        await user.save();

        // Generate verification email
        const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${user._id}`;
        const mailOptions = {
            from: "shivamnegi896@gmail.com",
            to: email,
            subject: "Click the button to verify your account",
            html: verificationEmailTemplate(verifyEmailUrl),
        };

        // Send verification email
        sendEmail(mailOptions, res);

        return res.status(200).json({
            success: true,
            message: "Verify your account",
        });
    } catch (err) {
        error(err, "Register Controller", res);
    }
};

/**
 * @desc   Verify user email
 * @route  POST /auth/verify-email
 * @access Public
 */
const verifyEmailController = async (req, res) => {
    try {
        const { code } = req.body;

        // Find user by the verification code (user ID)
        const user = await UserModel.findById(code);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid user",
            });
        }

        // Update user to mark email as verified
        await UserModel.findByIdAndUpdate(
            { _id: code },
            { isVerified: true }
        );

        return res.status(200).json({
            success: true,
            message: "Verification successful",
        });
    } catch (err) {
        error(err, "Verify Email Controller", res);
    }
};

/**
 * @desc   Login user and generate JWT token
 * @route  POST /auth/login
 * @access Public
 */
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        // Find user in the database
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "You are not registered",
            });
        }

        // Verify password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Wrong password",
            });
        }

        // Generate JWT token for authentication
        const token = generateToken(user._id);

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
        });
    } catch (err) {
        error(err, "Login Controller", res);
    }
};

const checkController = async(req,res) =>{
    try{
        return res.send("working fine");
    }catch(err){
        console.log(Err)
    }
}
export { registerController, loginController, verifyEmailController,checkController };

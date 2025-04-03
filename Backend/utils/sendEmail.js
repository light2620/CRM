import nodemailer from "nodemailer"
import error from "./error.js";
import dotenv from "dotenv"
dotenv.config();

const sendEmail = async(mailOptions,res) => {
    try{
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth :{
                user : process.env.EMAIL,
                pass : process.env.PASSWORD
            }
        })
         
        await transporter.sendMail(mailOptions);
    }catch(err){
           error(err,"Send Email",res)
    }

}

export {sendEmail};


import error from "../utils/error.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
const protectedRoute = async(req,res,next) => {
    try{
         const token = req.header("Authorization");

         if(!token){
            return res.status(401).json({
                success : false,
                message : "Access denied. No token provided."
            })
         }

         const decode = jwt.verify(token,process.env.TOKEN_SECRET_KEY);
         if(!decode){
            return res.status(401).json({
                success: false,
                message: "Invalid token. Authentication failed.",
            });
         }

         req.userId = decode.id;
         next();
    }catch(err){
        error(err,"protected route",res)
    }
}


export{protectedRoute}
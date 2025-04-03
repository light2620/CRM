import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors"
import cookieParser from "cookie-parser"
import { userRouter } from "./Routes/user.routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT;

app.get("/" ,(request,response)=>{
    return response.json({
        message : "server is running"
    })
})

app.use("/auth",userRouter);



connectDB().then((() => {
    app.listen(PORT,() => {
        console.log("server is running on " + 8080);
    })
    
}))
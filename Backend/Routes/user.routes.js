import { Router } from "express";
import { loginController, registerController, verifyEmailController } from "../Controllers/user.controller.js";



const userRouter = Router();

userRouter.post("/login",loginController)
userRouter.post("/register",registerController)
userRouter.post("/verify-email",verifyEmailController)



export {userRouter};
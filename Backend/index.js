import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors"
import cookieParser from "cookie-parser"
import { userRouter } from "./Routes/user.routes.js";
dotenv.config();
import { expenseRouter } from "./Routes/expense.routes.js";
import { productRouter } from "./Routes/product.routes.js";
import { customerRoutes } from "./Routes/customer.routes.js";
import { settingRoutes } from "./Routes/setting.routes.js";
import { invoiceRoutes } from "./Routes/invoice.routes.js";
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

app.use("/api/auth",userRouter);
app.use("/api/expense",expenseRouter);
app.use("/api/product",productRouter)
app.use("/api/customer",customerRoutes);
app.use("/api/settings",settingRoutes)
app.use("/api/invoice",invoiceRoutes)

connectDB().then((() => {
    app.listen(PORT,() => {
        console.log("server is running on " + 8080);
    })
    
}))
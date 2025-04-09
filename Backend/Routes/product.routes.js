import express from "express";
import { addProductCategoryController, addProductController } from "../Controllers/product.controller.js";
import { protectedRoute } from "../Middleware/auth.js";
const productRouter  = express.Router();

productRouter.post("/",[protectedRoute],addProductController)
productRouter.post("/add-product-category",[protectedRoute],addProductCategoryController);
export {productRouter}
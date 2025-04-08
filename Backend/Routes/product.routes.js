import express from "express";

import { addProductCategoryController, addProductController } from "../Controllers/product.controller.js";

const productRouter  = express.Router();

productRouter.post("/",addProductController)
productRouter.post("/add-product-category",addProductCategoryController);
export {productRouter}
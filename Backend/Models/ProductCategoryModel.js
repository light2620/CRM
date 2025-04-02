import mongoose from "mongoose";

const ProductCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
});


const ProductCategoryModel = mongoose.model("productCategory",ProductCategorySchema);

export {ProductCategoryModel}
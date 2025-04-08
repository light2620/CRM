import mongoose from "mongoose";

const ProductCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    color : {type : String, required : true},
    description: { type: String ,required: true},
    enable : {type : Boolean,required: true, default : false}
});


const ProductCategoryModel = mongoose.model("productCategory",ProductCategorySchema);

export {ProductCategoryModel}
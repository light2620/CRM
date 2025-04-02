import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'productCategory' },
    tax: { type: mongoose.Schema.Types.ObjectId, ref: 'tax' }
});


const ProductModel = mongoose.model("product",ProductSchema);

export {ProductModel}
import mongoose from "mongoose"


const TaxSchema = new mongoose.Schema({
    name: { type: String, required: true },
    percentage: { type: Number, required: true }
});


const TaxModel = mongoose.model("tax",TaxSchema);


export {TaxModel}
import mongoose from "mongoose"

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    type: { type: String, enum: ['Individual', 'Company'], required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' }
});


const CustomerModel = mongoose.model("company",CustomerSchema);


export {CustomerModel}
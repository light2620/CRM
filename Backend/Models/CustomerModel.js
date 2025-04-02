import mongoose from "mongoose"

const CustomerSchema = new mongoose.Schema({
    type: { type: String, enum: ['Individual', 'Company'], required: true },
    individual : {type: mongoose.Schema.Types.ObjectId, ref  : "individual"},
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' }
});


const CustomerModel = mongoose.model("company",CustomerSchema);


export {CustomerModel}
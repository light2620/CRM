import mongoose from "mongoose";



const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    contactEmail: { type: String },
    contactPhone: { type: String }
});


const CompanyModel = mongoose.model("company",CompanySchema);


export {CompanyModel}
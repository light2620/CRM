import mongoose from "mongoose";



const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
      addressLine: { type: String },
      city: { type: String },
      state: { type: String },
      pincode: { type: String }
    },
    contactEmail: { type: String },
    contactPhone: { type: String }
  });
  


const CompanyModel = mongoose.model("company",CompanySchema);


export {CompanyModel}
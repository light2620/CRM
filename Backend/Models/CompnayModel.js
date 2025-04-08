import mongoose from "mongoose";



const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
      type : {addressLine: { type: String ,required : true },
      city: { type: String, required : true },
      state: { type: String, required : true},
      pincode: { type: String,required : true},
    },
      required : true
    },
    contactEmail: { type: String, required : true },
    contactPhone: { type: String, required : true }
  });
  


const CompanyModel = mongoose.model("company",CompanySchema);


export {CompanyModel}
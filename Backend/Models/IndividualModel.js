import mongoose from "mongoose";


const IndividualSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' }
});


const IndividualModel = mongoose.model("individual",IndividualSchema );


export {IndividualModel}

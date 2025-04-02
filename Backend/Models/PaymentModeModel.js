import mongoose from "mongoose"


const PaymentModeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
});



const PaymentModeModel = mongoose.model("paymentMode", PaymentModeSchema);

export {PaymentModeModel}
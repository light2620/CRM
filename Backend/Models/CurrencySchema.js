import mongoose from "mongoose"



const currencySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    symbol: { type: String, required: true }
});


const CurrencyModel = mongoose.model("currency",currencySchema);

export{CurrencyModel};
import mongoose from "mongoose"

const QuoteSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true }
});


const QuoteModel = mongoose.model("quote",QuoteSchema);

export {QuoteModel};
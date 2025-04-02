import mongoose from "mongoose"

const InvoiceSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    currency: { type: mongoose.Schema.Types.ObjectId, ref: 'currency' },
    paymentMode: { type: mongoose.Schema.Types.ObjectId, ref: 'paymentMode' },
    tax: { type: mongoose.Schema.Types.ObjectId, ref: 'tax' },  
    taxAmount: { type: Number, required: true },  
    status: { type: String, enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' }
});

const InvoiceModel = mongoose.model("invoice", InvoiceSchema);

export {InvoiceModel}

import mongoose from "mongoose"

const InvoiceSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'customer',required: true },
    items: [{
        itemName : {type:String,required:true},
        itemDescription :{type:String,required :true},
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
    }],
    totalItems : {type : Number,required:true},
    
    totalAmount: { type: Number, required: true },
    currency: { type: mongoose.Schema.Types.ObjectId, ref: 'currency',required : true },
    paymentMode: { type: mongoose.Schema.Types.ObjectId, ref: 'paymentMode',required : true },
    tax: { type: mongoose.Schema.Types.ObjectId, ref: 'tax',required : true },  
    taxAmount: { type: Number, required: true },  
    status: { type: String, enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' },
    date : {type : String, required : true},
    expiryDate : {type :String , required : true}
});
InvoiceSchema.path('items').validate(function (value) {
    return value && value.length > 0;
}, 'At least one item is required to create an invoice.');
const InvoiceModel = mongoose.model("invoice", InvoiceSchema);

export {InvoiceModel}

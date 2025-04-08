import mongoose from "mongoose"


const ExpenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    currency :{type : mongoose.Schema.Types.ObjectId, ref : "currency" ,required : true},
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'expenseCategory', required : true },
    date: { type: Date, required : true }
});


const ExpenseModel = mongoose.model("expense",ExpenseSchema);

export {ExpenseModel}
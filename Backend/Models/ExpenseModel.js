import mongoose from "mongoose"


const ExpenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'expenseCategory', required : true },
    date: { type: Date, default: Date.now }
});


const ExpenseModel = mongoose.model("expense",ExpenseSchema);

export {ExpenseModel}
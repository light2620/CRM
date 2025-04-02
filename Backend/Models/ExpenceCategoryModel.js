import mongoose from "mongoose"

const ExpenseCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
});


const ExpenseCategorModel = mongoose.model("expenseCategor",ExpenseCategorySchema);

export {ExpenseCategorModel}
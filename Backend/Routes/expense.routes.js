import express from "express";
import { addExpenseCategorController } from "../Controllers/Expense.controlle.js";

const expenseRouter  = express.Router();

expenseRouter.post("/",addExpenseController)
expenseRouter.post("/add-expense-category",addExpenseCategorController);
export {expenseRouter}
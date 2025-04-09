import express from "express";
import { addExpenseCategorController,addExpenseController } from "../Controllers/Expense.controller.js";
import { protectedRoute } from "../Middleware/auth.js";
const expenseRouter  = express.Router();

expenseRouter.post("/",[protectedRoute],addExpenseController)
expenseRouter.post("/add-expense-category",[protectedRoute],addExpenseCategorController);
export {expenseRouter}
import express from "express";
import { addExpenseCategoryController,addExpenseController } from "../Controllers/Expense.controller.js";
import { protectedRoute } from "../Middleware/auth.js";
const expenseRouter  = express.Router();

expenseRouter.post("/",[protectedRoute],addExpenseController)
expenseRouter.post("/add-expense-category",[protectedRoute],addExpenseCategoryController);
export {expenseRouter}
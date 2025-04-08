import { ExpenseCategorModel } from "../Models/ExpenceCategoryModel.js";
import { ExpenseModel } from "../Models/ExpenseModel.js";
import handleError from "../utils/handleError.js";


const addExpenseCategorController = async (req,res) => {
       try{
           const {name,description} = req.body;

           if (!name || name.trim() === "") {
            return res.status(400).json({
              success: false,
              message: "Expense Category Name is not provided",
            });
          }

           const existingCategory = await ExpenseCategorModel.findOne({name});
           if(existingCategory){
            return res.status(400).json({
                success : false,
                message : "Category with this name already exist"
            })
           }

           const newCategory = await ExpenseCategorModel.create({name,description})
           return res.status(201).json({
            success: true,
            message: "Expense Category created successfully",
            data: newCategory,
          });


       }catch(err){
        handleError(err,"addExpenseCategoryController",res);
       }
}

const addExpenseController = async(req,res) => {
    try{
        const {description,amount,category,date,currency} = req.body;
        if( !amount || !category || !date || !currency){
            return res.status(400).json({
                success : false,
                message : "mandatory data is not provided"
            })
        }
        const expense = {
            description,
            amount,
            currency,
            category,
            date
        }
        const newExpense = new ExpenseModel(expense);
        await newExpense.save();
        return res.status(200).json({
            success : true,
            message :  "Expense Added"
        })
    }catch(err){
        handleError(err,"addExpenseController",res);
    }
}


export {addExpenseCategorController,addExpenseController}
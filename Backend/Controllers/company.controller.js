import { ExpenseCategorModel } from "../Models/ExpenceCategoryModel.js";
import error from "../utils/error.js";


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
        error(err,"addExpenseCategoryController",res);
       }
}

const addExpenseController = async(req,res) => {
    try{
        const {description,amount,category,date,currency} = req.body;
        if(!description || !amount || !category || !date || !currency){
            return res.status(400)
        }
    }catch(err){
        error(err,"addExpenseController",res);
    }
}


export {addExpenseCategorController}
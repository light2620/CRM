import { CurrencyModel } from "../Models/CurrencyModel"
import { PaymentModeModel } from "../Models/PaymentModeModel"
import { TaxModel } from "../Models/TaxModel"
import handleError from "../utils/handleError"


export const addTaxController = async(req,res) => {
    try{
         const {name ,percentage} = req.body
         if(!name || !percentage){
            return res.status(400).json({
                success  :false,
                message : "Mandatory fields are required"
            })
         }

         const newTax = new TaxModel({name,percentage});
         await newTax.save();
         return res.status(201).json({
            success : true,
            message : "Tax created successfully",
            data : newTax
         })
    }catch(err){
        handleError(err,"addTaxController",res)
    }
}


export const addCurrencyController = async(req,res) => {
    try{
        const {name ,code,symbol,color,enable} = req.body
        if(!name || !code || !symbol || !color){
           return res.status(400).json({
               success  :false,
               message : "Mandatory fields are required"
           })
        }

        const existingCurrency = await CurrencyModel.findOne({ code });
        if (existingCurrency) {
            return res.status(409).json({
                success: false,
                message: "Currency with this code already exists"
            });
        }

        const newCurrency = new CurrencyModel({name,code,symbol,color,enable});
        await newCurrency.save();
        return res.status(201).json({
           success : true,
           message : "Currency created successfully",
           data : newCurrency
        })
   }catch(err){
       handleError(err,"addCurrencyController",res)
   }
}


export const addPaymentModeController = async(req,res) => {
    try{
         const {name ,description} = req.body
         if(!name ){
            return res.status(400).json({
                success  :false,
                message : "Mandatory fields are required"
            })
         }

         const newPaymentMode = new PaymentModeModel({name,description});
         await newPaymentMode.save();
         return res.status(201).json({
            success : true,
            message : "Payment mode created successfully",
            data : newPaymentMode
         })
    }catch(err){
        handleError(err,"addPaymentModeController",res)
    }
}
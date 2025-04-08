import { InvoiceModel } from "../Models/InvoiceModel";
import handleError from "../utils/handleError"


export const addInvoiceController = async(req,res) => {
    try{
    const {
        customer,
        items,
        totalAmount,
        currency,
        paymentMode,
        tax,
        taxAmount,
        status,
        date,
        expiryDate
    }  = req.body;
    if(!customer || items.length == 0 || !totalAmount || !currency || !paymentMode || !tax || !taxAmount || !date || !expiryDate){
        return res.status(400).json({
            success : false,
            message : "Mandatory fields are required"
        })
    }
    const totalItems = items.length;

    const newInvoice = new InvoiceModel({
        customer,items,totalAmount,currency,paymentMode,tax,taxAmount,status,date,expiryDate,totalItems
    }) 
    await newInvoice.save();
    return res.status(201).json({
        success : true,
        message : "Invoice created successfully",
        data: newInvoice
    })

    }catch(err){
        handleError(err,"addInvoiceController",res)
    }
}
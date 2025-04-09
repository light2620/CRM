import { ProductCategoryModel } from "../Models/ProductCategoryModel.js"
import handleError from "../utils/handleError.js"



export const  addProductCategoryController = async(req,res) => {
    try{
         const {name,color,description,enable} = req.body
         
         if(!name || !color || !description || !enable){
            return res.status(400).json({
                success  : false,
                message : "Mandatory fields are required"
            })
         }
         const existingCategory = await ProductCategoryModel.findOne({ name });
         if (existingCategory) {
            return res.status(409).json({
                success: false,
                message: "Product category with this name already exists"
            });
        }
         const newProductCategory = new ProductCategoryModel({
            name,
            color,
            description,
            enable
         })
         await newProductCategory.save();
         return res.status(201).json({
            success : true,
            message : "Product category added successfully",
            data : newProductCategory
         })
    }catch(err){
        handleError(err,"addProductCategoryController",res);
    }
}

export const addProductController = async (req, res) => {
    try {
        const { name, description, price, category, currency, tax } = req.body;

        // Basic validation
        if (!name || !price || !category || !currency || !tax) {
            return res.status(400).json({
                success: false,
                message: "Mandatory fields are required"
            });
        }

        // Optional: Check if category exists
        const existingCategory = await ProductCategoryModel.findById(category);
        if (!existingCategory) {
            return res.status(404).json({
                success: false,
                message: "Product category not found"
            });
        }

        // Optional: Check if currency exists
        const existingCurrency = await CurrencyModel.findById(currency);
        if (!existingCurrency) {
            return res.status(404).json({
                success: false,
                message: "Currency not found"
            });
        }

        // Optional: Check if tax exists
        const existingTax = await TaxModel.findById(tax);
        if (!existingTax) {
            return res.status(404).json({
                success: false,
                message: "Tax not found"
            });
        }

        // Create new product
        const newProduct = new ProductModel({
            name,
            description,
            price,
            category,
            currency,
            tax
        });

        await newProduct.save();

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: newProduct
        });

    } catch (err) {
        handleError(err, "addProductController", res);
    }
};

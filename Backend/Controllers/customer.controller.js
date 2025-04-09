import { CustomerModel } from "../Models/CustomerModel.js";
import { IndividualModel } from "../Models/IndividualModel.js";
import { CompanyModel } from "../Models/CompnayModel.js";
import handleError from "../utils/handleError.js";

export const createCompanyController = async(req,res) => {
   try{
      const {name,address,contactEmail,contactPhone} = req.body;
      const isAddresValid = address && Object.values(address).every((val) => val != "");
      if(!name || !isAddresValid || !contactEmail || !contactPhone){
        return res.status(400).json({
            success : false,
            message : "mandatory fields are required"
        })
      }
      const newCompany = new CompanyModel({
        name,address,contactEmail,contactPhone
      })
      await newCompany.save();
      return res.status(201).json({
        success : true,
        message : "company created successfully"
      })
   }catch(err){
    handleError(err,"createCompanyController",res);
   }
}

export const createIndividualController  = async(req,res) => {
     try{
        const{firstName,lastName,email,phone,company} = req.body
        if(!firstName || !lastName || !email || !phone){
            return res.status(400).json({
                success : false,
                message : "mandatory fields are required"
            })
        }

        const newIndividual = new IndividualModel({
            firstName,lastName,email,phone,company
        })
        await newIndividual.save();
        return res.status(201).json({
            success : true,
            message : "New individual added",
            data: newIndividual
        })

     }catch(err){
        handleError(err,"createIndividualController",res)
     }
}
export const createCustomerController = async (req, res) => {
    try {
        const { type, individual, company } = req.body;


        if (!['Individual', 'Company'].includes(type)) {
            return res.status(400).json({ message: "Invalid customer type" });
        }

        const customerData = { type };

        if (type === 'Individual') {
            if (!individual) {
                return res.status(400).json({ message: "Individual ID is required" });
            }
            customerData.individual = individual;
        } else if (type === 'Company') {
            if (!company) {
                return res.status(400).json({ message: "Company ID is required" });
            }
            customerData.company = company;
        }

        const newCustomer = new CustomerModel(customerData);
        await newCustomer.save();

        res.status(201).json({ message: "Customer created successfully", data: newCustomer });
    } catch (err) {
        handleError(err,"createCustomerController",res)
    }
};



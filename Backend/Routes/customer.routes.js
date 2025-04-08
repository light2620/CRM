import express from "expres"
import { createCompanyController, createCustomerController, createIndividualController } from "../Controllers/customer.controller.js";


const customerRoutes = express.Router();

customerRoutes.post("/create-company",createCompanyController);
customerRoutes.post("/create-individual",createIndividualController);
customerRoutes.post("/create-customer",createCustomerController);


export {customerRoutes}
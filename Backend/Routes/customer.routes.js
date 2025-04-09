import express from "express"
import { createCompanyController, createCustomerController, createIndividualController } from "../Controllers/customer.controller.js";
import { protectedRoute } from "../Middleware/auth.js";

const customerRoutes = express.Router();

customerRoutes.post("/create-company",[protectedRoute],createCompanyController);
customerRoutes.post("/create-individual",[protectedRoute],createIndividualController);
customerRoutes.post("/create-customer",[protectedRoute],createCustomerController);


export {customerRoutes}
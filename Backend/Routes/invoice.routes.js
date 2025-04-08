import express from "express"
import { addInvoiceController } from "../Controllers/invoice.controller.js";


const invoiceRoutes = express.Router();

invoiceRoutes.post("/add-invoice",addInvoiceController);

export {invoiceRoutes}
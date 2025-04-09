import express from "express"
import { addInvoiceController } from "../Controllers/invoice.controller.js";
import { protectedRoute } from "../Middleware/auth.js";

const invoiceRoutes = express.Router();

invoiceRoutes.post("/add-invoice",[protectedRoute],addInvoiceController);

export {invoiceRoutes}
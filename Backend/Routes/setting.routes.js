import express from "express"
import { addCurrencyController, addPaymentModeController, addTaxController } from "../Controllers/setting.controller.js";
import { protectedRoute } from "../Middleware/auth.js";

const settingRoutes = express.Router();

settingRoutes.post("/add-tax",[protectedRoute],addTaxController)
settingRoutes.post("/add-currency",[protectedRoute],addCurrencyController)
settingRoutes.post("/add-payment-mode",[protectedRoute],addPaymentModeController)

export {settingRoutes}
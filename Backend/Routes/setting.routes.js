import express from "express"
import { addCurrencyController, addPaymentModeController, addTaxController } from "../Controllers/setting.controller.js";


const settingRoutes = express.Router();

settingRoutes.post("/add-tax",addTaxController)
settingRoutes.post("/add-currency",addCurrencyController)
settingRoutes.post("/add-payment-mode",addPaymentModeController)

export {settingRoutes}
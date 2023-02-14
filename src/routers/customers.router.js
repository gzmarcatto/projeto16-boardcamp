import { Router } from "express";
import * as customersController from "../controllers/customers.controller.js";
import { validateSchemaCustomers } from "../middlewares/customers.middleware.js";

const customersRouter = Router();

customersRouter.post(`/customers`, validateSchemaCustomers, customersController.postCustomers);
customersRouter.get(`/customers`, customersController.getCustomers);

export default customersRouter;

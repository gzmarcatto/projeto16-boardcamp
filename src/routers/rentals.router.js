import { Router } from "express";
import * as rentalsController from "../controllers/rentals.controller.js";
import { validateSchemaRentals } from "../middlewares/rentals.middleware.js";

const rentalsRouter = Router();

rentalsRouter.post(`/rentals`, validateSchemaRentals, rentalsController.postRentals);
rentalsRouter.get(`/rentals`, rentalsController.getRentals);

export default rentalsRouter;

import { Router } from "express";
import * as rentalsController from "../controllers/rentals.controller.js";
import { validateSchemaRentals } from "../middlewares/rentals.middleware.js";

const rentalsRouter = Router();

rentalsRouter.post(`/rentals`, validateSchemaRentals, rentalsController.postRentals);
rentalsRouter.get(`/rentals`, rentalsController.getRentals);
// rentalsRouter.post('/rentals/:id/return', validFinishRental, finish)
// rentalsRouter.delete('/rentals/:id', destroy)

export default rentalsRouter;

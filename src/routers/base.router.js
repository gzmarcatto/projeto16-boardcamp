import { Router } from "express";
import * as somethingController from "../controllers/base.controller.js";
import { something } from "../schemas/base.schema.js";
import { validateSchemaBase } from "../middlewares/index.js";

const somethingRouter = Router();

somethingRouter.post(`/something`, validateSchemaBase(something), somethingController.postSomething);

export default somethingRouter;

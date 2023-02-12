import { Router } from "express";
import * as gamesController from "../controllers/games.controller.js";
import { gamesSchema } from "../schemas/games.schema.js";
import { validateSchemaMiddleware } from "../middlewares/index.js";

const gamesRouter = Router();

gamesRouter.post(`/games`, validateSchemaMiddleware(gamesSchema), gamesController.postGames);
gamesRouter.get(`/games`, gamesController.getGames);

export default gamesRouter;

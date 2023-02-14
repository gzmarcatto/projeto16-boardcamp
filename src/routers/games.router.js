import { Router } from "express";
import * as gamesController from "../controllers/games.controller.js";
import { gamesSchema } from "../schemas/games.schema.js";
import { validateSchemaGames } from "../middlewares/games.middleware.js";

const gamesRouter = Router();

gamesRouter.post(`/games`, validateSchemaGames, gamesController.postGames);
gamesRouter.get(`/games`, gamesController.getGames);

export default gamesRouter;

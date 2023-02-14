import express from "express";
import cors from "cors";
import "dotenv/config"

import { listenServer } from "./database/response.js";
import gamesRouter from "./routers/games.router.js";

const PORT = process.env.PORT || 5000;
const server = express();
server.use(cors());
server.use(express.json());

server.use(gamesRouter);

server.listen(PORT, listenServer(PORT));
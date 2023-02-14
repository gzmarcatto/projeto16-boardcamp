import { gamesSchema } from "../schemas/games.schema.js";
import { db } from "../database/database.connection.js";

export async function validateSchemaGames(req, res, next) {
  const game = req.body;

  const validate = gamesSchema.validate(game);

  if (validate.error) {
    const errors = validate.error.details.map((error) => error.message);
    return res.status(400).send(errors);
  }

  next();
}

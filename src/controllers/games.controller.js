import { db } from "../database/database.connection.js";

export async function postGames(req, res) {
  try {
    const { name, image, stockTotal, pricePerDay } = req.body;

    await db.query(
      'INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4);'
    )[(name, image, stockTotal, pricePerDay)];

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

export async function getGames(req, res) {
  try {
    const games = await db.query("SELECT * FROM games");
    const results = games.rows;
    console.log(results);
    return res.status(200).send(results);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

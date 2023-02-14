import { db } from "../database/database.connection.js";

export async function postCustomers(req, res) {
  try {
    const { name, image, stockTotal, pricePerDay } = req.body;

    const existsGame = await db.query(`SELECT * FROM games WHERE name=($1)`, [name]);
    if (existsGame.rowCount > 0) return res.sendStatus(409);

    await db.query(
      'INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4);',
      [name, image, stockTotal, pricePerDay]
    );
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

export async function getCustomers(req, res) {
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

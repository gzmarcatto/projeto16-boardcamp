import { rentalsSchema } from "../schemas/rentals.schema.js";
import { db } from "../database/database.connection.js";

export async function validateSchemaRentals(req, res, next) {
  const rental = req.body;

  const validate = rentalsSchema.validate(rental);

  if (validate.error) {
    const errors = validate.error.details.map((error) => error.message);
    return res.status(400).send(errors);
  }

  const existsCustomer = await db.query("SELECT * FROM customers WHERE id=$1", [rental.customerId]);
  const existsGame = await db.query("SELECT * FROM games WHERE id=$1", [rental.gameId]);
  if (existsCustomer.rowCount === 0 || existsGame.rowCount === 0) return res.sendStatus(400);

  const existsStock = await db.query(
    'SELECT * FROM rentals WHERE "gameId"=$1 AND "returnDate" IS NULL',
    [rental.gameId]
  );
  if (existsStock.rowCount >= existsGame.rows[0].stockTotal) return res.status(400).send(`Estoque esgotado!`);
  
  next();
}

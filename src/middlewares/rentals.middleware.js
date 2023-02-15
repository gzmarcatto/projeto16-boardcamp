import { rentalsSchema } from "../schemas/rentals.schema.js";

export async function validateSchemaRentals(req, res, next) {
  const rental = req.body;
  const validate = rentalsSchema.validate(rental);

  if (validate.error) {
    const errors = validate.error.details.map((error) => error.message);
    return res.status(400).send(errors);
  }

  next();
}

import { customersSchema } from "../schemas/customers.schema.js";

export async function validateSchemaCustomers(req, res, next) {
  const customer = req.body;
  const validate = customersSchema.validate(customer);

  if (validate.error) {
    const errors = validate.error.details.map((error) => error.message);
    return res.status(400).send(errors);
  }

  next();
}

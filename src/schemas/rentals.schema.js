import Joi from "joi";

export const rentalsSchema = Joi.object({
  customerId: joi.number().integer().positive().required(),
  gameId: joi.number().integer().positive().required(),
  daysRented: joi.number().integer().positive().required(),
});
import Joi from "joi";

export const gamesSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  image: Joi.string().required(),
  stockTotal: Joi.number().greater(0),
  pricePerDay: Joi.number().greater(0),
});
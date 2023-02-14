import Joi from "joi";

export const customersSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  cpf: Joi.number().greater(10).required(),
  birthday: Joi.date().required(),
});
import Joi from "joi";

export const customersSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().pattern(/^\d+$/).min(10).max(11).required(),
  cpf: Joi.string().pattern(/^\d+$/).length(11).required(),
  birthday: Joi.string().required(),
});
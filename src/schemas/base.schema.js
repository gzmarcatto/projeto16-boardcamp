import Joi from "joi";

export const validateSchemaBase = Joi.object({
  title: Joi.string().required(),
  pollId: Joi.string().length(24),
});
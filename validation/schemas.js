// dependencies
const Joi = require("joi");
exports.schemas = {
  registrationSchema: Joi.object({
    name: Joi.string().min(3).max(30).required(),
    age: Joi.number().integer().required(),
  }),
};

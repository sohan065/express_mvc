// dependencies
const Joi = require("joi");

exports.runValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });

    if (error) {
      const errorList = error.details.map((err) => ({
        message: err.message,
        field: err.context.label,
      }));

      return res.status(400).json({
        message: "Invalid input",
        errors: errorList,
      });
    }
    next();
  };
};

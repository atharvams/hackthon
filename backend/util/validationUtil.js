import Joi from "joi";

const registrationSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).required().messages({
    "string.empty": "First name is required.",
    "string.min": "First name must be at least 2 characters long.",
    "string.max": "First name cannot exceed 50 characters.",
  }),
  lastName: Joi.string().trim().min(2).max(50).required().messages({
    "string.empty": "Last name is required.",
    "string.min": "Last name must be at least 2 characters long.",
    "string.max": "Last name cannot exceed 50 characters.",
  }),
  email: Joi.string()
    .trim()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "in", "co"] },
    })
    .required()
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Please enter a valid email address.",
    }),
  mobileNo: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base":
        "Mobile number must be 10-15 digits long and contain only numbers.",
    }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password is required.",
    "string.min": "Password must be at least 8 characters long.",
  }),
  cnfPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Confirm password must match the password.",
    "any.required": "Confirm password is required.",
  }),
  dateOfBirth: Joi.date().iso().max("now").required().messages({
    "date.empty": "Date of birth is required.",
    "date.iso": "Date of birth must be in YYYY-MM-DD format.",
    "date.max": "Date of birth cannot be in the future.",
  }),
});

export function validateRegistration(userData) {
  // Use the schema to validate the data
  const { error } = registrationSchema.validate(userData, {
    abortEarly: false,
  });

  if (error) {
    // If there are validation errors, return them.
    return {
      status: "error",
      message: "Validation failed",
      details: error.details.map((detail) => detail.message),
    };
  } else {
    return null;
  }
}

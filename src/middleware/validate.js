const {body, validationResult} = require('express-validator');

const createContactValidation = () => {
  return [
    body('first_name').notEmpty().withMessage("First name is required")
    .isLength({min: 2, max: 50}).withMessage("First name must be between 2 and 50 characters"),

    body('last_name').notEmpty().withMessage("Last name is required")
    .isLength({min: 2, max: 50}).withMessage("Last name must be between 2 and 50 characters"),

    body('email').notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address"),

    body('gender').notEmpty().withMessage("Gender is required"),
    body('job').notEmpty().withMessage("Job is required"),
    
    body('employee_id').notEmpty().withMessage("Employee id is required")
    .isNumeric().withMessage("Employee id must be a number"),

    body('avatar').notEmpty().withMessage("Avatar is required")
  ]
}

const updateContactValidation = () => {
  return [
    body('first_name').isLength({min: 2, max: 50}).withMessage("First name must be between 2 and 50 characters"),

    body('last_name').isLength({min: 2, max: 50}).withMessage("Last name must be between 2 and 50 characters"),

    body('email').isEmail().withMessage("Invalid email address"),

    body('employee_id').isNumeric().withMessage("Employee id must be a number"),

    body('avatar').notEmpty().withMessage("Avatar is required")
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  updateContactValidation,
  createContactValidation,
  validate
}
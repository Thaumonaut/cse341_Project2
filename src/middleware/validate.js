const {body, validationResult} = require('express-validator');

const createEmployeeValidation = () => {
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

    body('birthday').notEmpty().withMessage("Birthday is required")
    .isDate().withMessage("Birthday must be a valid date"),

    body('start_date').notEmpty().withMessage("Start date is required")
    .isDate().withMessage("Start date must be a valid date"),
  ]
}

const updateEmployeeValidation = () => {
  return [
    body('first_name').optional().isLength({min: 2, max: 50}).withMessage("First name must be between 2 and 50 characters"),
    body('last_name').optional().isLength({min: 2, max: 50}).withMessage("Last name must be between 2 and 50 characters"),
    body('email').optional().isEmail().withMessage("Invalid email address"),
    body('gender').optional().isLength({min: 2, max: 50}).withMessage("Gender must be between 2 and 50 characters"),
    body('job').optional().isLength({min: 2, max: 50}).withMessage("Job must be between 2 and 50 characters"),
    body('birthday').optional().isDate().withMessage("Birthday must be a valid date"),
    body('start_date').optional().isDate().withMessage("Start date must be a valid date"),
  ]
}

const updateClientValidation = () => {
  return [
    body('client_id').notEmpty().withMessage("Client id is not required"),
    body('first_name').optional().isLength({min: 2, max: 50}).withMessage("First name must be between 2 and 50 characters"),
    body('last_name').optional().isLength({min: 2, max: 50}).withMessage("Last name must be between 2 and 50 characters"),
    body('phone').optional().isLength({min: 2, max: 50}).withMessage("Phone must be between 2 and 50 characters"),
    body('company').optional().isLength({min: 2, max: 50}).withMessage("Company name must be between 2 and 50 characters"),
    body('email').optional().isEmail().withMessage("Invalid email address"),
  ]
}

const createClientValidation = () => {
  return [
    body('client_id').notEmpty().withMessage("Client id is required")
      .isNumeric().withMessage("Client id must be a number"),
    body('first_name').notEmpty().withMessage("First name is required")
      .isLength({min: 2, max: 50}).withMessage("First name must be between 2 and 50 characters"),
    body('last_name').notEmpty().withMessage("Last name is required")
      .isLength({min: 2, max: 50}).withMessage("Last name must be between 2 and 50 characters"),
    body('company').notEmpty().withMessage("Company is required")
      .isLength({min: 1, max: 100}).withMessage("Company name must be between 1 and 100 characters"),
    body('phone').notEmpty().withMessage("Phone is required")
      .isMobilePhone('en-US').withMessage("Invalid phone number"),
    body('email').notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Invalid email address"),
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
  updateEmployeeValidation,
  createEmployeeValidation,
  createClientValidation,
  updateClientValidation,
  validate
}
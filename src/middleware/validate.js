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

    body('avatar').notEmpty().withMessage("Avatar is required"),

    body('birthday').notEmpty().withMessage("Birthday is required")
    .isDate().withMessage("Birthday must be a valid date"),

    body('start_date').notEmpty().withMessage("Start date is required")
    .isDate().withMessage("Start date must be a valid date"),
  ]
}

const updateEmployeeValidation = () => {
  return [
    body('first_name').isLength({min: 2, max: 50}).withMessage("First name must be between 2 and 50 characters"),
    body('last_name').isLength({min: 2, max: 50}).withMessage("Last name must be between 2 and 50 characters"),
    body('email').isEmail().withMessage("Invalid email address"),
    body('employee_id').isNumeric().withMessage("Employee id must be a number"),
    body('avatar').notEmpty().withMessage("Avatar is required"),
    body('job').isLength({min: 2, max: 50}).withMessage("Job must be between 2 and 50 characters"),
    body('birthday').isDate().withMessage("Birthday must be a valid date"),
    body('start_date').isDate().withMessage("Start date must be a valid date"),
  ]
}

const updateProjectValidation = () => {
  return [
    body('name').isLength({min: 2, max: 50}).withMessage("Project name must be between 2 and 50 characters"),
    body('description').isLength({min: 2, max: 500}).withMessage("Project description must be between 2 and 500 characters")
  ]
}

const createProjectValidation = () => {
  return [
    body('name').isLength({min: 2, max: 50}).withMessage("Project name must be between 2 and 50 characters"),
    body('description').isLength({min: 2, max: 500}).withMessage("Project description must be between 2 and 500 characters"),
    body('client').isLength({min: 2, max: 50}).withMessage("Client name must be between 2 and 50 characters"),
    body('employee_id').isNumeric().withMessage("Employee id must be a number")
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
  createProjectValidation,
  updateProjectValidation,
  validate
}
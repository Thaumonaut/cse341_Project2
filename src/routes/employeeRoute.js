const express = require("express");
const router = express.Router();
const { getEmployees, addEmployee, deleteEmployee, getEmployeeById, updateEmployee } = require("../controllers/employees");
const { validate, createEmployeeValidation, updateEmployeeValidation } = require("../middleware/validate");

const { requiresAuth } = require("express-openid-connect");

// Get all employees
router.get("/", getEmployees)
// Get a employee
router.get("/:id", getEmployeeById)
// Add a new employee
router.post("/", requiresAuth(), createEmployeeValidation(), validate, addEmployee)
// Delete a employee
router.delete("/:id", deleteEmployee)
// Update a employee
router.put("/:id", updateEmployeeValidation(), validate, updateEmployee)

module.exports = router
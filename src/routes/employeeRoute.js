const express = require("express");
const router = express.Router();
const { getEmployees, addEmployee, deleteEmployee, getEmployeeById, updateEmployee, initDatabase } = require("../controllers/employees");
const { validate, createEmployeeValidation, updateEmployeeValidation } = require("../middleware/validate");

// Get all employees
router.get("/", getEmployees)
// Get a employee
router.get("/:id", getEmployeeById)
// Add a new employee
router.post("/", createEmployeeValidation(), validate, addEmployee)
// Delete a employee
router.delete("/:id", deleteEmployee)
// Update a employee
router.put("/:id", updateEmployeeValidation(), validate, updateEmployee)


// Initialize the database
router.get("/initData", initDatabase)

module.exports = router
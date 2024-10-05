const express = require("express");
const connectDB = require("../database/db");
const router = express.Router();

router.get("/", (req, res) => {
  // #swagger.ignore = true
  res.send(`Welcome to the Employee List API. To view the docs, visit http://localhost:${process.env.PORT || 3000}/api`);
})

// Add the documentation routes to the router
router.use("/api", require("./apiDocsRoute"));

// Add the employee routes to the router
router.use("/api/employees", require("./employeeRoute")/** #swagger.tags = ["Employees"] */);

router.use("/api/projects", require("./projectRoute")/** #swagger.tags = ["Departments"] */);

module.exports = router
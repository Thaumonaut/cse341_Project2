const express = require("express");
const connectDB = require("../database/db");
const router = express.Router();

router.get("/", (req, res) => {
  // #swagger.ignore = true
  res.send(`Welcome to the Employee List API. To view the docs, visit /api/docs`);
})

// Add the documentation routes to the router
router.use("/api", require("./apiDocsRoute"));

// Add the employee routes to the router
router.use("/api/employees", require("./employeeRoute")/** #swagger.tags = ["Employees"] */);

router.use("/api/clients", require("./clientRoute")/** #swagger.tags = ["Clients"] */);

module.exports = router
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // #swagger.ignore = true
  res.send(`
    <h1>Welcome to the Employee List API. To view the docs, visit /api/docs</h1>
    <p>For login, visit /login</p>
    <p> You are currently ${req.session.user ? "logged in" : "not logged in"}</p>
    `);
})

// Add the documentation routes to the router
router.use("/api", require("./apiDocsRoute"));

// Add the auth routes to the router
router.use("/", require("./authRoute")/** #swagger.ignore = true */);

// Add the employee routes to the router
router.use("/api/employees", require("./employeeRoute")/** #swagger.tags = ["Employees"] */);

// Add the client routes to the router
router.use("/api/clients", require("./clientRoute")/** #swagger.tags = ["Clients"] */);

module.exports = router
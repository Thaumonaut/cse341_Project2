const express = require("express");
const connectDB = require("../database/db");
const router = express.Router();

router.get("/", (req, res) => {
  // #swagger.ignore = true
  res.send(`Welcome to the Contact List API. To view the docs, visit http://localhost:${process.env.PORT || 3000}/api`);
})

// Add the documentation routes to the router
router.use("/api", require("./apiDocsRoute"));

// Add the contact routes to the router
router.use("/api/contacts", require("./contactsRoute"));

module.exports = router
const express = require("express");
const router = express.Router();
const { getClients, addClient, deleteClient, getClientById, updateClient } = require("../controllers/clients");
const { validate, createClientValidation, updateClientValidation } = require("../middleware/validate");

// Get all Clients
router.get("/", getClients)
// Get a Client
router.get("/:id", getClientById)
// Add a new Client
router.post("/", createClientValidation(), validate, addClient)
// Delete a Client
router.delete("/:id", deleteClient)
// Update a Client
router.put("/:id", updateClientValidation(), validate, updateClient)


module.exports = router
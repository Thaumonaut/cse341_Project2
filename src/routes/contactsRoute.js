const express = require("express");
const router = express.Router();
const { getContacts, addContact, deleteContact, getContactById, updateContact, initDatabase } = require("../controllers/contacts");
const { validate, createContactValidation, updateContactValidation } = require("../middleware/validate");

// Get all contacts
router.get("/", getContacts)
// Get a contact
router.get("/:id", getContactById)
// Add a new contact
router.post("/", createContactValidation(), validate, addContact)
// Delete a contact
router.delete("/:id", deleteContact)
// Update a contact
router.put("/:id", updateContactValidation(), validate, updateContact)


// Initialize the database
router.get("/initData", initDatabase)

module.exports = router
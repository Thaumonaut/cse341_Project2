const express = require("express");
const router = express.Router();
const { getProjects, addProject, deleteProject, getProjectById, updateProject } = require("../controllers/projects");
const { validate, createProjectValidation, updateProjectValidation } = require("../middleware/validate");

// Get all Projects
router.get("/", getProjects)
// Get a Project
router.get("/:id", getProjectById)
// Add a new Project
router.post("/", createProjectValidation(), validate, addProject)
// Delete a Project
router.delete("/:id", deleteProject)
// Update a Project
router.put("/:id", updateProjectValidation(), validate, updateProject)


module.exports = router
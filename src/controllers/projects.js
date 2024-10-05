const json = require("body-parser/lib/types/json");
const { project } = require("../database/schema");

const getProjects = (req, res) => {
  project.find(req.query).exec().then((data) => {
    res.status(200).json(data)
  })
}

const getProjectById = (req, res) => {
  project.findOne({_id: req.params.id}).exec().then((data) => {
    res.status(200).json(data)
  })
}

const addProject = (req, res) => {
  if(!req.body) return res.status(400).send(json({message: "Project details cannot be empty"}))
  project.create(req.body).then((data) => {
    res.status(200).json(data)
  })
}

const deleteProject = (req, res) => {
  project.findOneAndDelete({_id: req.params.id}).exec().then((data) => {
    res.status(200).json(data)
  })
}

const updateProject = (req, res) => { 
  project.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec().then((data) => {
    res.status(200).json(data)
  })
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  deleteProject,
  updateProject
}
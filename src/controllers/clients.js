const json = require("body-parser/lib/types/json");
const { client } = require("../database/schema");

const getClients = (req, res) => {
  client.find(req.query).exec().then((data) => {
    if(!data) return res.status(404).json({message: "Clients not found"})
    res.status(200).json(data)
  })
}

const getClientById = (req, res) => {
  client.findOne({client_id: req.params.id}).exec().then((data) => {
    if(!data) return res.status(404).json({message: "Client not found"})
    res.status(200).json(data)
  })
}

const addClient = async (req, res) => {
      /*  #swagger.parameters['Body'] = {
          in: 'body',
          description: 'Add client',
          required: true,
          schema: { $ref: '#/definitions/Client' }
  } */
  if(!req.body) {
    res.status(400).send(json({message: "Client details cannot be empty"}))
    return
  }

  const data = await client.findOne({client_id: req.body.client_id}).exec()
  if(data) return res.status(409).json({message: "Client already exists"})

  client.create(req.body).then((data) => {
    res.status(200).json(data)
  })
}

const deleteClient = async (req, res) => {
  const data = await client.findOne({client_id: req.params.id}).exec()
  if(!data) return res.status(404).json({message: "Client not found"})

  client.findOneAndDelete({client_id: req.params.id}).exec().then((data) => {
    res.status(200).json(data)
  })
}

const updateClient = (req, res) => {
    /*  #swagger.parameters['Body'] = {
          in: 'body',
          description: 'Update client details by client id',
          required: true,
          schema: { $ref: '#/definitions/Client' }
  } */

  const data = client.findOne({client_id: req.params.id}).exec()
  if(!data) return res.status(404).json({message: "Client not found"})

  client.findOneAndUpdate({client_id: req.params.id}, req.body, {new: true}).exec().then((data) => {
    res.status(200).json(data)
  })
}

module.exports = {
  getClients,
  getClientById,
  addClient,
  deleteClient,
  updateClient
}
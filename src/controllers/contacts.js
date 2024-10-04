const mongoose = require("mongoose");
const { contact } = require("../database/schema");
const data = require("../database/MOCK_DATA.json")

// 

const getContacts = (req, res) => {
  /*  #swagger.parameters['First Name'] = {
        type: 'string',
        required: false,
        name: 'first_name',
        in: 'query',
        description: 'Filter by first name',
      }

      #swagger.parameters['Last Name'] = {
        type: 'string',
        required: false,
        name: 'last_name',
        in: 'query',
        description: 'Filter by last name',
      }

      #swagger.parameters['Gender'] = {
        type: 'string',
        required: false,
        name: 'gender',
        in: 'query',
        description: 'Filter by gender',
      }

            #swagger.parameters['Job'] = {
        type: 'string',
        required: false,
        name: 'job',
        in: 'query',
        description: 'Filter by job',
      }

      #swagger.responses[200] = {
        description: 'OK',
        schema: { $ref: '#/definitions/Contact' }
      }
  */
  contact.find(req.query)
    .collation({ locale: "en", strength: 2 })
    .exec()
    .then((data) => {
      res.status(200).json(data)
    })

}

const getContactById = (req, res) => {
  
  const id = req.params.id
  contact.findOne({employee_id: id}).exec().then((data) => {
    res.status(200).json(data)
  })
}




/**
 * Add a new contact to the database.
 *
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 *
 * @returns {void}
 */
const addContact = (req, res) => {
  /*  #swagger.parameters['Body'] = {
          in: 'body',
          description: 'Add a user details',
          required: true,
          schema: { $ref: '#/definitions/Contact' }
  } */
  const newContact = new contact(req.body)
  newContact.save().then((data) => {
    res.status(200).json(data)
  })
}

const updateContact = (req, res) => {
  /*  #swagger.parameters['Body'] = {
          in: 'body',
          description: 'Update contact details by employee id',
          required: true,
          schema: { $ref: '#/definitions/Contact' }
  } */
  const id = req.params.id
  console.log(req.body)
  contact.findOneAndUpdate({employee_id: id}, req.body, {new: true}).exec().then((data) => {

    res.status(200).json(data)
  })
}

const deleteContact = (req, res) => {
  const id = req.params.id
  contact.findOneAndDelete({employee_id: id}).exec().then((data) => {
    res.status(200).json({message: "data deleted"})
  })
}

// Fills the database with data if empty
const initDatabase = (req, res) => {
  // #swagger.ignore = true
  if(contact.length > 0) {
    res.status(200).json({message: "Already data in database."})
    return
  }
  contact.insertMany(data)
  res.status(200).json({message: "data inserted"})
}

module.exports = {
  getContacts,
  initDatabase,
  addContact,
  deleteContact,
  getContactById,
  updateContact
}
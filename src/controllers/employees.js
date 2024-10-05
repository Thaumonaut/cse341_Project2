const { employee } = require("../database/schema");
const data = require("../database/MOCK_DATA.json")

// 

const getEmployees = (req, res) => {
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
        schema: { $ref: '#/definitions/Employee' }
      }
  */
  employee.find(req.query)
    .collation({ locale: "en", strength: 2 })
    .exec()
    .then((data) => {
      res.status(200).json(data)
    })

}

const getEmployeeById = (req, res) => {
  const id = req.params.id
  employee.findOne({employee_id: id}).exec().then((data) => {
    res.status(200).json(data)
  })
}

/**
 * Add a new employee to the database.
 *
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 *
 * @returns {void}
 */
const addEmployee = (req, res) => {
  /*  #swagger.parameters['Body'] = {
          in: 'body',
          description: 'Add a user details',
          required: true,
          schema: { $ref: '#/definitions/Employee' }
  } */
  const newEmployee = new employee(req.body)
  newEmployee.save().then((data) => {
    res.status(200).json(data)
  })
}

const updateEmployee = (req, res) => {
  /*  #swagger.parameters['Body'] = {
          in: 'body',
          description: 'Update employee details by employee id',
          required: true,
          schema: { $ref: '#/definitions/Employee' }
  } */
  const id = req.params.id
  console.log(req.body)
  employee.findOneAndUpdate({employee_id: id}, req.body, {new: true}).exec().then((data) => {

    res.status(200).json(data)
  })
}

const deleteEmployee = (req, res) => {
  const id = req.params.id
  employee.findOneAndDelete({employee_id: id}).exec().then((data) => {
    res.status(200).json({message: "data deleted"})
  })
}

// Fills the database with data if empty
const initDatabase = (req, res) => {
  // #swagger.ignore = true
  if(employee.length > 0) {
    res.status(200).json({message: "Already data in database."})
    return
  }
  employee.insertMany(data)
  res.status(200).json({message: "data inserted"})
}

module.exports = {
  getEmployees,
  initDatabase,
  addEmployee,
  deleteEmployee,
  getEmployeeById,
  updateEmployee
}
const { employee } = require("../database/schema");

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

const addEmployee = (req, res) => {
  /*  #swagger.parameters['Body'] = {
          in: 'body',
          description: 'Add a user details',
          required: true,
          schema: { $ref: '#/definitions/Employee' }
  } */

  if(!req.body) return res.status(400).json({message: "Employee details cannot be empty"})

  employee.findOne({employee_id: req.body.employee_id}).exec().then((data) => {
    if(data) return res.status(409).json({message: "Employee already exists"})

    const newEmployee = new employee(req.body)
    newEmployee.save().then((data) => {
      res.status(200).json(data)
    })
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

  employee.findOne({employee_id: id}).exec().then((data) => {
    if(!data) return res.status(404).json({message: "Employee not found"})

    employee.findOneAndUpdate({employee_id: id}, req.body, {new: true}).exec().then((data) => {
      res.status(200).json(data)
    })
  })
}

const deleteEmployee = (req, res) => {
  const id = req.params.id

  employee.findOne({employee_id: id}).exec().then((data) => {
    if(!data) return res.status(404).json({message: "Employee not found"})
    
    employee.findOneAndDelete({employee_id: id}).exec().then((data) => {
      res.status(200).json({message: "data deleted"})
    })
  })

}

module.exports = {
  getEmployees,
  addEmployee,
  deleteEmployee,
  getEmployeeById,
  updateEmployee
}
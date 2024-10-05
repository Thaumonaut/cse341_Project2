const swaggerAutogen = require("swagger-autogen")();

const docs = {
  info: {
    version: "0.1.0",
    title: "Business Employees API",
    description: "API for managing employees in a business environment",
  },
  tags: [
    {
      name: "Employees",
      description: "Employee related endpoints",
    },
    {
      name: "Clients",
      description: "Client related endpoints",
    },
  ],
  schemes: ["http", "https"],
  host: "localhost:8080",
  definitions: {
    Employee: {
      employee_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      gender: "Male",
      job: "Environmental Specialist",
      birthday: "1990-01-01",
      start_date: "2020-01-01",
    }, 
    Client: {
      client_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      company: "Acme Inc.",
      phone: "555-555-5555"
    }
  }
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/server.js"];

swaggerAutogen(outputFile, endpointsFiles, docs);
const { client } = require("../database/schema");
require("dotenv").config();

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
  host: process.env.SWAGGER_HOST,
  securityDefinitions: {
    oAuthSample: {
      type: "oauth2",
      flow: "client_credentials",
      tokenUrl: "https://dev-4qlbmsi47ra8ygmw.us.auth0.com/oauth/token",
      clientId: "6vFF3TCrxQxXyWEN8VKgzDrunTKklMjW",
      clientSecret: "2XkZyp8radUhlV5PP0qQEsxKlc_l1Iagfspg7rGcV5rlknyzlyFQWrm9uL2Udlhw",
      audience: "http://localhost:8080",
      redirectUri: "http://localhost:3000/callback",
      scopes: {}
    }
  },
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
      phone: "(555) 555-5555"
    }
  }
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/server.js"];

swaggerAutogen(outputFile, endpointsFiles, docs);
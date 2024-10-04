const swaggerAutogen = require("swagger-autogen")();

const docs = {
  info: {
    version: "0.1.0",
    title: "Business Contacts API",
    description: "API for managing contacts in a business environment",
  },
  tags: [
    {
      name: "Contacts",
      description: "contact related endpoints"
    }
  ],
  schemes: ["http", "https"],
  host: "localhost:8080",
  definitions: {
    Contact: {
      employee_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      gender: "Male",
      avatar: "https://robohash.org/sequivelnihil.png?size=50x50&set=set1",
      job: "Environmental Specialist"
    }
  }
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/server.js"];

swaggerAutogen(outputFile, endpointsFiles, docs);
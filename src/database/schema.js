const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  employee_id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  job: { type: String, required: true },
  birthday: { type: Date, required: true },
  start_date: { type: Date, required: true },
});

const employee = model("employee", employeeSchema);

const clientSchema = new Schema({
  client_id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  company: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const client = model("client", clientSchema);

module.exports = {
  employee,
  client
}
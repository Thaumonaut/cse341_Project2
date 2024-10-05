const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  employee_id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  avatar: { type: String, required: true },
  job: { type: String, required: true },
  start_date: { type: Date, required: true },
  birthday: { type: Date, required: true },
});

const employee = model("employee", employeeSchema);

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  client: { type: String, required: true },
  employee_id: { type: Schema.Types.Number, ref: "employee"},
});

const project = model("project", projectSchema);

module.exports = {
  employee,
  project
}
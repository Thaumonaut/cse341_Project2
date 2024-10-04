const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const contactSchema = new Schema({
  employee_id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  avatar: { type: String, required: true },
  job: { type: String, required: true },
});

const contact = model("contact", contactSchema);

module.exports = {
  contact
}
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();


require("../src/database/db")

app.use(cors());
app.use(bodyParser.json());
app.use(require("./routes/root"))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port: " + port);
})
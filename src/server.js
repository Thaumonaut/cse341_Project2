const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { auth } = require("express-openid-connect");

app.use(bodyParser.json());
app.use(cookieParser());


require("dotenv").config();

app.use(auth({
  authRequired: false,
  auth0Logout: true,
  // secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  clientSecret: process.env.CLIENT_SECRET,
  clientAuthMethod: "client_secret_post",
  authorizationParams: {
    response_type: "code",
    audience: "http://localhost:8080",
    scope: "openid profile email",
  },
}));



require("../src/database/db")

app.use(cors());
app.use(require("./routes/rootRoute"))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port: " + port);
})
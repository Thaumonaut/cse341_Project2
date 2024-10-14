const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

// const { auth } = require("express-oauth2-jwt-bearer");

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-4qlbmsi47ra8ygmw.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://localhost:8080",
  issuer: "https://dev-4qlbmsi47ra8ygmw.us.auth0.com/",
  algorithms: ["RS256"],
});

const addTokenToReq = (req, res, next) => {
  const token = req.cookies["access_token"];
  if (req.oidc.accessToken) {
    req.headers["Authorization"] = `Bearer ${req.oidc.accessToken.access_token}`;
  }
  next();
};

// const jwtCheck = auth({
//   audience: 'http://localhost:8080',
//   issuerBaseURL: 'https://dev-4qlbmsi47ra8ygmw.us.auth0.com/',
//   authRequired: false,
//   auth0Logout: true,
// });

// const jwtCheck = (res, req, next) => { 
//   next()
// }

module.exports = {addTokenToReq,jwtCheck}
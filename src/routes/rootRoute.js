const express = require("express");
const { jwtCheck, addTokenToReq } = require("../middleware/auth");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();

router.get("/", (req, res) => {
  // #swagger.ignore = true

  // req.query.redirect_uri ? res.redirect(req.query.redirect_uri) : 
  
  res.send(`
    <p>Welcome to the Employee List API. To view the docs, visit /api/docs</p>
    <p>Login Status: ${req.oidc.isAuthenticated() ? "Authenticated" : "Not Authenticated"}</p>
    `);
    // <p>${JSON.stringify(req.cookies, null, 2)}</p>
})

router.use(addTokenToReq);

router.get('/profile', (req, res) => {
  // #swagger.ignore = true
  // req.oidc.fetchUserInfo().then(data => console.log(data))
  console.log(req.headers)
  res.json(req.oidc.user);
})

// Add the documentation routes to the router
router.use("/api", require("./apiDocsRoute"));

// Add the employee routes to the router
router.use("/api/employees", jwtCheck, require("./employeeRoute")/** #swagger.tags = ["Employees"] */);

router.use("/api/clients", jwtCheck, require("./clientRoute")/** #swagger.tags = ["Clients"] */);

module.exports = router
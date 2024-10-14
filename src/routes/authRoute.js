const router = require("express").Router();
const passport = require("passport");

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/', session: false }),
  (req, res) => {
    req.session.user = req.user;
    console.log(req.headers)
    res.redirect('/');
  }
);

router.get("/login",
  // #swagger.ignore = true
  passport.authenticate("github", { scope: ["user:email"] }), (req, res) => {} 
);

router.get("/logout", (req, res) => {
  // #swagger.ignore = true
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
})

module.exports = router;
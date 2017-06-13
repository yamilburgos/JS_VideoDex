var express = require('express');
var router = express.Router();

const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// LOGIN ROUTE
router.post('/login',
  // passport.authenticate('local', { failWithError: true }),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.status(201).send({ user_profile: req.user, loggedIn: true });
  },
  function(err, req, res, next) {
    // handle error
    if (err) { return res.status(200).send({ status: "Invalid Credentials", loggedIn: false }); }
  }
);

module.exports = router;
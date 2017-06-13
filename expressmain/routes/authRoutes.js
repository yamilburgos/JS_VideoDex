const express = require('express');
const router = express.Router();

const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');

// // LOGIN ROUTE
// router.post('/login',
//   // passport.authenticate('local', { failWithError: true }),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.status(201).send({ user_profile: req.user, loggedIn: true });
//   },
//   function(err, req, res, next) {
//     // handle error
//     if (err) { return res.status(200).send({ status: "Invalid Credentials", loggedIn: false }); }
//   });

// // LOGOUT ROUTE
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.status(200).json({
//     loggedIn: false
//   });
// });

module.exports = router;
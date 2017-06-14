var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// Sets up the database
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

module.exports = db;
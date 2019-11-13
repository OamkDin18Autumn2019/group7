var mysql = require('mysql');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var connection = mysql.createPool({
  host: 'localhost',
  user: 'dinhtai41',
  password: '!b15fc4be24263482874bf8bdb20e7a62D',
  database: 'demo'
});

module.exports = connection;

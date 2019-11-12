var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'dinhtai41',
  password: '!b15fc4be24263482874bf8bdb20e7a62D',
  database: 'demo'
});
module.exports = connection;

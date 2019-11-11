var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'netpass',
  password: 'netpass',
  database: 'blog'
});
module.exports = connection;

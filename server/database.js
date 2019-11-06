var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'netpass',
  database: 'blog'
});
module.exports = connection;

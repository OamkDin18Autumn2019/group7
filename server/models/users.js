var db = require('../database');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
const saltRounds = 10;




// Use the BasicStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.



var users = {
  get: function(callback) {
    return db.query('select id, username, name from users',  callback);
  },
  getById: function(id, callback) {
    return db.query('select id, username, name from users where id=?', [id], callback);
  },
  add: function(users, callback) {
    return bcrypt.hash(users.password, saltRounds).then(hash =>
      db.query(
        'INSERT INTO users (username, name, email, doB, password) VALUES (?,?,?,?,?)', [users.username, users.name, users.email, users.doB, hash],
        callback
      )
    );
  },
  delete: function(id, callback) {
    return db.query('delete from users where id=?', [id], callback);
  },
  update: function(id, users, callback) {
    return bcrypt.hash(users.password, saltRounds).then(hash =>
      db.query(
        'update users set password=? where id=?', [hash, id],
        callback
      )
    );
  },
};
module.exports = users;

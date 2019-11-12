var db = require('../database');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
const saltRounds = 10;





var users = {
  check: function(password, callback){
    return bcrypt.compare(password, )
  },
  get: function(callback) {
    return db.query('select id, username, name from users',  callback);
  },
  getById: function(id, callback) {
    return db.query('select id, username, name from users where id=?', [id], callback);
  },
  add: function(users, callback) {
    return bcrypt.hash(users.password, saltRounds).then(hash =>
      db.query(
        'INSERT INTO users (username, password, name, email, doB) VALUES (?,?,?,?,?)', [users.username, users.name, users.email, users.doB, hash],
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

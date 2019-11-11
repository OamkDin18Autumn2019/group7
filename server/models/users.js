var db = require('../database');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
const saltRounds = 10;



passport.use(new Strategy((username, password, cb) => {
  db.query('SELECT id, username, password FROM users WHERE username = ?', [username]).then(dbResults => {

    if(dbResults.length == 0)
    {
      return cb(null, false);
    }

    bcrypt.compare(password, dbResults[0].password).then(bcryptResult => {
      if(bcryptResult == true)
      {
        cb(null, dbResults[0]);
      }
      else
      {
        return cb(null, false);
      }
    })

  }).catch(dbError => cb(err))
}));




var users = {
  get: function(id, username,name, callback) {
    return db.query('select id, username from users', [id], [username],[name], callback);
  },
  getById: function(id, username, name callback) {
    return db.query('select id, username, name from users where id=?', [id],[username],[name], callback);
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

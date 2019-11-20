var db = require('../database');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
const saltRounds = 10;

passport.use(new BasicStrategy((username, password, cb) => {
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
  getByUsername: function(username, callback) {
    return db.query('select id, username, name from users where username=?', [username], callback);
  }
};

module.exports = users;

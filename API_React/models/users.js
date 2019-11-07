var db = require('../database');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
const saltRounds = 10;

function isAuthenticated(username, password){
  if(username==='teppo' && password==='testi') {
    return true;
  }
  return false;
}

/*passport.use(new Strategy((username, password, cb) => {
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
}));*/


passport.use(new BasicStrategy(
function(username, password, done) {
    if (!isAuthenticated(username,password)) {
      return done(null, false);
    }
    return done(null, username);
}
));

var users = {
  get: function(callback) {
    return db.query('select * from users', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from users where id=?', [id], callback);
  },
  add: function(users, callback) {
    return bcrypt.hash(users.password, saltRounds).then(hash =>
      db.query(
        'INSERT INTO users (username, password) VALUES (?,?)', [users.username, hash],
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

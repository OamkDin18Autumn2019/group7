var db = require('../database');
  var post = {
    get: function(callback) {
      return db.query('select post.idposts, post.name, post.idusers, post.image, post.ingredients, post.recipe, post.date, users.username from post inner join users on post.idusers = users.id;', callback);
    },
    getById: function(id, callback) {
      return db.query('select post.idposts, post.name, post.idusers, post.image, post.ingredients, post.recipe, post.date, users.username from post inner join users on post.idusers = users.id where idposts=?', [id], callback);
    },
    add: function(post, callback) {
      return db.query(
          'INSERT INTO post (idusers, name, image, ingredients, recipe, date) VALUES (?,?,?,?,?,?)', [post.idusers, post.name, post.image, post.ingredients, post.recipe, post.date],
            callback
          )
    },
    delete: function(id, callback) {
      return db.query('delete from post where idposts=?', [id], callback);
    },
    update: function(id, post, callback) {
      return db.query(
        'update post set idusers=?, image=? name=?, ingredients=?, recipe=?, date=? where idposts=?',
        [post.idusers, post.name, post.image, post.ingredients, post.recipe, post.date, id],
        callback
      );
    }
  };
  module.exports = post;

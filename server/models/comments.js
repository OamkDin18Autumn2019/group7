var db = require('../database');
  var comments = {
    get: function(callback) {
      return db.query('select comments.idcomments, comments.idpost, comments.iduser, comments.comment, users.username from comments inner join users on comments.iduser = users.id;', callback);
    },
    getById: function(id, callback) {
      return db.query('select comments.idcomments, comments.idpost, comments.iduser, comments.comment, users.username from comments inner join users on comments.iduser = users.id where idcomments=?', [id], callback);
    },
    add: function(comments, callback) {
      return db.query(
          'INSERT INTO comments (idpost, iduser, comment) VALUES (?,?,?)', [comments.idpost, comments.iduser, comments.comment],
            callback
          )
    },
    delete: function(id, callback) {
      return db.query('delete from comments where idcomments=?', [id], callback);
    },
    update: function(id, comments, callback) {
      return db.query(
        'update comments set idpost=?, iduser=? comment=? where idcomments=?',
        [comments.idpost, comments.iduser, comments.comment, id],
        callback
      );
    }
  };
  module.exports = comments;
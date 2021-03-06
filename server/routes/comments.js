var express = require('express');
  var router = express.Router();
  var comments = require('../models/comments');
  var cors = require('cors');
  router.use(cors());

  router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
      comments.getById(req.params.id, function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } else {
      comments.get(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });

  router.post('/', function(req, res, next) {
    comments.add(req.body, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(req.body); //or return count for 1 & 0
      }
    });
  });
  router.delete('/:id', function(req, res, next) {
    comments.delete(req.params.id, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(count);
      }
    });
  });
  router.put('/:id', function(req, res, next) {
    comments.update(req.params.id, req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.get('/post/:id', function(req, res, next) {
    comments.getByIdPost(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
 });
  module.exports = router;

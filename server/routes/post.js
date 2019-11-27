var express = require('express');
  var router = express.Router();
  var post = require('../models/post');
  
  var cors = require('cors');
  router.use(cors());
  
  router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
      post.getById(req.params.id, function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } else {
      post.get(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });

  router.post('/', function(req, res, next) {
    post.add(req.body, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(req.body); //or return count for 1 & 0
      }
    });
  });
  router.delete('/:id', function(req, res, next) {
    post.delete(req.params.id, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(count);
      }
    });
  });
  router.put('/:id', function(req, res, next) {
    post.update(req.params.id, req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;

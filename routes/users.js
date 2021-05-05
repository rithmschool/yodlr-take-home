var express = require('express');
var router = express.Router();
var _ = require('lodash');
var logger = require('../lib/logger');
var log = logger();
const { ensureAdmin } = require('../helpers/auth.js');

var users = require('../init_data.json').data;
var curId = _.size(users);

/* GET users listing. */
router.get('/', ensureAdmin, function(req, res) {
  return res.json(_.toArray(users));
});

/* Create a new user */
router.post('/', function(req, res) {
  var user = req.body;
  user.id = curId++;
  if (!user.state) {
    user.state = 'pending';
  }
  users[user.id] = user;
  log.info('Created user', user);
  return res.json(user);
});

/* Get a specific user by id */
router.get('/:id', ensureAdmin, function(req, res, next) {
  var user = users[req.params.id];
  if (!user) {
    return next();
  }
  return res.json(users[req.params.id]);
});

/* Delete a user by id */
router.delete('/:id', ensureAdmin, function(req, res) {
  var user = users[req.params.id];
  delete users[req.params.id];
  res.status(204);
  log.info('Deleted user', user);
  return res.json(user);
});

/* Update a user by id */
router.put('/:id', ensureAdmin, function(req, res, next) {
  var user = req.body;
  if (user.id != req.params.id.id) {
    return next(new Error('ID paramter does not match body'));
  }
  users[user.id] = user;
  log.info('Updating user', user);
  return res.json(user);
});


module.exports = router;

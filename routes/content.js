
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// Boolean challenge 1
router.get('/ch-1', function(req, res) {
  res.render('ch-1');
});

// Boolean challenge 2
router.get('/ch-2', function(req, res) {
  res.render('ch-2');
});

// Boolean variable
router.get('/py-1', function(req, res) {
  res.render('py-1');
});

// Boolean var challenge 1
router.get('/ch-3', function(req, res) {
  res.render('ch-3');
});

// Boolean var challenge 2
router.get('/ch-4', function(req, res) {
  res.render('ch-4');
});

module.exports = router;

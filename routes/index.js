var express = require('express');
var router = express.Router();

const startUpDate = new Date(Date.now());

router.get('/', function(req, res, next) {
  res.json({
    startUpDate,
    version: process.version
  });
});

module.exports = router;

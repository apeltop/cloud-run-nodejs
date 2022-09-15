var express = require('express');
var router = express.Router();

const startUpDate = new Date(Date.now());

router.get('/', function(req, res, next) {
  res.json({
    startUpDate,
    node_version: process.version,
    app_version: '1.0.1'
  });
});

module.exports = router;

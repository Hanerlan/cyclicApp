var express = require('express');
const jsend = require('jsend')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const response = jsend.success({ message: "Hello World!" })
  res.json(response);
});

module.exports = router;

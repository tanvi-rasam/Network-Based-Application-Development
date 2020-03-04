

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  //get data objects - this can be outside of this call if needed somewhere else.
  var course = require('./../models/course');

  //get model for data object
  
  res.render('details', {course:req.query});
});



module.exports = router;
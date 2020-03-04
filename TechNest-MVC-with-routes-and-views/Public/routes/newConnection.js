const express = require("express");
const router = express.Router();
const body=require("body-parser");
router.use(body.urlencoded({ extended: true }));

router.get("/", function(request, response) {
  //create data
  
    
    response.render("newConnection",{set:0});
});

router.post("/submit", function(request, response) {
  //create data
	
    var topic=request.body.topic;
	var name=request.body.name;
	var details=request.body.details;
	var where=request.body.where;
	var date=request.body.date;
    response.send(topic+"<br/>"+name+"<br/>"+details+"<br/>"+where+"<br/>"+date);
});


//export the router
module.exports = router;
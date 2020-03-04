
const express = require("express");
const router = express.Router();

var app=express();

router.get("/", function(request, response){
console.log("Query String Is");
  console.log(request.query);

  if (Object.keys(request.query).length == 0) {
    let connectionDB = require("../util/connectionDB");
	let events = new connectionDB();

    response.render("upcoming_events", { ConnectionDB: events });
    
	
  }
  else {
    var connectionId = request.query.cid;
	
    let connectionDB = require("../util/connectionDB");
	let events = new connectionDB();
	if (typeof connectionId === 'undefined'){
		response.redirect("upcoming_events");
	}
	
	else{
		var object = events.getConnection(connectionId);
		if (typeof object === 'undefined'){
		response.redirect("upcoming_events");
	}
		else{response.render('upcoming_event',{connection: object});
		console.log(object);}
	}
  }
});



router.all("/*", function(request, response) {
 response.render("upcoming_events");
});
//export the router
module.exports = router;

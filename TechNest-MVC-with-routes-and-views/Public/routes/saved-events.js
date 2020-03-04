const express = require("express");
const router = express.Router();

router.get("/", function(request, response) {
  //create data
  
    
    response.render("saved-events",{set:0});
});

//export the router
module.exports = router;
const express = require("express");
const router = express.Router();


router.get("/", function(request, response) {
  //create data
  
    
    response.render("index");
});

//export the router
module.exports = router;
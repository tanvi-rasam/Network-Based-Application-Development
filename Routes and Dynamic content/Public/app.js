

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//set the path for static resources to be accessible
app.use('/assets', express.static('assets'));


/** 3 - using seperate route modules **/
var course = require('./routes/courseDetails.js');

var index=require('./routes/index.js');



app.use('/coursedetails',course);
app.use('/',index);



app.listen(8084,function(){
    console.log('app started')
    console.log('listening on port 8084')
});
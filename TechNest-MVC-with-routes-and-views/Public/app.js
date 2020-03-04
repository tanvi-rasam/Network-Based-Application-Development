/* @nanajjar */

//setup express to use for routing
let express = require('express');
let app = express();
let path=require('path');

//set view engine to EJS
app.set('view engine', 'ejs');

//set the path for static resources to be accessible

app.use('/assets', express.static('assets'));

let connections = require('./routes/connections.js');
let index = require('./routes/index.js');

let newConnection=require('./routes/newConnection.js');
let about=require('./routes/about.js');
let contact=require('./routes/contact.js');
let saved_events=require('./routes/saved-events.js');

app.use('/upcoming_events',connections);
app.use('/upcoming_event',connections);
app.use('/about',about);
app.use('/contact',contact);
app.use('/saved-events',saved_events);
app.use('/newConnection',newConnection);
app.use('/index', index)
app.use('/', index)

//start local server and listen on the default HTTP port 8080
app.listen(8084, '127.0.0.1');

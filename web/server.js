
var express = require('express');
var app = express();
var port = process.env.PORT || 8088;
var passport = require('passport');

require('./config/passport')(passport);

// configure app
// ...

require('./app/routes')(app,passport);

app.listen(8088);
console.log(port+' is the magic port');


var express = require('express');
var app = express();
var port = process.env.PORT || 8088;
var passport = require('passport');
var flash = require('connect-flash');

var engine = require('ejs-locals');
var bodyParser = require('body-parser');

require('./config/passport')(passport);

// configure app
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/routes')(app,passport);

app.listen(8088);
console.log(port+' is the magic port');

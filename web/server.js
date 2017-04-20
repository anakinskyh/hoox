
var express = require('express');
var app = express();
var port = process.env.PORT || 8088;
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var config = require('./config/config')

require('./config/passport')(passport);

// configure app
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(cookieParser(config.cookieSecret));
app.use(session({
    secret: "fd34s@!@dfa453f3DF#$D&W",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: !true }
}));
app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/routes')(app,passport);
require('./app/auth')(app,passport);

// console.log(app);

app.listen(8088);
console.log(port+' is the magic port');

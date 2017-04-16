// server.js

// BASE SETUP

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// CONFIG DATABASE
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hoox');
var Promise = require("bluebird");
mongoose.Promise = Promise;


// ROUTES FOR OUR API
var router = express.Router();              // get an instance of the express Router

// middle
router.use(function(req,res,next){
    console.log('middle');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

require('./app/routes/user')(router);
require('./app/routes/playlist')(router);
require('./app/routes/songRecord')(router);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
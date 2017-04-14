
var express = require('express');
var app = express();
var engine = require('ejs-locals');


// set the view engine to ejs
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use('/', express.static('views'));


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('main');
});

app.get('/search', function(req, res) {
    res.render('search');
});

// about page
//app.get('/about', function(req, res) {
//    res.render('pages/about');
//});

app.listen(8088);
console.log('8080 is the magic port');

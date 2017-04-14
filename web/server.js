
var express = require('express');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');


// set the view engine to ejs
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended: false }))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('main');
});

app.post('/search', function(req, res) {
    var searchword = req.body.searchword;
    res.render('search',{
        searchword: searchword
    });
});


// about page
//app.get('/about', function(req, res) {
//    res.render('pages/about');
//});

app.listen(8088);
console.log('8088 is the magic port');

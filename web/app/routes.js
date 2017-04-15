var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app,passport){
    // set the view engine to ejs
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    app.use('/', express.static('../views'));
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
};
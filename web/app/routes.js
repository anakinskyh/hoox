module.exports = function(app,passport){

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
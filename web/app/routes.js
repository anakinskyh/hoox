var User = require('./models/user').User;

module.exports = function(app,passport){

    // index page
    app.get('/', function(req, res) {
        // res.render('main');

        console.log(req.session.passport);
        if(req.session.passport)
          res.locals.user = req.session.passport.user;
        else res.locals.user = new User();
        // res.locals.user = 'anakin-sky';
        res.render('main.ejs');
    });

    app.post('/search', function(req, res) {
        var searchword = req.body.searchword;
        res.render('search',{
            searchword: searchword
        });
    });
};

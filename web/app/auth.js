module.exports = function(app,passport){

    // auth.js

    // facebook
    // app.get('/login/facebook', function(req, res) {
    //   // passport()
    //   console.log('login with fb');
    //   passport.authenticate('facebook', { successRedirect: '/' });
    // });
    app.get('/login/facebook', passport.authenticate('facebook',{ scope: ['email','public_profile'] } ) );

    app.get('/login/facebook/callback',
      passport.authenticate('facebook', { successRedirect: '/'}));

    app.get('/login/twitter', passport.authenticate('twitter') );

    app.get('/login/twitter/callback',
      passport.authenticate('twitter', { successRedirect: '/'}));

    app.get('/login/google',
      passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


    app.get('/login/google/callback',
      passport.authenticate('google'),
      function(req, res) {
        res.redirect('/');
    });

    app.get('/logout',function(req,res){
      req.session.destroy();
      res.redirect('/');
    });
};

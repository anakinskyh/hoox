// config/passport.js

// load all the things we need
var FacebookStrategy = require('passport-facebook').Strategy;

// load the auth variables
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {

	// passport set up
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    // passport.serializeUser(function(user, done) {
    //     done(null, user.id);
    // });

    // used to deserialize the user
    // passport.deserializeUser(function(id, done) {
    //     User.findById(id, function(err, user) {
    //         done(err, user);
    //     });
    // });

    // facebook
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL

    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

        console.log('profile '+profile+'\n');
        // do something
    }));

};
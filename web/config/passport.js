// config/passport.js

// load all the things we need
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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
    console.log('add facebook passport');
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : ['name','picture','email']
    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {
        // alert(profile);
        console.log(profile);

        // do something
    }));


    console.log('add twitter passport');
    passport.use(new TwitterStrategy({
      consumerKey: configAuth.twitterAuth.consumerKey,
      consumerSecret: configAuth.twitterAuth.consumerSecret,
      callbackURL: configAuth.twitterAuth.callbackURL
    },
      function(token, tokenSecret, profile, done) {
        console.log(profile);
      }
    ));

    passport.use(new GoogleStrategy({
      clientID : configAuth.googleAuth.clientID,
      clientSecret : configAuth.googleAuth.clientSecret,
      callbackURL : configAuth.googleAuth.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
         console.log(profile);
    }));

};

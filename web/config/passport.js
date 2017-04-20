// config/passport.js

// load all the things we need
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../app/models/user').User;
console.log(User);

// load the auth variables
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

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
        // console.log(profile);
        var user = new User();
        user.id = profile.id;
        user.name = profile.name.givenName;
        user.email = profile.emails[0].value;
        user.photo = profile.photos[0].value;
        user.isLogedIn = true;
        // user.email = profile.user;
        console.log(profile);
        // user.id =

        // localStorage.setItem('user',user);
        // do something
        done(null,user);
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

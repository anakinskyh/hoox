// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '278663922583796', // your App ID
		'clientSecret' 	: 'fa418d39ff66b278bc068106941c43ba', // your App Secret
		'callbackURL' 	: 'http://localhost:8088/login/facebook/callback',
		'fileds' : ['email']
	},

	'twitterAuth' : {
		'consumerKey' 		: 'UvGaWqAkxnBn6QMofU3nYbM9h',
		'consumerSecret' 	: 'JIXSwUE1oq3haPaePbZoKmS4H7nbnA37lpF3oWFJVlwYGaX94q',
		'callbackURL' 		: 'http://localhost:8088/login/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: ' 93922894916-cnogr3gkgs0juq90sp89k2nkfhbpc2c1.apps.googleusercontent.com ',
		'clientSecret' 	: 'rdSZwKRPiTSec9qoA0VRhsel',
		'callbackURL' 	: 'http://localhost:8088/login/google/callback'
	}

};

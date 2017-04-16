import React from 'react'

// for authentication
var passport = require('passport');
require('../../config/passport')(passport)

export class Login extends React.Component{
    render(){
        return(
            <div>
            </div>
        );
    }
}

export class User extends React.Component{
    
}

export default class Account extends React.Component{
    render(){

        var isLogedIn = false;

        return isLogedIn?(<User/>):(<Login/>);
    }
}
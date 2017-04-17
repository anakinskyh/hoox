import React from 'react'

export class Login extends React.Component{
    render(){
        return(
            <div>
            </div>
        );
    }
}

export class User extends React.Component{
    render(){
        return(
            <div>
            </div>
        );
    }
}

export default class Account extends React.Component{
    render(){

        var isLogedIn = false;

        if(isLogedIn)
            return (<User/>);
        else 
            return (<Login/>);

        // return (<div></div>);
    }
}
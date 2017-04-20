import React from 'react'

import Account from './account'

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

export default class Header extends React.Component{

    updatePage(){
        console.log("updatePage in Header");
        this.props.onUpdatePage();
    }

    render(){
        return(
            <Row id="header-content">
                <HeaderLogo/>
                <HeaderSearchBox onUpdatePage={() => this.updatePage()}/>
                <HeaderUser/>
            </Row>
        );
    }

}

export class HeaderLogo extends React.Component{

    render(){
        return(
            <Col xs={1} sm={4} md={4} lg={4} id="logo">
                <Image src="images/logo/HOOX.png" />
            </Col>
        );
    }
}

export class HeaderSearchBox extends React.Component{

    handleSubmit(){
        console.log("search word is "+this.refs.searchword.value);
        this.props.onUpdatePage();
    }

    render(){
        return(
            <Col xs={7} sm={4} md={4} lg={4} id="search">
                <Form className="input-group" id="search-box" >
                    <input className="form-control" type="text" ref="searchword" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}><i className="glyphicon glyphicon-search"></i></button>
                    </span>
                </Form>
            </Col>
        );
    }
}

export class HeaderUser extends React.Component{
    constructor(){
        super();
        this.state = {
            loginfocus: false,
            // loginSuccess: false
            loginSuccess: window.user.isLogedIn,
            photo: window.user.photo,
            name: window.user.name
        };
    }

    enterLogin(){
        this.setState({
            loginfocus: true
        });
    }

    leaveLogin(){
        this.setState({
            loginfocus: false
        });
    }

    facebookLogin(){
        // alert('Facebook Login');
        this.setState({
            loginSuccess: true
        });
    }

    twitterLogin(){
        // alert('Twitter Login');
        this.setState({
            loginSuccess: true
        });
    }

    googleLogin(){
        // alert('Google Login');
        this.setState({
            loginSuccess: true
        });
    }

    logout(){
        this.setState({
            loginSuccess: false
        });
    }

    render(){

        var show = {display: 'block'};
        var hide = {display: 'none'};

        return(
            <div className="login-container col-xs-4">
                <button className="login pull-right" style={this.state.loginSuccess ? hide : show} onMouseEnter={() => this.enterLogin()} onMouseLeave={() => this.leaveLogin()}>Login</button>
                <div className="selectLogin row" style={this.state.loginfocus && !this.state.loginSuccess ? show : hide} onMouseEnter={() => this.enterLogin()} onMouseLeave={() => this.leaveLogin()} >
                    <div className="col-xs-4">
                        <a href="login/facebook">
                          <img src="images/logo/facebook.png" className="logo-login"  />
                        </a>
                    </div>
                    <div className="col-xs-4">
                        <a href='#'>
                          <img src="images/logo/twitter.png" className="logo-login"  />
                        </a>
                    </div>
                    <div className="col-xs-4">
                        <a href='#'>
                          <img src="images/logo/google.png" className="logo-login"  />
                        </a>
                    </div>
                </div>
                <div className="logout" style={this.state.loginSuccess ? show : hide}>
                    
                    <img src={this.state.photo} height="30" width="30" />
                    <span className="user-name">Hi, {this.state.name}</span>
                    <a href="logout">
                    <button className="logoutBtn" >Logout</button>
                    </a>
                </div>
            </div>
        );
    }
}

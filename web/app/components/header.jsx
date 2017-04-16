import React from 'react'

// import Account from './account'

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';


export default class Header extends React.Component{

    render(){
        return(
            <Row id="header-content">
                <HeaderLogo/>
                <HeaderSearchBox/>
                {/*<HeaderUser/>*/}
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

    render(){
        return(
            <Col xs={7} sm={4} md={4} lg={4} id="search">
                <Form action="/search" method="post" className="input-group" id="search-box">
                    <FormControl type="text" name="searchword" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </span>
                </Form>
            </Col>
        );
    }
}

/*export class HeaderUser extends React.Component{

    render(){
        return(
            <Col xs={4} sm={4} md={4} lg={4} id="search">
                <div id="user-box" className="dropdown">
                 <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">User<span className="caret"></span></button> 
                    <div id='account-menu'>
                        <Account />
                    </div>
                    <ul className="dropdown-menu">
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </Col>
        );
    }
}*/
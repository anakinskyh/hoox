
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/app'


//ReactDOM.render((
//    <Router>
//        <Route path="/" component={App} />
//    </Router>
//), document.getElementById('app'));



ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

//ReactDOM.render(
//    <Header />,
//    document.getElementById('header')
//);
//
//ReactDOM.render(
//    <MyCarousel />,
//    document.getElementById('myCarousel')
//);
//
//ReactDOM.render(
//    <Recommend />,
//    document.getElementById('recommend-content')
//);
//
//
//ReactDOM.render(
//    <TopTen />,
//    document.getElementById('topten-content')
//);
//
//ReactDOM.render(
//    <Account />,
//    document.getElementById('account-menu')
//);

//console.log(<Account />);
//console.log(document.getElementById('account-menu'));
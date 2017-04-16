
import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route } from 'react-router-dom';

import Root from './components/root'


ReactDOM.render((
    <Router>
        <Route exact path="/" component={Root} />
    </Router> ),
    document.getElementById('root')
);



//ReactDOM.render(
//    <App/>,
//    document.getElementById('app')
//);

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
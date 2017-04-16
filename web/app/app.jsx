
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


import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route } from 'react-router-dom';

import Root from './components/root'
import Main from './components/main'

import Search from './components/search'


// console.log(Search);
ReactDOM.render(
        <Search />,
    document.getElementById('search')
);

ReactDOM.render(
    <Root page={<Main />}/>,
    document.getElementById('root')
);

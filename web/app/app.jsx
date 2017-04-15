
import React from 'react'
import ReactDOM from 'react-dom'
import MyCarousel from './components/mycarousel'
import TopTen from './components/topten'
import Account from './components/account'
import Recommend from './components/recommend'

ReactDOM.render(
    <MyCarousel />,
    document.getElementById('myCarousel')
);

ReactDOM.render(
    <Recommend />,
    document.getElementById('recommend-content')
);


ReactDOM.render(
    <TopTen />,
    document.getElementById('topten-content')
);

ReactDOM.render(
    <Account />,
    document.getElementById('account-menu')
);

console.log(<Account />);
console.log(document.getElementById('account-menu'));
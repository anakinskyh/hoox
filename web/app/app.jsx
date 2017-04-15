
import React from 'react'
import ReactDOM from 'react-dom'
import MyCarousel from './components/mycarousel'
import TopTen from './components/topten'
// import Account from './components/account.component/account.component'
import Account from './components/account'


// console.log(<TopTen />);

ReactDOM.render(
    <MyCarousel />,
    document.getElementById('myCarousel')
);

ReactDOM.render(
    <h1>Recommend</h1>,
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

import React from 'react'
import ReactDOM from 'react-dom'
import MyCarousel from './components/mycarousel'
import TopTen from './components/topten'

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


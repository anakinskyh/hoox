
import React from 'react'
import ReactDOM from 'react-dom'
import MyCarousel from './components/mycarousel'
import TopTen from './components/topten'
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


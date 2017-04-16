
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import MyCarousel from './mycarousel'
import Recommend from './recommend'
import TopTen from './topten'
import Account from './account'

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';


export default class Root extends React.Component{
    render(){
        return(
            <div>
                <div id="header" className="row">
                    <Header />
                </div>
                <div id="myCarousel">
                    <MyCarousel />
                </div>
                <div id="main-root" className="row">
                    <Col xs={7} sm={7} md={8} lg={9}  id="recommend" >
                        <p className="title">เพลย์ลิสต์แนะนำ</p>
                        <hr className="line" />
                        <div id="recommend-content">
                            <Recommend />
                        </div>
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={3}  id="topten" >
                        <p className="title">TOP 10 CHART</p>
                        <div id="topten-content">
                            <TopTen />
                        </div>
                    </Col>

                </div>

            </div>
        );
    }
}
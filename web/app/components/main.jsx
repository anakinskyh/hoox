import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import MyCarousel from './mycarousel'
import Recommend from './recommend'
import TopTen from './topten'
import MusicPlayer from './musicplayer'
// import Account from './account'
import Player from './player'

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';


export default class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            songname: '',
            artistname: '',
            musicSrc: ''
        };
    }

    onClickTopTen(song, artist, music){
        this.setState({
            songname: song,
            artistname: artist,
            musicSrc: music
        });
    }

    render(){
        return(
            <div>
                <div id="myCarousel">
                    <MyCarousel />
                </div>
                <div id="main-root" className="row">
                    <Col xs={7} sm={7} md={8} lg={9}  id="recommend" >
                        <p className="title">เพลย์ลิสต์แนะนำ</p>
                        <hr className="line" />
                        <div id="recommend-content">
                            <Recommend clickTopTen={this.onClickTopTen.bind(this)}/>
                        </div>
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={3}  id="topten" >
                        <p className="title">TOP 10 CHART</p>
                        <div id="topten-content">
                            <TopTen clickTopTen={this.onClickTopTen.bind(this)} />
                        </div>
                    </Col>
                </div>
                <MusicPlayer songname={this.state.songname} artistname={this.state.artistname} musicSrc={this.state.musicSrc} />
            </div>
        );
    }
}

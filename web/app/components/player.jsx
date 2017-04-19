import React, { Component } from 'react'
import ReactPlayer from 'react-player'
var Sound = require('react-sound');
import ReactDOM from 'react-dom'
import ReactAudioPlayer from 'react-audio-player';
// import ReactMusicPlayer from 'react-music-player'
// var ReactMusicPlayer = require('ReactMusicPlayer')
var songs = require('../models/song')
console.log(songs)

export default class Player extends React.Component{
    render(){
        var divStyle = {
            position: 'fixed',
            bottom: 0,
            // top: 0,  
            right: 100,
            width: '300px',
            color: 'white'
            // 'z-index':1,
        };

        return(
            <div className='player' style={divStyle}>
                <ReactAudioPlayer
                src="http://www.stephaniequinn.com/Music/Canon.mp3"
                autoPlay
                />
            </div>
        );
    }
}
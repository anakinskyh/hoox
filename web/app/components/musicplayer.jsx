import React from 'react'

export default class MusicPlayer extends React.Component{
    constructor(){
        super();
        this.state = {
            musicSrc: "musics/music1.mp3"
        };
    }

    render(){
        return(
            <div className="musicplayer row">
                <div className="music-player-icon col-xs-1 col-xs-offset-3">
                    <i className="fa fa-step-backward step-backward" aria-hidden="true"></i>
                    <i className="fa fa-pause pause" aria-hidden="true"></i>
                    <i className="fa fa-step-forward step-forward" aria-hidden="true"></i>
                </div>
                <div className="music-detail col-xs-5">
                    <div className="song-artist-detail">
                        <span className="song-detail">{this.props.songname}</span>
                        <span className="artist-detail">{this.props.artistname}</span>
                    </div>
                    <div className="music-bar">
                        <div className="music-progress"></div>
                        <audio ref="audio" controls autoPlay>
                            <source src={this.state.musicSrc} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>
        );
    }
}
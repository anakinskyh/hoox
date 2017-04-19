import React from 'react'

export default class MusicPlayer extends React.Component{
    constructor(){
        super();
        this.audio = new Audio(); 
        this.timeUpdate = this.timeUpdate.bind(this);
        this.endMusic = this.endMusic.bind(this);
        this.audio.ontimeupdate = this.timeUpdate;
        this.audio.onended = this.endMusic;

        this.state = {
            isPlay: false,
            progress: 0
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isPlay: true
        });

        this.audio.src = nextProps.musicSrc;
        this.audio.play();
    }

    timeUpdate(){
        this.setState({
            progress: this.audio.currentTime
        });
    }

    endMusic(){
        this.setState({
            isPlay: false,
            progress: 0
        });
    }

    playMusic(){
        if(this.props.musicSrc){
            this.setState({
                isPlay: true
            });

            this.audio.play();
        }  
    }

    pauseMusic(){
        if(this.props.musicSrc){
            this.setState({
                isPlay: false
            });
        
            this.audio.pause();
        }
    }

    stepBackwardMusic(){
        if(this.props.musicSrc){
            var time = this.audio.currentTime;
            this.audio.currentTime = time - 10;
        }  
    }

    stepForwardMusic(){
        if(this.props.musicSrc){
            var time = this.audio.currentTime;
            this.audio.currentTime = time + 10;
        }   
    }

    skipMusic(event){
        var div = event.target.getAttribute("data-music");
        var rect;
        if(div === "bar"){
            rect = event.target.getBoundingClientRect();  
        }else{
            rect = event.target.parentElement.getBoundingClientRect();
        }

        var posLeftMusicBar = Math.floor(rect.left);
        var posRightMusicBar = Math.floor(rect.right);
        var skipProgress = (((event.pageX - posLeftMusicBar) * 100) / (posRightMusicBar - posLeftMusicBar)) / 100;
        if(this.audio.duration){
            this.audio.currentTime = skipProgress * this.audio.duration;
        }
    }

    render(){
        var playStyle;
        var pauseStyle;

        if(this.state.isPlay){
            playStyle = {display: 'none'};
            pauseStyle = {display: 'inline'};
        }else{
            playStyle = {display: 'inline'};
            pauseStyle = {display: 'none'};
        }

        var minuteProgress = Math.floor(this.state.progress / 60) < 10 ? "0" + Math.floor(this.state.progress / 60) : Math.floor(this.state.progress / 60);
        var secondProgress = Math.floor(this.state.progress % 60) < 10 ? "0" + Math.floor(this.state.progress % 60) : Math.floor(this.state.progress % 60);


        var minuteDuration = this.audio.duration ? Math.floor(this.audio.duration / 60) : 0;
        minuteDuration = minuteDuration < 10 ? "0" + minuteDuration : minuteDuration;

        var secondDuration = this.audio.duration ? Math.floor(this.audio.duration % 60) : 0;
        secondDuration = secondDuration < 10 ? "0" + secondDuration : secondDuration;

        return(
            <div>
                {/*<div className="playlist-tab">
                    ddscdsdcd
                </div>*/}
                <div className="musicplayer row">
                    <div className="music-player-icon col-xs-1 col-xs-offset-2">
                        <i className="fa fa-step-backward step-backward" onClick={() => this.stepBackwardMusic()} aria-hidden="true"></i>
                        <i className="fa fa-play play" style={playStyle} onClick={() => this.playMusic()} aria-hidden="true"></i>
                        <i className="fa fa-pause pause" style={pauseStyle} onClick={() => this.pauseMusic()} aria-hidden="true"></i>
                        <i className="fa fa-step-forward step-forward" onClick={() => this.stepForwardMusic()} aria-hidden="true"></i>
                    </div>
                    <div className="music-detail col-xs-5">
                        <div className="detail">
                            <span className="song-detail">{this.props.songname}</span>
                            <span className="artist-detail">{this.props.artistname}</span>    
                        </div>
                        <div className="row">
                            <div className="music-bar col-xs-8" onClick={(e) => this.skipMusic(e)} data-music="bar" >
                                <div className="music-progress" style={{width: (((this.state.progress*100)/this.audio.duration) + "%")}} data-music="progress" ></div>
                            </div>
                            <div className="time-detail col-xs-4">
                                <span>{minuteProgress}:{secondProgress}</span> / <span>{minuteDuration}:{secondDuration}</span>
                            </div>
                        </div>     
                    </div>
                    <div className="music-playlist col-xs-1">
                        <i className="fa fa-list playlist" title="playlists" aria-hidden="true"></i>
                    </div>
                </div>          
            </div>
            
        );
    }
}
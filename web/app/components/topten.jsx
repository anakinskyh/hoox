import React from 'react'
import axios from 'axios'

export default class TopTen extends React.Component{
    constructor(){
        super();
        const temp = ['http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3', 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2005.mp3',
                      'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2017.mp3', 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2008.mp3',
                      'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2001.mp3', 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3', 
                      'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2002.mp3', 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2007.mp3',
                      'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2006.mp3', 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2009.mp3'
                    ];

        this.state = {
            songname: Array(10).fill(null),
            artistname: Array(10).fill(null),
            toptensong: Array(10).fill(null)
            // toptensong: temp
        };
    }

    componentDidMount(){
        var self = this;

        axios.post('http://139.59.118.208:18000/api/getsong',{keyword:""})
            .then(function(response){
                var song = [];
                var artist = [];
                var topten = [];
                
                var arr = response.data;

                for(var i = 0; i < arr.length; i++){
                    song.push(arr[i].name);
                    artist.push(arr[i].artist);
                    topten.push(arr[i].url);
                }

                self.setState({
                    songname: song,
                    artistname: artist,
                    toptensong: topten
                });
            });
    }

    render(){
        return(
            <div className="topten">
                <TopTenItem onclick={this.props.clickTopTen} rank="1" songname={this.state.songname[0]} artistname={this.state.artistname[0]} music={this.state.toptensong[0]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="2" songname={this.state.songname[1]} artistname={this.state.artistname[0]} music={this.state.toptensong[1]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="3" songname={this.state.songname[2]} artistname={this.state.artistname[0]} music={this.state.toptensong[2]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="4" songname={this.state.songname[3]} artistname={this.state.artistname[0]} music={this.state.toptensong[3]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="5" songname={this.state.songname[4]} artistname={this.state.artistname[0]} music={this.state.toptensong[4]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="6" songname={this.state.songname[5]} artistname={this.state.artistname[0]} music={this.state.toptensong[5]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="7" songname={this.state.songname[6]} artistname={this.state.artistname[0]} music={this.state.toptensong[6]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="8" songname={this.state.songname[7]} artistname={this.state.artistname[0]} music={this.state.toptensong[7]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="9" songname={this.state.songname[8]} artistname={this.state.artistname[0]} music={this.state.toptensong[8]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="10" songname={this.state.songname[9]} artistname={this.state.artistname[0]} music={this.state.toptensong[9]} />
            </div>      
        );
    }
}

export class TopTenItem extends React.Component{
    onChangeTopTenLink(){
        this.props.onclick(this.props.songname, this.props.artistname, this.props.music);
    }

    render(){
        return(
            <div className="row rank">
                <div className="col-xs-2 padding-left-0">
                    <div className="songrank" >{this.props.rank}</div>
                    <div className="playicon" onClick={() => this.onChangeTopTenLink()} ><i className="fa fa-play-circle-o" aria-hidden="true"></i></div>
                </div>
                <div className="col-xs-10">
                    <p>{this.props.songname}</p>
                    <p className="artistnamecolor" >{this.props.artistname}</p>
                </div>
            </div>
        );   
    }
}
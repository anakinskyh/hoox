import React from 'react'

import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import axios from 'axios';
// var youtubeStream = require('youtube-audio-stream')

import MusicPlayer from './musicplayer'
import Player from './player'


var searchData = [
    {id:1,photo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', name: 'Song1', artist: 'Artist1', view:12000, url:'musics/music1.mp3'},
    {id:2,photo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', name: 'Song2', artist: 'Artist2', view:4390, url:'musics/music1.mp3'},
    {id:3,photo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', name: 'Song3', artist: 'Artist3', view:32910, url:'musics/music1.mp3'},
    {id:4,photo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', name: 'Song4', artist: 'Artist4', view:2090, url:'musics/music1.mp3'}
];
var tmp = 0;

var Search = React.createClass({

    getDefaultProps: function () {
        return {
            searchData: searchData,
            songname: '',
            artistname: '',
            musicSrc: ''
        };
    },
    getInitialState: function () {
        return {
            searchData: this.props.searchData
        };
    },
    componentDidMount(){
        this.callSongAPI();
    },
    callSongAPI: function(){
      console.log('call api');
        var that = this;
        console.log("that");
        console.log(that);
        console.log("this");
        console.log(this);
        console.log("keyword (call api) is "+this.props.keyword);
        var kw = this.props.keyword;

        $(document).ready(function(){
          $.post("http://139.59.118.208:18000/api/getsong",{keyword:kw},
          function(data){console.log(data)

            searchData = data;
              that.setState({
                  searchData: data
              });


          },"json");

      });
    },
    onClickTopTen: function(song, artist, music){
        this.setState({
            songname: song,
            artistname: artist,
            musicSrc: music
        });
    },

    render: function(){

        {console.log("searchData:")}
        {console.log(searchData)}
        {console.log(this.props.keyword)}
        return(
            <div>
            <div className="search">
                {this.state.searchData.map((item, index) => (
                    <SearchItem onclick={this.onClickTopTen} key={index} iden={item._id} img="images/m.jpg" songname={item.name} artistname={item.artist} view={item.view? item.view:0} music={item.url}/>

                ))}
            </div>
                <MusicPlayer songname={this.state.songname} artistname={this.state.artistname} musicSrc={this.state.musicSrc} />
            </div>
        );
    }
});


export class SearchItem extends React.Component{

    clickPlay(searchId) {
        console.log("clickPlay of search "+searchId);
    }

    onChangeTopTenLink(){
        this.props.onclick(this.props.songname, this.props.artistname, this.props.music);
        var self = this;
        //console.log("idddddd: "+this.props.iden);
        axios.post('http://139.59.118.208:18000/api/addview',{song_id: self.props.iden})
            .then(function(response){
                console.log(response);
            });
    }

    render(){
        return(
            <div>
                <div className="row searchItem is-flex">
                    <Col xs={4} sm={4} md={4} lg={4} className="search-play-col">
                        <div className="search-playicon" onClick={() => this.onChangeTopTenLink()}><i className="fa fa-play-circle-o " aria-hidden="true"></i></div>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} className="search-detail-col">
                        <div>
                            <p className="search-song-name">{this.props.songname}</p>
                            <p className="search-artist">{this.props.artistname}</p>
                            <p className="search-view"><i className="fa fa-eye view-icon" aria-hidden="true"></i>&nbsp;{this.props.view}</p>
                        </div>

                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} className="search-img-col">
                        <Image src={this.props.img} rounded className="search-img"/>
                    </Col>

                </div>
                <hr/>
            </div>
        );
    }
}


module.exports = Search;


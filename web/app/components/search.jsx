import React from 'react'

import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
// var youtubeStream = require('youtube-audio-stream')


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
            searchData: searchData
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

    render: function(){

        {console.log("searchData:")}
        {console.log(searchData)}
        {console.log(this.props.keyword)}
        return(
            <div className="search">
                {this.state.searchData.map((item, index) => (
                    <SearchItem key={index} iden={item.id} img={item.photo} songname={item.name} artistname={item.artist} view={item.view? item.view:0} url={item.url}/>

                ))}
            </div>
        );
    }
});


export class SearchItem extends React.Component{

    clickPlay(searchId) {
        console.log("clickPlay of search "+searchId);
    }

    render(){
        return(
            <div>
                <div className="row searchItem is-flex">
                    <Col xs={4} sm={4} md={4} lg={4} className="search-play-col">
                        <div className="search-playicon" onClick={() => this.clickPlay(this.props.iden)}><i className="fa fa-play-circle-o " aria-hidden="true"></i></div>
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


import React from 'react'

import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
// var youtubeStream = require('youtube-audio-stream')


var searchData = [
    {id:1,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song1', artistname: 'Artist1', view:12000},
    {id:2,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song2', artistname: 'Artist2', view:4390},
    {id:3,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song3', artistname: 'Artist3', view:32910},
    {id:4,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song4', artistname: 'Artist4', view:2090}
];


export  default class Search extends React.Component{

    constructor(){
      super();
    }

    callSongAPI(){
      console.log('call api');
      $(document).ready(function(){
        $.ajax({
          url: 'http://',
          dataType: 'jsonp',
          cache: false,
          timeout: 5000,
          success: function(data){
            console.log('called');
            console.log(data);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
          }
        });
      });
    }

    render(){
        this.callSongAPI();
        return(
            <div className="search">
                {searchData.map((item, index) => (
                    <SearchItem key={index} iden={item.id} img={item.img} songname={item.songname} artistname={item.artistname} view={item.view}/>

                ))}
            </div>
        );
    }
}

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
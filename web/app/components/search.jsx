import React from 'react'

import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
// var youtubeStream = require('youtube-audio-stream')

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
                <SearchItem/>
                <hr/>
                <SearchItem/>
                <hr/>
            </div>
        );
    }
}

export class SearchItem extends React.Component{

    render(){
        return(
            <div className="row searchItem is-flex">
                <Col xs={4} sm={4} md={4} lg={4} className="search-play-col">
                    <div className="search-playicon"><i className="fa fa-play-circle-o " aria-hidden="true"></i></div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} className="search-detail-col">
                    <div>
                        <p className="search-song-name">Song1</p>
                        <p className="search-artist">Artist1</p>
                    </div>

                </Col>
                <Col xs={4} sm={4} md={4} lg={4} className="search-img-col">
                    <Image src="https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG" rounded className="search-img"/>
                </Col>
            </div>
        );
    }
}
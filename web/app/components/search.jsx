import React from 'react'
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
            <div>
              <p>Search</p>
            </div>
        );
    }
}

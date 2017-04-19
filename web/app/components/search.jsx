import React from 'react'

export class TopTenItem extends React.Component{
    constructor(){
      callSongAPI();
    }

    callSongAPI(){
      $(document).ready(function(){
        $.ajax({
          url: 'http://',
          dataType: 'jsonp',
          cache: false,
          timeout: 5000,
          success: function(data){
            console.log(data);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
          }
        });
      });
    }

    onChangeTopTenLink(){
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

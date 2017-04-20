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


        $(document).ready(function(){
          $.post("http://139.59.118.208:18000/api/getsong",{keyword:""},
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


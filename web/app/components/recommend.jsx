import React from 'react'
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import axios from 'axios';




var recData = [
    {id:1,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song1', artistname: 'Artist1', view:12000, url:'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3'},
    {id:2,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song2', artistname: 'Artist2', view:4390, url:'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3'},
    {id:3,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song3', artistname: 'Artist3', view:32910, url:'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3'},
    {id:4,img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/B-side_Collections.JPG', songname: 'Song4', artistname: 'Artist4', view:2090, url:'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3'}
];

//export default class Recommend extends React.Component{
//
//    render(){
//        return(
//            <div className="recommend">
//                <Row>
//                {recData.map((item, index) => (
//                    <RecommendItem key={index} iden={item.id} img={item.img} songname={item.songname} artistname={item.artistname} view={item.view} url={item.url}/>
//                ))}
//                </Row>
//            </div>
//        );
//    }
//}


var Recommend = React.createClass({

    getDefaultProps: function () {
        return {
            recData: recData
        };
    },
    getInitialState: function () {
        return {
            recData: this.props.recData
        };
    },
    componentDidMount(){
        this.callSongAPI();
    },
    callSongAPI: function(){
        console.log('call api in recommend');
        var that = this;
        $(document).ready(function(){
            $.post("http://139.59.118.208:18000/api/getsong",{keyword:""},
                function(data){console.log(data)

                    that.setState({
                        recData: data
                    });


                },"json");

        });
    },

    render: function(){

        {console.log("recData:")}
        {console.log(recData)}
        {console.log("STATE.RecData"+this.state.recData)}
        return(
            <div className="recommend">
                <Row>
                {this.state.recData.map((item, index) => (
                    <RecommendItem key={index} onclick={this.props.clickTopTen} iden={item._id} img="images/m.jpg" songname={item.name} artistname={item.artist} view={item.view? item.view:0} music={item.url}/>
                ))}
                </Row>
            </div>
        );
    }
});



export class RecommendItem extends React.Component{

    clickPlay(recId,url) {
        console.log("clickPlay of rec"+recId);
        console.log("clickPlay of url"+url);
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
            <Col xs={3} sm={3} md={3} lg={3} id={'rec' + this.props.iden} className="rec">
                <Row className="rec-img">
                    <Image src={this.props.img} rounded />
                    <div className="rec-filter">
                        <div className="rec-playicon" onClick={() => this.onChangeTopTenLink()} ><i className="fa fa-play-circle-o rec-playicon-i" aria-hidden="true"></i></div>
                        <div className="rec-view">
                            <i className="fa fa-eye view-icon" aria-hidden="true"></i>
                            <p>&nbsp;{this.props.view}</p>
                        </div>
                    </div>
                </Row>
                <Row className="rec-desc">
                    <p className="rec-song-name">{this.props.songname}</p>
                    <p className="rec-song-artist">{this.props.artistname}</p>
                </Row>
            </Col>
        );
    }
}

module.exports = Recommend;
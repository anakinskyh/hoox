import React from 'react'

export default class TopTen extends React.Component{
    render(){
        return(
            <div className="topten">
                <TopTenItem rank="1" songname="Song 1" artistname="Artist 1" />
                <TopTenItem rank="2" songname="Song 2" artistname="Artist 2" />
                <TopTenItem rank="3" songname="Song 3" artistname="Artist 3" />
                <TopTenItem rank="4" songname="Song 4" artistname="Artist 4" />
                <TopTenItem rank="5" songname="Song 5" artistname="Artist 5" />
                <TopTenItem rank="6" songname="Song 6" artistname="Artist 6" />
                <TopTenItem rank="7" songname="Song 7" artistname="Artist 7" />
                <TopTenItem rank="8" songname="Song 8" artistname="Artist 8" />
                <TopTenItem rank="9" songname="Song 9" artistname="Artist 9" />
                <TopTenItem rank="10" songname="Song 10" artistname="Artist 10" />
            </div>      
        );
    }
}

export class TopTenItem extends React.Component{
    render(){
        return(
            <div className="row rank">
                <div className="col-xs-2 padding-left-0">
                    <div className="songrank" >{this.props.rank}</div>
                    <div className="playicon"><i className="fa fa-play-circle-o" aria-hidden="true"></i></div>
                </div>
                <div className="col-xs-10">
                    <p>{this.props.songname}</p>
                    <p className="artistnamecolor" >{this.props.artistname}</p>
                </div>
            </div>
        );   
    }
}
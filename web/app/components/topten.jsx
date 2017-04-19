import React from 'react'

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
            // toptensong: Array(10).fill(null)
            toptensong: temp
        };
    }

    render(){
        return(
            <div className="topten">
                <TopTenItem onclick={this.props.clickTopTen} rank="1" songname="Song 1" artistname="Artist 1" music={this.state.toptensong[0]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="2" songname="Song 2" artistname="Artist 2" music={this.state.toptensong[1]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="3" songname="Song 3" artistname="Artist 3" music={this.state.toptensong[2]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="4" songname="Song 4" artistname="Artist 4" music={this.state.toptensong[3]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="5" songname="Song 5" artistname="Artist 5" music={this.state.toptensong[4]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="6" songname="Song 6" artistname="Artist 6" music={this.state.toptensong[5]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="7" songname="Song 7" artistname="Artist 7" music={this.state.toptensong[6]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="8" songname="Song 8" artistname="Artist 8" music={this.state.toptensong[7]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="9" songname="Song 9" artistname="Artist 9" music={this.state.toptensong[8]} />
                <TopTenItem onclick={this.props.clickTopTen} rank="10" songname="Song 10" artistname="Artist 10" music={this.state.toptensong[9]} />
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
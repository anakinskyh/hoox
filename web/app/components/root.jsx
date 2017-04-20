import React from 'react'

import Header from './header'
import Main from './main'
import Search from './search'


var Root = React.createClass({
    getDefaultProps: function () {
        return {
            page: <Main/>,
            keyword: ""
        };
    },
    getInitialState: function () {
        return {
            page: this.props.page,
            keyword: this.props.keyword
        };
    },
    updatePage: function () {
        console.log("updatePage in Root");
        //this.setState({
        //
        //});
    },
    keepSearchWord: function(s){
        console.log("s in Root: "+s);
        this.setState({
            page: <Search keyword={s}/>,
            keyword: s
        });
    },
    render: function () {
        return(
            <div>
                <div id="header" className="row">
                    <Header onUpdatePage={() => this.updatePage()}     onKeepSearchWord={this.keepSearchWord}/>
                </div>
            {this.state.page}
            </div>
        );
    }
});

module.exports = Root;
import React from 'react'

import Header from './header'
import Main from './main'
import Search from './search'


var Root = React.createClass({
    getDefaultProps: function () {
        return {
            page: <Main/>
        };
    },
    getInitialState: function () {
        return {
            page: this.props.page
        };
    },
    updatePage: function () {
        console.log("updatePage in Root");
        this.setState({
            page: <Search/>
        });
    },
    render: function () {
        return(
            <div>
                <div id="header" className="row">
                    <Header onUpdatePage={() => this.updatePage()}/>
                </div>
            {this.state.page}
            </div>
        );
    }
});

module.exports = Root;
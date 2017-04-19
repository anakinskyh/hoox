import React from 'react'

import Header from './header'
import Main from './main'


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
    handleUpdateName: function (nameInput) {
        this.setState({
            page: nameInput
        });
    },
    render: function () {
        return(
            <div>
                <div id="header" className="row">
                    <Header />
                </div>
            {this.state.page}
            </div>
        );
    }
});

module.exports = Root;
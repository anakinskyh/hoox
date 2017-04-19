import React from 'react'
import Header from './header'
import Recommend from './recommend'

var Test = React.createClass({
    getDefaultProps: function () {
        return {
            name: <Header/>
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    handleUpdateName: function (nameInput) {
        this.setState({
            name: nameInput
        });
    },
    render: function () {
        return (
            <div>
            {this.state.name}
            </div>
        );
    }
});

module.exports = Test;


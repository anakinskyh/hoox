import React from 'react'
import Header from './header'
import Recommend from './recommend'

//var Test = React.createClass({
//    getDefaultProps: function () {
//        return {
//            name: <Header/>
//        };
//    },
//    getInitialState: function () {
//        return {
//            name: this.props.name
//        };
//    },
//    handleUpdateName: function (nameInput) {
//        this.setState({
//            name: nameInput
//        });
//    },
//    render: function () {
//        return (
//            <div>
//            {this.state.name}
//            </div>
//        );
//    }
//});
//
//module.exports = Test;

export default class BodyColor extends React.Component {
    static propTypes = {
        isDark: React.PropTypes.bool
    }
    static defaultProps = {
        isDark: false
    }
    componentDidMount() {
        document.body.classList.toggle('darkClass', this.props.isDark)
    }
    componentWillReceiveProps(nextProps) {
        document.body.classList.toggle('darkClass', nextProps.isDark)
    }
    componentWillUnmount() {
        document.body.classList.remove('darkClass')
    }
    render() {
        return this.props.children
    }
}
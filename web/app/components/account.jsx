import React from 'react'

export default class Account extends React.Component{
    render(){

        var button_style = {
            backgroundColor: "transparent",
            borderColor: "transparent",
        };

        var isLogedIn = false;

        if(isLogedIn){
            var comp = (
                <div>
                    cat
                </div>);
        }else{
            var comp = (
                <div>
                    <button style={button_style}>
                        <i className="fa fa-facebook-official fa-2x"></i>
                    </button>
                    <button style={button_style}>
                        <i className="fa fa-twitter-square fa-2x"></i>
                    </button>

                </div>);
        }

        // console.log(comp);

        return(comp);
    }
}
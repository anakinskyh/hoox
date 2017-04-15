import React from 'react'

export default class Account extends React.Component{
    render(){
        var isLogedIn = false;

        if(isLogedIn){
            comp = (<div>
            </div>);
        }else{
            comp = (<div>
                
            </div>);
        }

        return(comp);
    }
}
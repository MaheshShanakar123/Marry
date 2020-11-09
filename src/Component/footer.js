import React, { Component } from 'react';

class Footer extends Component{
    render(){
        var footerstyle = {
            marginTop: "64px",
            height:"200px",
            backgroundColor:"black",
        }
        return (
            <div style={footerstyle}></div>
        )
    }
}

export default Footer
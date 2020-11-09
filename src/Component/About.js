import React, { Component } from 'react'; 
  
class About extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
       render(){
           return (
               <div>
                   <img src={this.props.fun.img} />
                   <h1>{this.props.fun.name}</h1>
                   <p>{this.props.fun.address}</p>
                   <p>{this.props.fun.city}</p>
                   <p>{this.props.fun.state}</p>
                   </div>
           )
       }
}
  
export default About; 
import React from 'react'; 
  
function Contact(props){
    const {data} = props.location;
    console.log(data); 
    return (
    <h1>{data[0].name}</h1>) 
} 
  
export default Contact; 
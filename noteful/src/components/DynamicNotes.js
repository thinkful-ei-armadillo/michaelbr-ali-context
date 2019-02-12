import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DynamicNotes extends Component{
  
render(){
 
  console.log(this.props.note)
  return(
    <div>
      <h3>{this.props.note.name}</h3>
      <p>{this.props.note.content}</p>
      <button className="back">Back</button>
    </div>
  );
}
  
}

export default DynamicNotes;

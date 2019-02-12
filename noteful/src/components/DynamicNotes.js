import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DynamicNotes extends Component{
  
render(){
 
 
  return(
    <div>
      <h3>{this.props.note.name}</h3>
      <p>{this.props.note.content}</p>
      <Link to={`/folder/${this.props.note.folderId}`}><button className="back">Back</button></Link> 
    </div>
  );
}
  
}

export default DynamicNotes;

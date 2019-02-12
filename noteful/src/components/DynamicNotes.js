import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DynamicNotes extends Component{
  
render(){
 
  const folder = this.props.folder.find(i=> i.id === this.props.note.folderId);
 
  return(
    <div>
      <h3>{this.props.note.name}</h3>
      <p>{this.props.note.content}</p>
      <Link to={`/folder/${folder.id}`}><button className="back">Back</button></Link> 
    </div>
  );
}
  
}

export default DynamicNotes;

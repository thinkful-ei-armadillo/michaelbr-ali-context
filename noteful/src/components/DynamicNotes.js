import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DynamicNotes extends Component{
  
render(){
  let notesList = this.props.notes.map((key, name) => {
    return (<section className="note">
              <Link to={`/note/${key.id}`}><h3>{key.name}</h3></Link>
                <p>{key.content}</p>
            </section>)
  })
  return(
    <div>
      {notesList}
      <button className="back">Back</button>
    </div>
  );
}
  
}

export default DynamicNotes;

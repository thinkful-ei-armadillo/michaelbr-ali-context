import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OurContext from './OurContext';

class MainNotes extends Component{

static contextType = OurContext;

render(){
  
  let notesList = this.context.dummy.notes.map((key, name) => {
    return (<section className="note">
              <Link to={`/note/${key.id}`}><h3>{key.name}</h3></Link>
             <p>{key.modified}</p>
             <button> Delete Note</button>
            </section>)
  })
  return(
    <div>
      {notesList}
      <button className="add">Add Note</button>
    </div>
  );
}
  
}

export default MainNotes;
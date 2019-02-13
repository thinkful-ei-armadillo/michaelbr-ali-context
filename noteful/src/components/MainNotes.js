import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OurContext from './OurContext';

class MainNotes extends Component{

static contextType = OurContext;

handleDelete = (noteId, par) => {
  fetch(`http://localhost:9090/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then(() => {
      par(noteId)
    })
}

render(){
  const curNote = this.context;

  let notesList = curNote.notes.map((key, name) => {
    return (<section className="note">
              <Link to={`/note/${key.id}`}><h3>{key.name}</h3></Link>
             <p>{key.modified}</p>
             <button type="button" onClick={() => this.handleDelete(key.id, this.context.deleteNote)}>Delete Note</button>
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
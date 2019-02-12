import React, { Component } from 'react';


class MainNotes extends Component{
  
render(){
  let notesList = this.props.notes.map((key, name) => {
    return (<section className="note">
              <h3>{key.name}</h3>
                <p>{key.modified}</p>
                <button className="deleteNoteButton">Delete Note</button>
            </section>)
  })
  return(
    <div>
      {notesList}
      <button className="addNoteButton">Add Note</button>
    </div>
  );
}
  
}

export default MainNotes;
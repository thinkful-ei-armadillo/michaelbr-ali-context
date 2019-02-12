import React, { Component } from 'react';


class MainNotes extends Component{
  
render(){
  
  let notesList = this.props.notes.map((key, name) => {
    return (<section className="note">
             <h3>{key.name}</h3>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MainNotes extends Component{
  
render(){
  console.log(this.props)
  // let notesList = this.props.notes.map((key, name) => {
  //   return (<section className="note">
  //            <h3>{key.name}</h3>
  //            <p>{key.modified}</p>
  //            <button> Delete Note</button>
  //           </section>)
  // })
  return(
    <div>
      {/* {notesList} */}
      <button className="add">Add Note</button>
    </div>
  );
}
  
}

export default MainNotes;
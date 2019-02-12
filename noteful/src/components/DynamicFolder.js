import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DynamicFolder extends Component{

  render(){
    let sidebarList = this.props.fold.map((key, name) => {
      return (
        <section key={key.id} className="folderEntry">
          <Link to={`/folder/${key.id}`}>{key.name}</Link>
        </section>
      )
    });
  
    const notes = this.props.notes
    .filter(i => i.folderId === this.props.folders.id)
    .map((key, name) => {
      return (<section className="note">
                <Link to={`/note/${key.id}`}><h3>{key.name}</h3></Link>
                  <p>{key.modified}</p>
                  <button className="deleteNoteButton">Delete Note</button>
              </section>)
    })
    
    return(
      <div>
        {sidebarList}
        {notes}

      </div>
    );
  }
}

export default DynamicFolder;

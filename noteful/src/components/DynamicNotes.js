import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OurContext from './OurContext';


class DynamicNotes extends Component {

  static contextType = OurContext;

  handleDelete = (noteId, par) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        par(noteId)
      })
  }

  render() {

    return (
      <div>
        <h3>{this.props.note.name}</h3>
        <p>{this.props.note.content}</p>
        <Link to={`/folder/${this.props.note.folderId}`}><button className="back">Back</button></Link>
        <button type="button" onClick={() => this.handleDelete(this.props.note.folderId, this.context.deleteNote)}>Delete Note</button>
      </div>
    );
  }

}

export default DynamicNotes;

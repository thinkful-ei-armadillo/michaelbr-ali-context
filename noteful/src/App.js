import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from  './Main';
import DynamicFolder from './components/DynamicFolder';
import DynamicNotes from './components/DynamicNotes';
import './App.css';
import OurContext from './components/OurContext';

class App extends Component {

  static contextType = OurContext;

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: []
    } 
  }

    componentDidMount(){
      Promise.all([
        fetch(`http://localhost:9090/notes`),
        fetch(`http://localhost:9090/folders`)
      ])
        .then(([notesResponse, foldersResponse]) => {
          if(!notesResponse.ok)
            return notesResponse.json().then(e => Promise.reject(e))
          if(!foldersResponse.ok)
            return foldersResponse.json().then(e => Promise.reject(e))

          return Promise.all([
            notesResponse.json(),
            foldersResponse.json()
          ])
        })
        .then(([notes, folders]) => {
          this.setState({notes, folders})
        })
        .catch(err => {
          console.error({err})
        })
    }

    deleteNote = (noteId) => {
      this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
      })
    }

    helpFolder(e){
      let folder = this.state.folders.find( i => i.id === e.match.params.folderId);
      
      return (
        <div>
          <DynamicFolder folders={folder} notes={this.state.notes} fold ={this.state.folders} />
        </div>
        
      );
    }

    helpNote(e){
      let note = this.state.notes.find( i => i.id === e.match.params.note);
      
      return (
        <div>
          <DynamicNotes note={note} />
        </div>
        
      );
    }

  render() {
    const contextSomething = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote
    };

    return (
      <OurContext.Provider value={contextSomething}>
        <div className="App">
          <Route exact path='/' component={() => <Main folders={this.state.folders} notes={this.state.notes} />} />
          <Route exact path='/folder/:folderId' render={(e) => this.helpFolder(e)} />
          <Route exact path='/note/:note' render={(e) => this.helpNote(e)} />
        </div>
      </OurContext.Provider>
    );
    }

  }
export default App;
//(e) => this.helpNote(e)
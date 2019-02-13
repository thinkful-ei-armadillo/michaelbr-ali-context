import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from  './Main';
import DynamicFolder from './components/DynamicFolder';
import DynamicNotes from './components/DynamicNotes';
import './App.css';
import dummy from './components/dummy';
import OurContext from './OurContext';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = dummy 
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
    return (
      <div className="App">
          <Route exact path='/' component={() => <Main folders={this.state.folders} notes={this.state.notes}/> } />
         
         <Route exact path='/folder/:folderId' render={(e)=> this.helpFolder(e)} />
          <Route exact path = '/note/:note' render={ (e) => this.helpNote(e)} /> 
      </div>
    );
    }

  }
export default App;
//(e) => this.helpNote(e)
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from  './Main';
import DynamicFolder from './DynamicFold';
import DynamicNotes from './DynamicNote';
import './App.css';
import FolderMain from './components/FolderMain';
import dummy from './components/dummy';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = dummy
}

  render() {
    return (
      <div className="App">
          <Route exact path='/' component={() => <Main folders={this.state.folders} notes={this.state.notes}/> } />
          <Route exact path='/folder/:folderId' component={() => <DynamicFolder folders={this.state.folders} notes={this.state.notes}/>} />
          {/* <Route path = '/note/:note' component={DynamicNote} />  */}
      </div>
    );
    }

  }
export default App;

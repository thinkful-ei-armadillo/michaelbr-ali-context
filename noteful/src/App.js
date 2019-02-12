import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainMain from './components/MainMain';
import FolderMain from './components/FolderMain';
import SideBarMain from './components/SideBarMain';
import DynamicFolder from './components/DynamicFolder';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">


        <Route path='/' component={MainMain} />
        <Route path='/' component={SideBarMain} />
        <Route path='/' component={FolderMain} />
        <Route path='/folder/3' component={DynamicFolder} />

      </div>
    );
  }
}

export default App;

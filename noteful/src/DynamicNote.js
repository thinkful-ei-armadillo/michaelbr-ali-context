import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DynamicNotes from './components/DynamicNotes';
import NoteSideBar from './components/NoteSideBar';


class DynamicNote extends Component{

  render(){
    return(
      <div>
        <DynamicNotes />
        <NoteSideBar />
      </div>
    );
  }
}

export default DynamicNote;
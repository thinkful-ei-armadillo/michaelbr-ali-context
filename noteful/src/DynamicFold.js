import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DynamicFolder from './components/DynamicFolder';
import FolderSide from './components/DynamicFolder';

class DynamicFold extends Component{

  render(){
    return(
      <div>
        <DynamicFolder />
        <FolderSide />
      </div>
    );
  }
}

export default DynamicFold;
import React, { Component } from 'react';
import MainMain from './components/MainMain';
import FolderMain from './components/FolderMain';
import SideBarMain from './components/SideBarMain';


class Main extends Component{
render(){
  return(
    <div>
      <MainMain />
      <FolderMain />
      <SideBarMain />
    </div>
  );
}
  
}

export default Main;
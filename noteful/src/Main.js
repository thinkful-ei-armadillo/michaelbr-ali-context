import React, { Component } from 'react';
import MainNotes from './components/MainNotes';
import FolderMain from './components/FolderMain';
import MainSideBar from './components/MainSideBar';


class Main extends Component{
render(){
  return(
    <div>
      <h1>Noteful</h1>
        <section className="mainList">
        <section className="folderList">
          <MainSideBar/>
        </section>
        <section className="noteList">
          <MainNotes />
        </section>
        </section>

      
    </div>
  )
}
  
}

{/* <MainMain /> */}

      
{/* <FolderMain />
<SideBarMain /> */}

export default Main;
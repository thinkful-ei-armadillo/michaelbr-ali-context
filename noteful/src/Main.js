import React, { Component } from 'react';
import MainNotes from './components/MainNotes';
import MainSideBar from './components/MainSideBar';


class Main extends Component{
render(){
  
  return(
    <div>
      <h1>Noteful</h1>
        <section className="mainList">
        <section className="folderList">
          <MainSideBar folders={this.props.folders} notes={this.props.notes}/>
        </section>
        <section className="noteList">
          <MainNotes folders={this.props.folders} notes={this.props.notes}/>
        </section>
        </section>

      
    </div>
  )
}
  
}



export default Main;
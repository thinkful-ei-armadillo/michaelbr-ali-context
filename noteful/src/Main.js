import React, { Component } from 'react';
import MainNotes from './components/MainNotes';
import MainSideBar from './components/MainSideBar';
import OurContext from './components/OurContext';




class Main extends Component{
render(){
  
  return(
    <OurContext.Provider value={ this.state }>
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
      </OurContext.Provider>

      
    
  )
}
  
}



export default Main;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OurContext from './OurContext';


class MainSideBar extends Component {

static contextType = OurContext;

  render() {

    let sidebarList = this.context.dummy.folders.map((key, name) => {
      return (
        <section key={key.id} className="folderEntry">
          <Link to={`/folder/${key.id}`}>{key.name}</Link>
        </section>
      )
    });

    return (
      <div>
        <section className="folderContainer">
          {sidebarList}
          <button className="addFolderButton">Add Folder</button>
        </section>
        
      </div>

    );
  }
}



export default MainSideBar;
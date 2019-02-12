import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { dummy } from './dummy';

class MainSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [
        {
          "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Important"
        },
        {
          "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Super"
        },
        {
          "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Spangley"
        }],
      notes: []
    }
  }

  render() {
    let sidebarList = this.state.folders.map((key, name) => {
      return (
        <section key={key.id} className="folderEntry">
          <NavLink to={`/folder/${key.id}`}>{key.name}</NavLink>
        </section>
      )
    });


    return (
      <section className="folderContainer">
        {sidebarList}
        <button className="addFolderButton">Add Folder</button>
      </section>
    );
  }
}


{/* <ul>
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
         <li>
           <NavLink to="/folder/3">Folder</NavLink>
         </li>
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
       </ul> */}

export default MainSideBar;
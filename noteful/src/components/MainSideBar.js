import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dummy } from './dummy';
import MainNotes from './MainNotes';

class MainSideBar extends Component {

  render() {

    let sidebarList = this.props.folders.map((key, name) => {
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
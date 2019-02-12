import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBarMain extends Component{

  render(){
    return(
      <div>
       <ul>
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
         <li>
           <NavLink to="/folder/">Folder</NavLink>
         </li>
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
       </ul>
      </div>
    );
  }
}

export default SideBarMain;
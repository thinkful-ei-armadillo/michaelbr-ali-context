import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NoteSideBar extends Component{

  render(){
    return(
      <div>
       <ul>
         <li>
           <NavLink to="/note">Back</NavLink>
         </li>
       </ul>
      </div>
    );
  }
}

export default NoteSideBar;
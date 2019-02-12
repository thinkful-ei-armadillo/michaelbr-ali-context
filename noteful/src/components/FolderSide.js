import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class FolderSide extends Component{

  render(){
    return(
      <ul>
        <li>
        
           <NavLink to="/folder/1">folder 1</NavLink>
        
        </li>
      </ul>
    );
  }
}

export default FolderSide;

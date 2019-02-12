import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from  './Main';
import DynamicFold from './DynamicFold';
import DynamicNote from './DynamicNote';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

          <Route exact path='/' component={Main} />
          <Route path='/folder/:folder' component={DynamicFold} />
          <Route path = '/note/:note' component={DynamicNote} />

      </div>
    );
  }
}

export default App;

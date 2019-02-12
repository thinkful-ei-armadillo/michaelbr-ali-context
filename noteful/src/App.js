import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from  './Main';
import DynamicFold from './DynamicFold';
import DynamicNote from './DynamicNote';
import './App.css';




class App extends Component {
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
    return (
      <div className="App">

          <Route exact path='/' component={Main} />
          <Route exact path='/folder/:{folder}' component={DynamicFold} />
          {/*Route path = '/note/:note' component={DynamicNote} /> */}

      </div>
    );
  }
}

export default App;

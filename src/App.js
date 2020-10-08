import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi Im a react App</h1>
        <p>This is working</p>
        <Person name="max" age="28"/>
        <Person name="manu" age="25">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="35"/>
      </div>
    );
  }
  
}

export default App;

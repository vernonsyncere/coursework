import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 25 },
      { name: 'stephanie', age: 35 }
    ],
    otherState : 'other value'
  }

  switchNameHandler = (newName) => {
  //  console.log("was clicked")
    this.setState( { 
      persons: [
      { name: newName, age: 42 },
      { name: 'manu', age: 25 },
      { name: 'stephanie', age: 27 }
      ] 
    } )
  }
  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
      { name: event.target.value, age: 42 },
      { name: 'manu', age: 25 },
      { name: 'stephanie', age: 27 }
      ] 
    } )
  }


  render() {
    return (
      <div className="App">
        <h1> Hi Im a react App</h1>
        <p>This is working</p>
        <button onClick={() => this.switchNameHandler('Max!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        changed={this.nameChangedHandler}
        />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Maxamilian!')}>My Hobbies: Racing
        </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        />
      </div>
    );
  }

}

export default App;

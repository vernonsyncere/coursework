import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 25 },
      { name: 'stephanie', age: 35 }
    ],
    otherState : 'other value',
    usernames: [
      {username: "Syncere"},
      {username: "LikeyMe"}
    ]
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
  usernameChangedHandler = (event) =>{
    this.setState( { 
      usernames: [
        {username: event.target.value},
        {username: "Syncere"}
      ] 
    } )
  }


  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const newStyle ={
      backgroundColor: 'black',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1> Hi Im a react App</h1>
        <p>This is working</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Max!!')}>Switch Name</button>
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
        <UserOutput newStyle={newStyle} username={this.state.usernames[0].username}/>
        <UserInput newStyle={newStyle} typed={this.usernameChangedHandler.bind(this)} username={this.state.usernames[0].username}/>

        <UserOutput newStyle={newStyle} username={this.state.usernames[1].username}/>
      </div>
    );
  }

}

export default App;

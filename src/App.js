import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id:"1", name: 'max', age: 28 },
      { id:"2", name: 'manu', age: 25 },
      { id:"3", name: 'stephanie', age: 35 }
    ],
    otherState : 'other value',
    usernames: [
      {username: "Syncere"},
      {username: "LikeyMe"}
    ], 
    showPersons: false
  }

  
  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
      {  name: event.target.value, age: 42 },
      {  name: 'manu', age: 25 },
      {  name: 'stephanie', age: 27 }
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

  deletePersonhandler = (personIndex)=>{
    // const persons = this.state.persons.slice();
    const persons =[...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
   const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

    let persons = null;

    if( this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonhandler(index)}
            name={person.name}
            age={person.age}
            key={person.id} />
          })}

          {/* <UserOutput newStyle={newStyle} username={this.state.usernames[0].username}/>
          <UserInput newStyle={newStyle} typed={this.usernameChangedHandler.bind(this)} username={this.state.usernames[0].username}/>

          <UserOutput newStyle={newStyle} username={this.state.usernames[1].username}/> */}
        </div> 
      )
    }
  
    
    return (
      <div className="App">
        <h1> Hi Im a react App</h1>
        <p>This is working</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Switch Name</button>
        {/* {this.state.showPersons === true ? */}
         {persons}
        {/* : null } */}
      </div>
    );
  }

}

export default App;

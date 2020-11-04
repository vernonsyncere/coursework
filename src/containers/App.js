import React, { Component } from "react";
// Importing from a css module
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }
  
  state = {
    persons: [
      { id: "1", name: "max", age: 28 },
      { id: "2", name: "manu", age: 25 },
      { id: "3", name: "stephanie", age: 35 },
    ],
    otherState: "other value",
    usernames: [{ username: "Syncere" }, { username: "LikeyMe" }],
    showPersons: false
  };

 static getDerivedStateFromProps(props, state ) {
   console.log('[App.js] getDerivedStateFromProps', props)
   return state;
 }

 componentWillMount() {
  console.log('[App.js] componentWillMount')
}

 componentDidMount() {
   console.log('[App.js] componentDidMount')
 }

  nameChangedHandler = (event, id) => {
    // assigning an index to the variable personIndex
    // by returning the index of the changed array
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // assign the person at the index to the variable person
    const person = {
      ...this.state.persons[personIndex],
    };

    // change the person to whatever is being typed in
    person.name = event.target.value;

    // making a copy of state the way it currently is
    const persons = [...this.state.persons];

    // updated persons at the index and the value that was typed in
    persons[personIndex] = person;

    // set state to the new updated state with the modifcation to whichever field
    this.setState({ persons: persons });
  };
  usernameChangedHandler = (event) => {
    // changing the username of the first two indexs in state. the first by what ever is typed in
    // the second is hard coded to "syncere"
    this.setState({
      usernames: [{ username: event.target.value }, { username: "Syncere" }],
    });
  };

  deletePersonhandler = (personIndex) => {
    // assigning the current state to the variable persons
    const persons = [...this.state.persons];
    // removing one person at the index provided
    persons.splice(personIndex, 1);
    // seting persons in state to what the varibale persons above is after it is spliced
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    // assigning the value of showPersons in state to the variable doesShow
    const doesShow = this.state.showPersons;
    // sets state at showPersons to be the opposite of what doesShow is
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log('[App.js] render')
    let persons = null;

    // console.log("me", btnClass);
    if (this.state.showPersons) {
      persons = 
        <Persons
          persons={this.state.persons}
          click={this.deletePersonhandler}
          changed={this.nameChangedHandler}
        />
    }

    return (
      <div className={classes.App}>
        {/* {this.state.showPersons === true ? */}
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
// Importing from a css module
import classes from "./App.module.css";
import Person from "./Person/Person";
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "max", age: 28 },
      { id: "2", name: "manu", age: 25 },
      { id: "3", name: "stephanie", age: 35 },
    ],
    otherState: "other value",
    usernames: [{ username: "Syncere" }, { username: "LikeyMe" }],
    showPersons: false,
  };

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
    let persons = null;
    let btnClass = [classes.Button];
    console.log("me", btnClass);
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonhandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1> Hi Im a react App</h1>
        <p className={assignedClasses.join(" ")}>This is working</p>
        <button
          className={btnClass.join(" ")}
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          Switch Name
        </button>
        {/* {this.state.showPersons === true ? */}
        {persons}
        {/* : null } */}
      </div>
    );
  }
}

export default App;

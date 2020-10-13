import React from "react";
import classes from "./Cockpit.module.css";
const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = [classes.Button];

  console.log(props);
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> Hi Im a react App</h1>
      <p className={assignedClasses.join(" ")}>This is working</p>
      <button
        className={btnClass.join(" ")}
        alt={props.showPersons}
        onClick={props.clicked}
      >
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;

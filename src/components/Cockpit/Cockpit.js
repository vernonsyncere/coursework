import React, { useEffect, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from '../../containers/context/auth-context';



const Cockpit = (props) => {
  const authContext = useContext(AuthContext)
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Fetch data from the cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit].js 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

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
    <div className={ classes.Cockpit }>
      <h1> { props.title }</h1>
      <p className={ assignedClasses.join(" ") }>This is working</p>
      <button
        className={ btnClass.join(" ") }
        alt={ props.showPersons }
        onClick={ props.clicked }
      >
        Toggle Person
      </button>
       <button onClick={ authContext.login }>Log in</button>    
    </div>
  );
};

export default Cockpit;

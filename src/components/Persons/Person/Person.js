import React from "react";
import classes from "./Person.module.css";

const Person = (props) => {
  console.log('[Person.js] rendering...')
  return (
    <div className={classes.Person}>
      <button>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </button>
    </div>
  );
};

export default Person;

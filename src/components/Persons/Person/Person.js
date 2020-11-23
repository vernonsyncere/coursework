import React, { Component } from "react";
import classes from "./Person.module.css";
import Auxilliary from '../../../containers/hoc/Auxilliary'

class Person extends Component{
  render(){
    console.log('[Person.js] rendering...')
    return (
      <Auxilliary>
      {/* <div className={classes.Person}> */}
        <button>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old
          </p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </button>
      {/* </div> */}
      </Auxilliary>
    );
  }

  
  
};

export default Person;

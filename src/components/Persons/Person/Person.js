import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from "./Person.module.css";
import Auxilliary from '../../../containers/hoc/Auxilliary';
import AuthContext from '../../../containers/context/auth-context';

class Person extends Component {
  
  static contextType = AuthContext
    
  componentDidMount(){
   console.log("me", this.context.authenticated)
  }
  render() {
    console.log('[Person.js] rendering...');

  
    return (
      <Auxilliary>
        <AuthContext.Consumer>
          { (context) => context.authenticated ? <p>Authenticated </p> : <p>Please log in</p> }
        </AuthContext.Consumer>

        {/* <div className={classes.Person}>  */ }
        <button>
          <p onClick={ this.props.click }>
            I'm { this.props.name } and I am { this.props.age } years old
          </p>
          <p>{ this.props.children }</p>
          <input type="text" onChange={ this.props.changed } value={ this.props.name } />
        </button>
        {/* </div>  */ }
      </Auxilliary>
    );
  }



};



export default Person;

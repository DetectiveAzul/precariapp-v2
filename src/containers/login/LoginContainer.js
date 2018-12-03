import React, { Component } from 'react';
// import { Router } from '@reach/router';
//Components
import { LoginForm } from './components/LoginForm';
//Redux
import { connect } from 'react-redux';
// import { logIn } from '../../redux/actions/admin_actions.js';

class LoginContainer extends Component {
  constructor({ admin }) {
    super();
    this.userLogIn = this.userLogIn.bind(this);
    this.userLogOut = this.userLogOut.bind(this);
  }

  userLogIn(event) {
    event.preventDefault();
    console.log('Button clicked!', 'User logging in!');
  }

  userLogOut() {
    console.log('Button clicked!', 'User logging out!');
  }

  checkIfLoggedIn(admin) {
    return admin.connected;
  }

  render() {
    return (
      <LoginForm 
        userLogIn={this.userLogIn}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    admin: state.admin
  };
};

LoginContainer = connect(mapStateToProps)(LoginContainer);
export default LoginContainer;

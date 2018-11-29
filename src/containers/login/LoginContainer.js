import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
//Components
import { LoginForm } from './components/LoginForm';
import { TestRoute } from '../_tests/Test02';
//Redux
import { connect } from 'react-redux';
import { logIn, logOut } from '../../redux/actions/admin_actions.js';

class LoginContainer extends Component {
  constructor({ admin }) {
    super();
    this.userLogIn = this.userLogIn.bind(this);
    this.userLogOut = this.userLogOut.bind(this);
  }

  userLogIn() {
    console.log('Button clicked!', 'User logging in!');
    this.props.dispatch(
      logIn({
        user: 'detec.azul@gmail.com',
        password: '12345678910'
      })
    );
  }

  userLogOut() {
    console.log('Button clicked!', 'User logging out!');
  }

  checkIfLoggedIn(admin) {
    return admin.connected;
  }

  additionalRoutes() {
    if (this.checkIfLoggedIn(this.props.admin)) {
    //   return <TestRoute path="/:routeId" />;
    }
  }

  render() {
    return (
      <Router>
        <LoginForm userLogIn={this.userLogIn} path="/" />
        {/* {this.additionalRoutes()} */}
      </Router>
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

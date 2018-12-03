import React, { Component } from 'react';
// import { Router } from '@reach/router';
//Components
import { LoginForm } from './components/LoginForm';
//Redux
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions/admin_actions.js';

class LoginContainer extends Component {
  constructor({ admin, dispatch, cookies }) {
    super();
    this.userLogIn = this.userLogIn.bind(this);
  }

  userLogIn(event) {
    event.preventDefault();
    const testCredentials = {
      user: "detec.azul@gmail.com",
      password: "12345678910"
    }
    this.setCookies(testCredentials);
    this.props.dispatch(logIn(testCredentials));
  }

  setCookies(credentials) {
    this.props.cookies.set('user', credentials.user, { path: '/', expires: this.setExpirationDate() });
  }

  setExpirationDate() {
    const date = new Date();
    date.setTime(date.getTime() + 24*60*60*1000); // in milliseconds
    return date;
  }

  render() {
    return (
      <LoginForm 
        userLogIn={this.userLogIn}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    admin: state.admin,
    cookies: ownProps.cookies
  };
};

LoginContainer = connect(mapStateToProps)(LoginContainer);
export default LoginContainer;

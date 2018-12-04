import React, { Component } from 'react';
// import { Router } from '@reach/router';
//Components
import { LoginForm } from './components/LoginForm';
//Redux
import { connect } from 'react-redux';
import { logIn, authFail } from '../../redux/actions/admin_actions';
//Helpers
import { postLogIn } from '../../helpers/apiCalls';

class LoginContainer extends Component {
  constructor({ admin, dispatch, cookies, failed }) {
    super();
    this.userLogIn = this.userLogIn.bind(this);
  }

  userLogIn(event) {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    postLogIn(credentials).then(res => {
      if (res.status === 'success') {
        this.setCookies(credentials, res.token);
        this.props.dispatch(logIn(credentials));
      } else {
        this.props.dispatch(authFail());
      }
    });
  }

  setCookies(credentials, session) {
    this.props.cookies.set('admin', credentials.email, {
      path: '/',
      expires: this.setExpirationDate()
    });
    this.props.cookies.set('session', session, {
      path: '/',
      expires: this.setExpirationDate()
    });
  }

  setExpirationDate() {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // in milliseconds
    return date;
  }

  render() {
    return <LoginForm userLogIn={this.userLogIn} failed={this.props.failed} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    admin: state.admin,
    failed: state.admin.authfail,
    cookies: ownProps.cookies
  };
};

LoginContainer = connect(mapStateToProps)(LoginContainer);
export default LoginContainer;

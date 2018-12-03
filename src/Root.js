import React, { Component } from 'react';
//Components
import LoginContainer from './containers/login/LoginContainer';
import App from './App';
//Redux
import { connect } from 'react-redux';
import { logIn } from './redux/actions/admin_actions';

//Cookies
import { withCookies } from 'react-cookie';

class Root extends Component {
  componentDidMount() {
    this.checkIfSessionIsActive();
  }

  checkIfSessionIsActive() {
    if (this.props.cookies.get('user')) {
      this.props.dispatch(logIn({
        user: "detec.azul@gmail.com",
        password: "12345678910"
      }));
    };
  }

  render() {
    switch (this.props.admin.connected) {
      case true:
        return <App cookies={this.props.cookies} />;
      default:
        return <LoginContainer cookies={this.props.cookies} />
    }
  }
}

const mapStateToProps = state => {
  return {
    admin: state.admin
  };
};

Root = connect(mapStateToProps)(Root);
export default withCookies(Root);

import React, { Component } from 'react';
//Components
import NavBar from './components/NavBar';
//Redux
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/admin_actions';
import { removeToken } from '../../redux/actions/token_actions';

class Nav extends Component {
    constructor() {
        super();
        this.userLoggingOut = this.userLoggingOut.bind(this);
    }

    userLoggingOut() {
        this.resetCookies();
        this.props.dispatch(logOut(this.props.admin));
        this.props.dispatch(removeToken());
        
    }

    resetCookies() {
        this.props.cookies.remove('admin');
        this.props.cookies.remove('session');
    }

    render() {
        return(
            <NavBar userLoggingOut={this.userLoggingOut} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      admin: state.admin,
      cookies: ownProps.cookies
    };
  };
Nav = connect(mapStateToProps)(Nav);
export default Nav;

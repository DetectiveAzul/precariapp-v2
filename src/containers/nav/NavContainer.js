import React, { Component } from 'react';
//Components
import NavLink from './components/NavLink';
import LogOutButton from './components/LogOutButton';
//Redux
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/admin_actions';

class Nav extends Component {
    constructor() {
        super();
        this.userLoggingOut = this.userLoggingOut.bind(this);
    }

    userLoggingOut() {
        this.resetCookies();
        this.props.dispatch(logOut(this.props.admin));
        
    }

    resetCookies() {
        this.props.cookies.remove('user');
    }

    render() {
        return(
            <nav>
                <NavLink 
                    path="/test"
                    name="Test 1"
                />
                <NavLink 
                    path="/test2"
                    name="Test 2"
                />
                <NavLink
                    path="/test3" 
                    name="Test 3"
                />
                <LogOutButton onClick={this.userLoggingOut} />
            </nav>
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

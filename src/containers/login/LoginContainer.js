import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
// import { logIn, logOut } from '../../redux/actions/admin_actions.js';

class LoginContainer extends Component {
    constructor({ admin }) {
        super()
        this.userLogIn = this.userLogIn.bind(this);
        this.userLogOut = this.userLogOut.bind(this);
    }

    userLogIn() {
        console.log('Button clicked!', 'User logging in!');
    }

    userLogOut() {
        console.log('Button clicked!', 'User logging out!');
    }

    checkIfLoggedIn(admin) {
        if (admin.connected) {
            return <p>Admin: {admin.user}</p>
        } else {
            return <p>Nobody is logged in</p>
        }
    }

    render() {
        let status = this.checkIfLoggedIn(this.props.admin)

        return(
            <div className="login-container">
                <p>Hello from login-container</p>
                { status }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        admin: state.admin
    };
};

LoginContainer = connect(
    mapStateToProps
)(LoginContainer);
export default LoginContainer;
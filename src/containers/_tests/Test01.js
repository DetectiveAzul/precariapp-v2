import React, { Component } from 'react';

//Components

//Redux
import { connect } from 'react-redux';
import { logIn, logOut } from '../../redux/actions/admin_actions.js';

class Test01Container extends Component {
    constructor(props) {
        super(props);
        this.mockLogIn = this.mockLogIn.bind(this);
        this.mockLogOut = this.mockLogOut.bind(this);
    }

    mockLogIn() {
        console.log('button logIn clicked!');
        this.props.dispatch(logIn({
            user: "detec.azul@gmail.com",
            password: "12345678910"
        }));
    }

    mockLogOut() {
        console.log('button logOut clicked!')
        this.props.dispatch(logOut("detec.azul@gmail.com"));
    }

    isLoggedIn(admin) {
        if (admin.connected) {
            return <p>Admin: {admin.user}</p>
        } else {
            return <p>Nobody is logged in</p>
        }
    }

    render() {
        return(
            <div className="admin-container">
                <button onClick={ this.mockLogIn }> Mock LogIn </button>
                <button onClick={ this.mockLogOut }> Mock LogOut </button>
                { this.isLoggedIn(this.props.admin) }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        admin: state.admin
    };
};

Test01Container = connect(
    mapStateToProps
)(Test01Container);
export default Test01Container;
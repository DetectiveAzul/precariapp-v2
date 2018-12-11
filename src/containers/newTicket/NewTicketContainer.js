import React, { Component } from 'react';
//Components

//Helpers

//Redux
import { connect } from 'react-redux';


class NewTicketContainer extends Component {
    constructor(props) {
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <h1>HelloWorld</h1>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      token: state.token,
    };
  };
  
NewTicketContainer = connect(mapStateToProps)(NewTicketContainer);
export default NewTicketContainer;
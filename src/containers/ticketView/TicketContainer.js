import React, { Component } from 'react';
//Components

//Redux
import { connect } from 'react-redux'

class TicketContainer extends Component {
    render() {
        return <h1>Estoy en TicketContainer id {this.props.reference}</h1>
    }
}

const mapStateToProps = (state) => {
    //HERE I SHOULD LOAD JUST THE ONLY TICKET I NEED AS A PROP
    return {
      token: state.token,
      ticket: state.tickets,
    };
  };
  
TicketContainer = connect(mapStateToProps)(TicketContainer);
export default TicketContainer;
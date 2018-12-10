import React, { Component } from 'react';
//Components

//Helpers
import { individualTicketLoad } from '../../helpers/apiCalls';
//Redux
import { connect } from 'react-redux'

class TicketContainer extends Component {
    componentDidMount() {
        individualTicketLoad(this.props.token, this.props.reference)
            .then((res) => {
                console.log(res);
            })
    }

    render() {
        return <h1>Estoy en TicketContainer id {this.props.reference}</h1>
    }
}

const mapStateToProps = (state, ownProps) => {
    //HERE I SHOULD LOAD JUST THE ONLY TICKET I NEED AS A PROP
    return {
      token: state.token,
      reference: ownProps.reference,
      ticket: state.currentTicket
    };
  };
  
TicketContainer = connect(mapStateToProps)(TicketContainer);
export default TicketContainer;
import React, { Component } from 'react';
//Components

//Helpers
import { individualTicketLoad } from '../../helpers/apiCalls';
//Redux
import { connect } from 'react-redux';
import { loadTicket, removeTicket  } from '../../redux/actions/currentTicket_actions';

class TicketContainer extends Component {
    componentDidMount() {
        individualTicketLoad(this.props.token, this.props.reference)
            .then((res) => {
                this.initialTicketLoad(res.data[0]);
            })
    }

    initialTicketLoad(ticket) {
        this.props.dispatch(loadTicket(ticket));
    }

    componentWillUnmount() {
        this.props.dispatch(removeTicket());
    }



    render() {
        console.log('Console log at render', this.props.ticket);
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
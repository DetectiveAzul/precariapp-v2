import React, { Component } from 'react';
//Components
import TicketView from './components/TicketView';
//Helpers
import { individualTicketLoad } from '../../helpers/apiCalls';
//Redux
import { connect } from 'react-redux';
import { loadTicket, removeTicket  } from '../../redux/actions/currentTicket_actions';

//Styles


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
        return <TicketView ticket={this.props.ticket}/>
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
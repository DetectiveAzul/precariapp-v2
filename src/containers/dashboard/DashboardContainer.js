import React, { Component } from 'react';
//Components
import TicketList from './components/TicketList';
//Redux
import { connect } from 'react-redux';
import { loadTickets } from '../../redux/actions/tickets_actions'
//Helpers
import { initialTicketLoad } from '../../helpers/apiCalls';

class DashboardContainer extends Component {
    componentDidMount() {
        initialTicketLoad(this.props.token)
            .then((res) => {
                this.dispatchingInitialLoadOfTickets(res.data)
            })
    }

    dispatchingInitialLoadOfTickets(tickets) {
        this.props.dispatch(loadTickets(tickets));
    }

    render() {
        return(
            <TicketList tickets= {this.props.tickets} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.token,
      tickets: state.tickets,
    };
  };
  
DashboardContainer = connect(mapStateToProps)(DashboardContainer);
export default DashboardContainer;
  
import React, { Component } from 'react';
//Components
import TicketView from './components/TicketView';
//Helpers
import { individualTicketLoad, updateTicket } from '../../helpers/apiCalls';
import { dateGrabber } from '../../helpers/ticketHelper';
//Redux
import { connect } from 'react-redux';
import { loadTicket, removeTicket  } from '../../redux/actions/currentTicket_actions';

//Styles


class TicketContainer extends Component {
    constructor(props) {
        super(props);
        this.onSubmitUpdateForm = this.onSubmitUpdateForm.bind(this);
    }

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

    onSubmitUpdateForm(event) {
        event.preventDefault();
        //Copying the ticket
        const newUpdate = {
            date: dateGrabber(),
            text: event.target.update.value
        }
        //Adding the update
        const newTicket = Object.assign({}, this.props.ticket, {lastUpdate: dateGrabber()});
        newTicket.updates.push(newUpdate);
        //Api call
        updateTicket(this.props.token, newTicket)
            .then(() => {
                this.initialTicketLoad(newTicket)
            });
    }

    render() {
        if (this.props.ticket) {
            return <TicketView 
                    ticket={this.props.ticket}
                    onSubmitUpdateForm = {this.onSubmitUpdateForm}
                />
        } else {
            return <h1>LOADING</h1>
        }
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
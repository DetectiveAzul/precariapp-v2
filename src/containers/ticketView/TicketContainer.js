//TODO: This ticket needs refactoring!! O___O
import React, { Component } from 'react';
//Components
import TicketView from './components/TicketView';
//Helpers
import { individualTicketLoad, updateTicket } from '../../helpers/apiCalls';
import { dateGrabber } from '../../helpers/ticketHelper';
//Redux
import { connect } from 'react-redux';
import { loadTicket, removeTicket  } from '../../redux/actions/currentTicket_actions';



class TicketContainer extends Component {
    constructor(props) {
        super(props);
        this.onSubmitUpdateForm = this.onSubmitUpdateForm.bind(this);
        this.onSubmitInfoForm = this.onSubmitInfoForm.bind(this);
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

    onSubmitInfoForm(event) {
        event.preventDefault();
        //Create ticket
        const newTicket = Object.assign({}, this.props.ticket, {
            status: event.target.status.value, 
            solicitor: event.target.solicitor.value,
            assigned: event.target.assigned.value,
            subject: event.target.subject.value,
            category: event.target.category.value,
            lastUpdate: dateGrabber()
        });
        //Create Update
        const newUpdate = {
            date: dateGrabber(),
            text: 'Updated ticket information'
        }
        //Push Update
        newTicket.updates.push(newUpdate);
        //Api call
        updateTicket(this.props.token, newTicket)
            .then(() => {
                this.initialTicketLoad(newTicket)
            });
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
        //Empty textbox
        event.target.update.value = "";
    }



    render() {
        if (this.props.ticket) {
            return <TicketView 
                    ticket={this.props.ticket}
                    onSubmitInfoForm = {this.onSubmitInfoForm}
                    onSubmitUpdateForm = {this.onSubmitUpdateForm}
                />
        } else {
            return <h1>LOADING</h1>
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      token: state.token,
      reference: ownProps.reference,
      ticket: state.currentTicket
    };
  };
  
TicketContainer = connect(mapStateToProps)(TicketContainer);
export default TicketContainer;
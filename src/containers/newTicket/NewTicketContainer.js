import React, { Component } from 'react';
//Components
import CreateAndRedirect from './components/CreateAndRedirect';
//Helpers

//Redux
import { connect } from 'react-redux';
import { loadTicket } from '../../redux/actions/currentTicket_actions';


class NewTicketContainer extends Component {
    constructor(props) {
        super(props);

        this.transferToNewPage = this.transferToNewPage.bind(this);
    }

    transferToNewPage(ticket) {
        this.props.dispatch(loadTicket(ticket));
    }

    render() {
        return <CreateAndRedirect token={this.props.token} transferToNewPage={this.transferToNewPage} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      token: state.token,
      ticket: state.currentTicket,
    };
  };
  
NewTicketContainer = connect(mapStateToProps)(NewTicketContainer);
export default NewTicketContainer;
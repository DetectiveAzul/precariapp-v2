import React, { Component } from 'react';
//Components
import { TicketListTest00 } from './components/TicketListTest00.js';
//Redux
import { connect } from 'react-redux';
import { addTicket } from '../../redux/actions/tickets_actions.js';

class TestContainer extends Component {
    constructor(props) {
        super(props);
        this.addMockTicket = this.addMockTicket.bind(this);
    };

    addMockTicket() {
        this.props.dispatch(addTicket({
            customer: 'Test customer',
            subject: 'I like testing things'
        }));
    };

    render() {
        if (this.props.admin.connected) {
            return(
            <div className="TestContainer">
                <button onClick={this.addMockTicket}> Click to Add Test Ticket </button>
                <TicketListTest00 tickets={this.props.tickets} />
            </div>
            )
        } else {
            return(
            <div className="TestContainer">
                <p>You don't have permission to see this!</p>
            </div>
            );
        }
    }
};

const mapStateToProps = state => {
    return {
        admin: state.admin,
        tickets: state.tickets
    };
};

TestContainer = connect(
    mapStateToProps
)(TestContainer);
export default TestContainer;
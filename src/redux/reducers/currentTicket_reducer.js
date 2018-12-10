import {
	LOAD_TICKET,
	REMOVE_TICKET,
} from '../actions/currentTicket_actions.js';

function currentTicket(state = null, action) {
	switch (action.type) {
	case LOAD_TICKET:
		return action.ticket;
	case REMOVE_TICKET:
		return null;
	default:
		return state;
	}
}

export default currentTicket;
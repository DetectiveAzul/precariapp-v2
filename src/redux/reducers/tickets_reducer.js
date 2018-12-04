import {
	ADD_TICKET,
	LOAD_TICKETS,
} from '../actions/tickets_actions.js';

function tickets(state = [], action) {
	switch (action.type) {
	case ADD_TICKET:
		return [...state, action.ticket];
	case LOAD_TICKETS:
		return [action.tickets];
	default:
		return state;
	}
}

export default tickets;
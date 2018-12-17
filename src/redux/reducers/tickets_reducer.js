import {
	ADD_TICKET,
	LOAD_TICKETS,
	REVERSE_ORDER,
} from '../actions/tickets_actions.js';

function tickets(state = [], action) {
	switch (action.type) {
	case ADD_TICKET:
		return [...state, action.ticket];
	case LOAD_TICKETS:
		return [...action.tickets];
	case REVERSE_ORDER:
		const newState = Object.assign({}, state);
		return [...newState.reverse];
	default:
		return state;
	}
}

export default tickets;
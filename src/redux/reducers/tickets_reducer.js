import {
	ADD_TICKET,
} from '../actions/tickets_actions.js';

function tickets(state = [], action) {
	switch (action.type) {
	case ADD_TICKET:
		return [...state, action.ticket];
	default:
		return state;
	}
}

export default tickets;
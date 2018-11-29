import {
	ADD_TICKET,
} from '../actions/ticket_actions.js';

function ticket(state = [], action) {
	switch (action.type) {
	case ADD_TICKET:
		return [...state, action.ticket];
	default:
		return state;
	}
}

export default ticket;
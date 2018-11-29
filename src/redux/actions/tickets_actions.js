//CONSTANTS
export const ADD_TICKET = 'ADD_TICKET';


//ACTIONS

export function addTicket(ticket) {
	return { type: ADD_TICKET, ticket: ticket };
}


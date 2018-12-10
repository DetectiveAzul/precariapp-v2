//CONSTANTS
export const LOAD_TICKET = 'LOAD_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';

//ACTIONS

export function loadTicket(ticket) {
	return { type: LOAD_TICKET, ticket: ticket };
}

export function removeTicket() {
	return { type: REMOVE_TICKET };
}

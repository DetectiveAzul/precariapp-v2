//CONSTANTS
export const ADD_TICKET = 'ADD_TICKET';
export const LOAD_TICKETS = 'LOAD_TICKETS';

//ACTIONS

export function addTicket(ticket) {
	return { type: ADD_TICKET, ticket: ticket };
}

export function loadTickets(tickets) {
	return { type: LOAD_TICKETS, tickets: tickets };
}

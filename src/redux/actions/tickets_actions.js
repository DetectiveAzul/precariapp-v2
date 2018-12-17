//CONSTANTS
export const ADD_TICKET = 'ADD_TICKET';
export const LOAD_TICKETS = 'LOAD_TICKETS';
export const SWAP_FILTER = 'SWAP_FILTER';
export const VISIBILITY_FILTERS = {
	ALL: 'ALL',
	WAITING: 'WAITING',
	FINISHED: 'FINISHED',
	OPEN: 'OPEN',
	PENDING: 'PENDING',
	SOLVED: 'SOLVED',
	CLOSED: 'CLOSED',
}
export const REVERSE_ORDER = 'REVERSE_ORDER'

//ACTIONS

export function addTicket(ticket) {
	return { type: ADD_TICKET, ticket: ticket };
}

export function loadTickets(tickets) {
	return { type: LOAD_TICKETS, tickets: tickets };
}

export function swapFilter(filter) {
	return { type: SWAP_FILTER, filter: filter};
}

export function reverseOrder() {
	return { type: REVERSE_ORDER }
}

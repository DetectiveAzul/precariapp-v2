import { localhostServer, loginEndPoint, ticketEndPoint } from './url';


export const postLogIn = async (credentials) => {
    const payload = { credentials };

    return fetch(localhostServer + loginEndPoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => response.json());
};

export const initialTicketLoad = async (token) => {
    return fetch(localhostServer + ticketEndPoint, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((response) => response.json());

};

export const individualTicketLoad = async(token, reference) => {
    return fetch(localhostServer + ticketEndPoint + `/${reference}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((response) => response.json());
};

export const updateTicket = async(token, ticket) => {
    const payload = {
        ticket
    };
    return fetch(localhostServer + ticketEndPoint + `/${ticket.reference}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
        .then((response) => response.json());
    };


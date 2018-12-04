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
    console.log(token)
    return fetch(localhostServer + ticketEndPoint, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((response) => response.json());

};



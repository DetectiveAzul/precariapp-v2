import { localhostServer, loginEndPoint } from './url';


export const postLogIn = async (credentials) => {
    const payload = { credentials };

    return fetch('http://localhost:8080/api/v2/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => response.json());
};



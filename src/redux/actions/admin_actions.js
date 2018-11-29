//CONSTANTS
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

//ACTIONS

export function logIn(credentials) {
	return { type: LOG_IN, credentials: credentials };
}

export function logOut(admin) {
    return { type: LOG_OUT, admin: admin };
}


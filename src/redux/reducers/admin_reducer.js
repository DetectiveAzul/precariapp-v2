import {
	LOG_IN,
	LOG_OUT,
	AUTH_FAIL
} from '../actions/admin_actions.js';

const defaultState = {
	connected: false,
	admin: undefined,
	authfail: false,
	token: undefined
}

function admin(state = defaultState, action) {
	switch (action.type) {
	case LOG_IN:
		return {
			connected: true,
			admin: action.credentials.email,
			authfail: false,
			token: undefined
		}
	case LOG_OUT:
		return {
			connected: false,
			admin: undefined,
			authfail: false,
			token: undefined, 
		}
	case AUTH_FAIL:
		return {
			connected: false,
			admin: undefined,
			authfail: true,
			token: undefined
		}
	default:
		return state;
	}
}

export default admin;
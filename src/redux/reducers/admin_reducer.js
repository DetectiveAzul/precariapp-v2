import {
	LOG_IN,
	LOG_OUT
} from '../actions/admin_actions.js';

const defaultState = {
	connected: false,
	admin: undefined
}

function admin(state = defaultState, action) {
	switch (action.type) {
	case LOG_IN:
		return {
			connected: true,
			admin: action.credentials.email,
		}
	case LOG_OUT:
		return {
			connected: false,
			admin: undefined,
		}
	default:
		return state;
	}
}

export default admin;
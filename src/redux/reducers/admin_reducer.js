import {
	LOG_IN,
	LOG_OUT
} from '../actions/admin_actions.js';

const defaultState = {
	connected: false,
	user: undefined
}

function admin(state = defaultState, action) {
	switch (action.type) {
	case LOG_IN:
		return {
			connected: true,
			user: action.credentials.user,
		}
	case LOG_OUT:
		return {
			connected: false,
			user: undefined,
		}
	default:
		return state;
	}
}

export default admin;
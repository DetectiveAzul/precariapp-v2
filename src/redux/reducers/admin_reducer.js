import {
	LOG_IN,
	LOG_OUT
} from '../actions/admin_actions.js';

function admin(state = [], action) {
	switch (action.type) {
	case LOG_IN:
		return state;
	case LOG_OUT:
		return state;
	default:
		return state;
	}
}

export default admin;
import { combineReducers } from 'redux';
import tickets from './tickets_reducer.js';
import admin from './admin_reducer.js';
import token from './token_reducer.js';
import currentTicket from './currentTicket_reducer.js';

const precariApp = combineReducers({
    admin,
    token,
    tickets,
    currentTicket,
});

export default precariApp;
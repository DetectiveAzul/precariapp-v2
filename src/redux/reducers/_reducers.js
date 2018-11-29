import { combineReducers } from 'redux';
import ticket from './ticket_reducer.js';
import admin from './admin_reducer.js';

const precariApp = combineReducers({
    admin,
    ticket,
});

export default precariApp;
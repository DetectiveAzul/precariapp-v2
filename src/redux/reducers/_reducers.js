import { combineReducers } from 'redux';
import tickets from './tickets_reducer.js';
import admin from './admin_reducer.js';
import token from './token_reducer.js';

const precariApp = combineReducers({
    admin,
    token,
    tickets,
});

export default precariApp;
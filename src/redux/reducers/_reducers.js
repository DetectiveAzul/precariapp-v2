import { combineReducers } from 'redux';
import tickets from './tickets_reducer.js';
import admin from './admin_reducer.js';

const precariApp = combineReducers({
    admin,
    tickets,
});

export default precariApp;
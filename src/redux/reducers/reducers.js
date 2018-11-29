import { combineReducers } from 'redux';
import ticket from './ticket_reducer.js';

const precariApp = combineReducers({
    ticket,
    
});

export default precariApp;
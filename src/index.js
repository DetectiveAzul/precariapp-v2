import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import precariApp from './redux/reducers/reducers.js';

const store = createStore(
	precariApp,
	window.STATE_FROM_SERVER,
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
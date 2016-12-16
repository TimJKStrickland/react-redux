import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RootReducer from './reducers';
import App from './app';
import thunkMiddleware from 'redux-thunk';

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));


var rootElement = document.getElementById('app-root');

render(
		<Provider store={ store }>
			<App/>
		</Provider>,
		rootElement
);
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RootReducer from './reducers';
import App from './app';

let store = createStore(RootReducer);


var rootElement = document.getElementById('app-root');

render(
		<Provider store={ store }>
			<App/>
		</Provider>,
		rootElement
);
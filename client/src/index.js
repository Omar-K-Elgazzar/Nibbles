import React from 'react';
import ReactDOM from 'react-dom'; // initialize redux
import { Provider } from 'react-redux'; //access that state from anywhere
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './App';
import { thunk } from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>,
    document.getElementById('root')); //connecting to the div id: 'root'    
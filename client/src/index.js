// axios moment redux

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// initalize redux
import { Provider } from 'react-redux'; //access that state from anywhere

import { createStore, applyMiddleware, compose } from 'redux';


ReactDOM.render(<App />, document.getElementById('root')); //connecting to the div id: 'root' 
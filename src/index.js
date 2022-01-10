import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import RootReducer from './Redux/RootReducer/RootReducer';
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(RootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
*/
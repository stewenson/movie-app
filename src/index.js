import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REDUX
import {createStore,  applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import rootReducer from './Redux/rootReducer/rootReducer';
import {Provider} from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
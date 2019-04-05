// Aqui empieza la app

import React from 'react';
import ReactDOM from 'react-dom';
// Provider
import { Provider } from 'react-redux';
// Create store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

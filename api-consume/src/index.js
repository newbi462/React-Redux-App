import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';



import { apiAppReducer } from "./reducers/apiAppReducer";
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  apiAppReducer,
  applyMiddleware(thunk),
  //composeEnhancers(applyMiddleware(logger))
);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

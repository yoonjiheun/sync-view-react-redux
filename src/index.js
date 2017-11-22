import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';

import Login from './containers/Login';
import Browse from './containers/Browse';

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="wrap">
        <Route exact path="/" component={ Login }/>
        <Route path="/browse" component={ Browse }/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

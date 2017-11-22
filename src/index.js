import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { loadRecentVideos, loadUpcomingVideos } from './actions/BrowseAction';
import RootReducer from './reducers/RootReducer.js';

import Navbar from './components/Navbar';
import Login from './containers/Login';
import Browse from './containers/Browse';

import configureStore from './store/configureStore';




let store = configureStore();

// store.dispatch(loadRecentVideos());
// store.dispatch(loadUpcomingVideos());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="wrap">
        <Navbar/>
        <Route exact path="/" component={ Login }/>
        <Route path="/browse" component={ Browse }/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

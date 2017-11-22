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
import { loadRecentVideos, loadUpcomingVideos } from './actions/VideoListAction';
import RootReducer from './reducers/RootReducer.js';

import Navbar from './components/Navbar';
import Login from './containers/Login';
import Browse from './containers/Browse';
import VideoRoom from './containers/VideoRoom';

import configureStore from './stores/configureStore';




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
        <Route path="/video"  component={ VideoRoom }/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

import { combineReducers } from 'redux';
import { loginReducer } from './LoginReducer';
import { browseReducer } from './BrowseReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  browse: browseReducer,
});

export default rootReducer;

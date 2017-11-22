import { combineReducers } from 'redux';
import { loginReducer } from './LoginReducer';
import { videoListReducer } from './VideoListReducer';
import { modalReducer } from './ModalReducer';
import { videoReducer } from './VideoReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  videoList: videoListReducer,
  modal: modalReducer,
  video: videoReducer
});

export default rootReducer;

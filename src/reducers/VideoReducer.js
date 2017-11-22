import initialVideoStore from '../stores/VideoStore';

export function videoReducer(state = initialVideoStore, action) {
  switch(action.type) {
    case 'SELECT_VIDEO':
      return {
        videoObj: action.payload
      }
    default:
      return state;
  }
}

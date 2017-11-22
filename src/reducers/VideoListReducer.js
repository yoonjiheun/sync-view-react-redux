import initialVideoListStore from '../stores/VideoListStore';
import VideoListEnum from '../enums/VideoListEnum';

export function videoListReducer(state = initialVideoListStore, action) {
  switch(action.type) {
    case VideoListEnum.SET_RECENT_VIDEOS:
    return {
      'recentMovies': action.payload,
      'upcomingMovies': state.upcomingMovies,
    }
    case VideoListEnum.SET_UPCOMING_VIDEOS:
    return {
      'recentMovies': state.recentMovies,
      'upcomingMovies': action.payload,
    }
    default:
    return state;
  }
}

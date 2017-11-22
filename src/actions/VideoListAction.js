import TheMovieDB from '../helpers/TheMovieDB';
import VideoListEnum from '../enums/VideoListEnum';

export function loadRecentVideos() {
  return function(dispatch) {
    return TheMovieDB.getRecentMovies().then(movies => {
      dispatch(setRecentVideos(movies));
    }).catch(err => {
      throw(err);
    });
  }
}

export function loadUpcomingVideos() {
  return function(dispatch) {
    return TheMovieDB.getUpcomingMovies().then(movies => {
      dispatch(setUpcomingVideos(movies));
    }).catch(err => {
      throw(err);
    });
  }
}

export function setRecentVideos(videos) {
  return {
    type: VideoListEnum.SET_RECENT_VIDEOS,
    payload: videos
  }
}

export function setUpcomingVideos(videos) {
  return {
    type: VideoListEnum.SET_UPCOMING_VIDEOS,
    payload: videos
  }
}

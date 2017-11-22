import TheMovieDB from '../helpers/TheMovieDB';

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

export function closeModal() {
  return {
    type: 'CLOSE_MODAL',
    payload: false
  };
}

export function selectVideo(id) {
  return {
    type: 'SELECT_VIDEO',
    payload: {
      selectedVideo: id,
      modalActivated: true
    }
  };
}

export function setRecentVideos(videos) {
  return {
    type: 'SET_RECENT_VIDEOS',
    payload: videos
  }
}

export function setUpcomingVideos(videos) {
  return {
    type: 'SET_UPCOMING_VIDEOS',
    payload: videos
  }
}

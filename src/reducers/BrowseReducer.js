export function browseReducer(state, action) {
  switch(action.type) {
    case 'SET_RECENT_VIDEOS':
    return {
      'selectedVideo': state.selectedVideo,
      'recentMovies': action.payload,
      'upcomingMovies': state.upcomingMovies,
      'modalActivated': state.modalActivated
    }
    case 'SET_UPCOMING_VIDEOS':
    return {
      'selectedVideo': state.selectedVideo,
      'recentMovies': state.recentMovies,
      'upcomingMovies': action.payload,
      'modalActivated': state.modalActivated
    }
    case 'SELECT_VIDEO':
    return {
      'selectedVideo': action.payload.selectedVideo,
      'recentMovies': state.recentMovies,
      'upcomingMovies': state.upcomingMovies,
      'modalActivated': action.payload.modalActivated
    }
    case 'CLOSE_MODAL':
    return {
      'selectedVideo': state.selectedVideo,
      'recentMovies': state.recentMovies,
      'upcomingMovies': state.upcomingMovies,
      'modalActivated': action.payload
    }
    default:
    return {
      'selectedVideo': '',
      'recentMovies': [],
      'upcomingMovies':[],
      'modalActivated': false
    };
  }

}

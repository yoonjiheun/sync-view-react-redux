export function browseReducer(state, action) {
  switch(action.type) {
    case 'SET_RECENT_VIDEOS':
    return {
      'selectedVideo': state.selectedVideo,
      'recentMovies': action.payload,
      'upcomingMovies': state.upcomingMovies
    }
    case 'SET_UPCOMING_VIDEOS':
    return {
      'selectedVideo': state.selectedVideo,
      'recentMovies': state.recentMovies,
      'upcomingMovies': action.payload
    }
    default:
    return {
      'selectedVideo': '',
      'recentMovies': [],
      'upcomingMovies':[]
    };
  }

}

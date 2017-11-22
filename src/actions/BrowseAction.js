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

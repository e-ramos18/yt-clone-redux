const INITIAL_STATE = { videolist: [], selectedVideo: null, term: 'nba' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return { ...state, videolist: action.payload }
    case 'FETCH_VIDEO':
      return { ...state, selectedVideo: action.payload }
    default:
      return state
  }
}

import youtube from '../apis/youtube'

// export const fetchStreams = () => async (dispatch) => {
//   const response = await streams.get('/streams')
//   dispatch({ type: 'FETCH_VIDEOS', payload: response.data })
// }

export const fetchVideos = () => async (dispatch, getState) => {
  const term = getState().videos.term
  const response = await youtube.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      q: term,
      key: 'AIzaSyD0tp4_ykic7TcPCgOgTxC_td8GtFRivDY',
    },
  })
  // console.log(response.data.items)
  await dispatch({ type: 'FETCH_VIDEOS', payload: response.data.items })
  dispatch({ type: 'FETCH_VIDEO', payload: response.data.items[0] })
}

export const searchVideo = (term) => async (dispatch) => {
  const response = await youtube.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      q: term,
      key: 'AIzaSyD0tp4_ykic7TcPCgOgTxC_td8GtFRivDY',
    },
  })
  // console.log(response.data.items)
  await dispatch({ type: 'FETCH_VIDEOS', payload: response.data.items })
  dispatch({ type: 'FETCH_VIDEO', payload: response.data.items[0] })
}

export const selectVideo = (video) => async (dispatch) => {
  dispatch({ type: 'FETCH_VIDEO', payload: video })
}

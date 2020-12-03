import { combineReducers } from 'redux'
import videoReducer from './videoReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  videos: videoReducer,
  form: formReducer,
})

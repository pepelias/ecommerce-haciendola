import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './reducers'

export default createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools()
)

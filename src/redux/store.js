import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './reducers'

export default createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools(applyMiddleware(thunk))
)

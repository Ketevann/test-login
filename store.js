import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import reducer from './reducers/auth.jsx'
import { createLogger } from 'redux-logger'
//import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {whoami} from './reducers/auth'

console.log(thunkMiddleware)
const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(
      thunkMiddleware,
      createLogger({collapsed: true})
    )
  )
)

export default store

// Set the auth info at start
store.dispatch(whoami())

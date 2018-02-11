import { combineReducers } from 'redux'
console.log("jeeee")
const rootReducer = combineReducers({
  auth: require('./auth').default
})
export default rootReducer;

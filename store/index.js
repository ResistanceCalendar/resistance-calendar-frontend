import { combineReducers, createStore } from 'redux'
import event from './Event'

const reducer = combineReducers({
  events: event.reducer,
})

const store = createStore(reducer)

export default store

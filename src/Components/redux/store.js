import { combineReducers, createStore } from 'redux'

import ticketReducer from './reducers/ticketReducer'
import sortingReducer from './reducers/sortingReducer'
import stopsFilterReducer from './reducers/stopsFilterReducer'

const reducers = combineReducers({
  tickets: ticketReducer,
  sorting: sortingReducer,
  stopsFilter: stopsFilterReducer,
})

const store = createStore(reducers)

store.subscribe(() => console.log('store state', store.getState()))
export default store

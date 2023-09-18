import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import ticketReducer from './reducers/ticketReducer'
import sortingReducer from './reducers/sortingReducer'
import stopsFilterReducer from './reducers/stopsFilterReducer'
import searchIdReducer from './reducers/searchIdReducer'

const reducers = combineReducers({
  tickets: ticketReducer,
  sorting: sortingReducer,
  stopsFilter: stopsFilterReducer,
  searchId: searchIdReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => console.log('store state', store.getState()))
export default store

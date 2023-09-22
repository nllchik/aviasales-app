import AviaApi from '../../Api/AviaApi'
import setError from '../actions/errorActions'
import { setTickets, toggleLoading } from '../actions/ticketActions'

import { fetchSearchId } from './searchIdReducer'

const initialState = {
  allTickets: [],
  isLoading: true,
}

export default function ticketReducer(state = initialState, actions = {}) {
  switch (actions.type) {
    case 'SET_TICKETS': {
      return { ...state, allTickets: [...state.allTickets, ...actions.tickets] }
    }
    case 'TOGGLE-LOADING': {
      return { ...state, isLoading: actions.loading }
    }
    default:
      return state
  }
}

export const fetchTickets = (id) => async (dispatch) => {
  const aviaApi = new AviaApi()

  const subscribe = async (searchId) => {
    if (!navigator.onLine) {
      dispatch(toggleLoading(false))
      dispatch(setError({ code: 'ERR_INTERNET_DISCONNECTED', message: 'Отсутствует подключение к интернету' }))
      return
    }

    try {
      const response = await aviaApi.getTickets(searchId, dispatch)

      if (response.status === 500) {
        await subscribe(searchId)
      } else if (response.status !== 200) {
        subscribe(fetchSearchId)
      } else {
        const tickets = await response.json()
        dispatch(setTickets(tickets.tickets))
        if (!tickets.stop) {
          subscribe(searchId)
        }
        if (tickets.stop) {
          dispatch(toggleLoading(false))
        }
      }
    } catch (error) {
      dispatch(toggleLoading(false))
      dispatch(setError({ code: error.code, message: error.message }))
    }
  }
  subscribe(id).catch((error) => {
    dispatch(toggleLoading(false))
    dispatch(setError({ code: error.code, message: error.message }))
  })
}

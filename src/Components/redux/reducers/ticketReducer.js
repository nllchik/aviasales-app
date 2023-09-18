import AviaApi from '../../../Api/AviaApi'
import { setTickets, toggleLoading } from '../actions/ticketActions'

const initialState = {
  allTickets: [],
  filteredTickets: [],
  isLoading: true,
}

export default function ticketReducer(state = initialState, actions = {}) {
  const filters = {
    // eslint-disable-next-line no-unused-vars
    ALL: (ticket) => true,
    'NO-TRANSFERS': (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0,
    'ONE-TRANSFER': (ticket) => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1,
    'TWO-TRANSFERS': (ticket) => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2,
    'THREE-TRANSFERS': (ticket) => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3,
  }
  switch (actions.type) {
    case 'SET_TICKETS': {
      return { ...state, allTickets: [...state.allTickets, ...actions.tickets] }
    }
    case 'SORT_BY_PRICE': {
      return {
        ...state,
        allTickets: [...state.allTickets].sort((a, b) => a.price - b.price),
        filteredTickets: [...state.filteredTickets].sort((a, b) => a.price - b.price),
      }
    }
    case 'SORT_BY_FASTEST': {
      return {
        ...state,
        allTickets: [...state.allTickets].sort(
          (a, b) =>
            a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
            b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        ),
        filteredTickets: [...state.filteredTickets].sort(
          (a, b) =>
            a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
            b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        ),
      }
    }
    case 'SORT_BY_OPTIMAL': {
      return {
        ...state,
        allTickets: [...state.allTickets].sort(
          (a, b) =>
            a.price +
            a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
            (b.price + b.segments.reduce((acc, segment) => acc + segment.duration, 0))
        ),
        filteredTickets: [...state.filteredTickets].sort(
          (a, b) =>
            a.price +
            a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
            (b.price + b.segments.reduce((acc, segment) => acc + segment.duration, 0))
        ),
      }
    }
    case 'ADD-FILTER': {
      return {
        ...state,
        filteredTickets: [...state.filteredTickets, ...state.allTickets.filter(filters[actions.filterType])],
      }
    }
    case 'REMOVE-FILTER': {
      return {
        ...state,
        filteredTickets: [...state.filteredTickets.filter((ticket) => !filters[actions.filterType](ticket))],
      }
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
    const response = await aviaApi.getTickets(searchId)

    if (response.status === 500) {
      await subscribe(searchId)
    } else if (response.status !== 200) {
      setTimeout(() => subscribe(searchId), 1000)
    } else {
      const tickets = await response.json()
      console.log('Received tickets:', tickets)
      dispatch(setTickets(tickets.tickets))
      if (!tickets.stop) {
        subscribe(searchId)
      }
      if (tickets.stop) {
        dispatch(toggleLoading(false))
      }
    }
  }
  subscribe(id)
}

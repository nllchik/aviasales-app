const initialState = {
  allTickets: [],
  filteredTickets: [],
}

export default function ticketReducer(state = initialState, actions = {}) {
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
    case 'ADD-ALL-FILTER': {
      return {
        ...state,
        filteredTickets: state.allTickets,
      }
    }
    case 'ADD-NO-TRANSFERS-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets,
          ...state.allTickets.filter(
            (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
          ),
        ],
      }
    }
    case 'ADD-ONE-TRANSFER-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets,
          ...state.allTickets.filter(
            (ticket) => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
          ),
        ],
      }
    }
    case 'ADD-TWO-TRANSFERS-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets,
          ...state.allTickets.filter(
            (ticket) => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
          ),
        ],
      }
    }
    case 'ADD-THREE-TRANSFERS-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets,
          ...state.allTickets.filter(
            (ticket) => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
          ),
        ],
      }
    }
    case 'REMOVE-ALL-FILTER': {
      return {
        ...state,
        filteredTickets: [],
      }
    }
    case 'REMOVE-NO-TRANSFERS-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets.filter(
            (ticket) => !(ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0)
          ),
        ],
      }
    }
    case 'REMOVE-ONE-TRANSFER-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets.filter(
            (ticket) => !(ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1)
          ),
        ],
      }
    }
    case 'REMOVE-TWO-TRANSFERS-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets.filter(
            (ticket) => !(ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2)
          ),
        ],
      }
    }
    case 'REMOVE-THREE-TRANSFERS-FILTER': {
      return {
        ...state,
        filteredTickets: [
          ...state.filteredTickets.filter(
            (ticket) => !(ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3)
          ),
        ],
      }
    }
    default:
      return state
  }
}

// export const fetchTickets = () => async (dispatch) => {
//   const apiTickets = new AviaApi()
//   const subscribe = async (searchId) => {
//     const response = await apiTickets.getTickets(searchId)
//     if (response.status === 500) {
//       await subscribe(searchId)
//     } else if (response.status !== 200) {
//       setTimeout(() => subscribe(searchId), 1000)
//     } else {
//       const tickets = await response.json()
//       dispatch(setTickets(tickets))
//       if (!tickets.stop) {
//         subscribe(searchId)
//       }
//     }
//   }
//   subscribe(id)
// }

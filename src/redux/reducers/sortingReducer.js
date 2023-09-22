const initialState = {
  price: false,
  fastest: false,
  optimal: false,
}

const sortingReducer = (state = initialState, actions = {}) => {
  switch (actions.type) {
    case 'SORT_BY_PRICE': {
      return { ...state, price: true, fastest: false, optimal: false }
    }
    case 'SORT_BY_FASTEST': {
      return { ...state, price: false, fastest: true, optimal: false }
    }
    case 'SORT_BY_OPTIMAL': {
      return { ...state, price: false, fastest: false, optimal: true }
    }
    default:
      return state
  }
}

export default sortingReducer

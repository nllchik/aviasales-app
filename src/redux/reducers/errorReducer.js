const initialState = {
  error: null,
}

const errorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET-ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}

export default errorReducer

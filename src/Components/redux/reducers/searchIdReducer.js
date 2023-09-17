const initialState = null

const searchReducer = (state = initialState, actions = {}) => {
  switch (actions.type) {
    case 'GET-ID': {
      return actions.searchId
    }
    default:
      return state
  }
}

export default searchReducer

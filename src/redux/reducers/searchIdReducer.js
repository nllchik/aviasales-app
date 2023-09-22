import AviaApi from '../../Api/AviaApi'
import setSearchId from '../actions/searchIdActions'

const searchIdReducer = (state = '', actions = {}) => {
  switch (actions.type) {
    case 'GET_ID': {
      return { id: actions.payload }
    }
    default:
      return state
  }
}

export default searchIdReducer

export const fetchSearchId = () => async (dispatch) => {
  const apiTickets = new AviaApi()
  apiTickets.getSearchId(dispatch).then((id) => {
    dispatch(setSearchId(id))
  })
}

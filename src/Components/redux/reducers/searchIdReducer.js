import AviaApi from '../../../Api/AviaApi'

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

const setSearchId = (payload) => ({
  type: 'GET_ID',
  payload,
})

export const fetchSearchId = () => async (dispatch) => {
  const apiTickets = new AviaApi()
  apiTickets.getSearchId().then((id) => {
    console.log('Received ID:', id)
    dispatch(setSearchId(id))
  })
}

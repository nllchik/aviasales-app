import setError from '../redux/actions/errorActions'

export default class AviaApi {
  #apiBase = 'https://aviasales-test-api.kata.academy/'

  getSearchId = async (dispatch) => {
    try {
      const response = await fetch(`${this.#apiBase}search`)

      if (!response.ok) {
        const message =
          response.status >= 400 && response.status < 500 ? 'Клиентская ошибка при получении ID' : response.statusText
        const error = new Error(message)
        error.code = response.status
        dispatch(setError({ code: error.code, message: error.message }))
        throw error
      }
      const body = await response.json()
      return body.searchId
    } catch (error) {
      dispatch(setError({ code: error.code, message: error.message }))
      throw error
    }
  }

  getTickets = async (searchId, dispatch) => {
    try {
      const response = await fetch(`${this.#apiBase}tickets?searchId=${searchId}`)
      if (!response.ok && response.status !== 500) {
        const message =
          response.status >= 400 && response.status < 500
            ? 'Клиентская ошибка при получении билетов'
            : response.statusText
        const error = new Error(message)
        error.code = response.status
        dispatch(setError({ code: error.code, message: error.message }))
        throw error
      }
      return response
    } catch (error) {
      dispatch(setError({ code: error.code, message: error.message }))
      throw error
    }
  }
}

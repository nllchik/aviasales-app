export default class AviaApi {
  #apiBase = 'https://aviasales-test-api.kata.academy/'

  getSearchId = async () => {
    const response = await fetch(`${this.#apiBase}search`)
    const body = await response.json()
    return body.searchId
  }

  getTickets = async (searchId) => {
    const response = await fetch(`${this.#apiBase}tickets?searchId=${searchId}`)
    return response
  }
}

export const setTickets = (tickets) => ({ type: 'SET_TICKETS', tickets })

export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE',
})

export const sortByFastest = () => ({
  type: 'SORT_BY_FASTEST',
})

export const sortByOptimal = () => ({
  type: 'SORT_BY_OPTIMAL',
})

export const addFilter = (filterType) => ({
  type: 'ADD-FILTER',
  filterType,
})

export const removeFilter = (filterType) => ({
  type: 'REMOVE-FILTER',
  filterType,
})

export const toggleLoading = (loading) => ({
  type: 'TOGGLE-LOADING',
  loading,
})

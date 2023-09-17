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

export const addAllFilter = () => ({
  type: 'ADD-ALL-FILTER',
})

export const addNoTransfersFilter = () => ({
  type: 'ADD-NO-TRANSFERS-FILTER',
})

export const addOneTransferFilter = () => ({
  type: 'ADD-ONE-TRANSFER-FILTER',
})

export const addTwoTransfersFilter = () => ({
  type: 'ADD-TWO-TRANSFERS-FILTER',
})

export const addThreeTransfersFilter = () => ({
  type: 'ADD-THREE-TRANSFERS-FILTER',
})

export const removeAllFilter = () => ({
  type: 'REMOVE-ALL-FILTER',
})

export const removeNoTransfersFilter = () => ({
  type: 'REMOVE-NO-TRANSFERS-FILTER',
})

export const removeOneTransferFilter = () => ({
  type: 'REMOVE-ONE-TRANSFER-FILTER',
})

export const removeTwoTransfersFilter = () => ({
  type: 'REMOVE-TWO-TRANSFERS-FILTER',
})

export const removeThreeTransfersFilter = () => ({
  type: 'REMOVE-THREE-TRANSFERS-FILTER',
})

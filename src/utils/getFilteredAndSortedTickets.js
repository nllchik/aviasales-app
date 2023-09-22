const getFilteredAndSortedTickets = (tickets, stopsFilter, sorting) => {
  const filters = {
    // eslint-disable-next-line no-unused-vars
    ALL: (ticket) => true,
    'NO-TRANSFERS': (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0,
    'ONE-TRANSFER': (ticket) => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1,
    'TWO-TRANSFERS': (ticket) => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2,
    'THREE-TRANSFERS': (ticket) => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3,
  }

  let filteredTickets = []
  const activeFilters = stopsFilter.filter((filter) => filter.checked).map((filter) => filter.id)

  if (activeFilters.includes('ALL')) {
    filteredTickets = [...tickets]
  } else {
    activeFilters.forEach((filter) => {
      filteredTickets.push(...tickets.filter(filters[filter]))
    })
  }

  const sortFunctions = {
    price: (a, b) => a.price - b.price,
    fastest: (a, b) =>
      a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
      b.segments.reduce((acc, segment) => acc + segment.duration, 0),
    optimal: (a, b) =>
      a.price +
      a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
      (b.price + b.segments.reduce((acc, segment) => acc + segment.duration, 0)),
  }

  const currentSorting = Object.keys(sorting).find((key) => sorting[key])
  const sortFunction = sortFunctions[currentSorting]
  filteredTickets.sort(sortFunction)
  return filteredTickets
}
export default getFilteredAndSortedTickets

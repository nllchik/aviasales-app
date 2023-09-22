import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import TicketCard from '../TicketCard'
import NotFound from '../NotFound'
import getFilteredAndSortedTickets from '../../utils/getFilteredAndSortedTickets'

import classes from './TicketList.module.scss'

function TicketList() {
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)
  const { isLoading, allTickets } = useSelector((state) => state.tickets)
  const stopsFilter = useSelector((state) => state.stopsFilter)
  const sorting = useSelector((state) => state.sorting)

  const displayedTickets = getFilteredAndSortedTickets(allTickets, stopsFilter, sorting).slice(0, visibleTicketsCount)

  const showMoreTickets = () => {
    setVisibleTicketsCount((prevVisibleTicketsCount) => prevVisibleTicketsCount + 5)
  }

  const ticketItems = displayedTickets.map((ticket) => {
    const [departure, arrival] = ticket.segments
    const id = `${departure.origin}-${arrival.destination}-${departure.date}`
    return <TicketCard key={id} ticketData={ticket} />
  })

  const loadMoreButton = isLoading ? null : (
    <button type="button" onClick={showMoreTickets} className={classes.button}>
      Показать еще 5 билетов
    </button>
  )

  return (
    <>
      {displayedTickets.length === 0 && !isLoading ? <NotFound /> : ticketItems}
      {loadMoreButton}
    </>
  )
}

export default TicketList

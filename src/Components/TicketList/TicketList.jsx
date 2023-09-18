import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import uniqid from 'uniqid'

import TicketCard from '../TicketCard'
import NotFound from '../NotFound'

import classes from './TicketList.module.scss'

function TicketList() {
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)
  const { allTickets, filteredTickets, isLoading } = useSelector((state) => state.tickets)
  const filters = useSelector((state) => state.stopsFilter)

  const allFiltersSelected = filters.find((filter) => filter.id === 'ALL').checked
  const otherFiltersSelected = filters.filter((filter) => filter.name !== 'ALL').some((filter) => filter.checked)

  const displayedTickets =
    otherFiltersSelected && !allFiltersSelected
      ? filteredTickets.slice(0, visibleTicketsCount)
      : allTickets.slice(0, visibleTicketsCount)

  const showMoreTickets = () => {
    setVisibleTicketsCount((prevVisibleTicketsCount) => prevVisibleTicketsCount + 5)
  }

  const ticketItems = displayedTickets.map((ticket) => <TicketCard key={uniqid()} ticketData={ticket} />)

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

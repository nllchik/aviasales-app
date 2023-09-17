import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import uniqid from 'uniqid'

import TicketCard from '../TicketCard'

import classes from './TicketList.module.scss'

function TicketList() {
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)
  const { allTickets, filteredTickets } = useSelector((state) => state.tickets)
  const { displayFiltered } = useSelector((state) => state.stopsFilter)

  const displayedTickets = displayFiltered
    ? filteredTickets.slice(0, visibleTicketsCount)
    : allTickets.slice(0, visibleTicketsCount)

  const loadMoreTickets = () => {
    setVisibleTicketsCount((prevVisibleTicketsCount) => prevVisibleTicketsCount + 5)
  }

  const ticketListItems = displayedTickets.map((ticket) => <TicketCard key={uniqid()} ticketData={ticket} />)

  return (
    <>
      {ticketListItems}
      <button type="button" onClick={loadMoreTickets} className={classes.button}>
        Показать еще 5 билетов
      </button>
    </>
  )
}

export default TicketList

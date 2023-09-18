import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSearchId } from '../redux/reducers/searchIdReducer'
import { fetchTickets } from '../redux/reducers/ticketReducer'
import Header from '../Header'
import StopsFilter from '../StopsFilter'
import Sorting from '../Sorting'
import TicketList from '../TicketList'
import Loading from '../Loading'

import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const { id } = useSelector((state) => state.searchId)
  const isLoading = useSelector((state) => state.tickets.isLoading)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  useEffect(() => {
    if (id !== undefined) dispatch(fetchTickets(id))
  }, [id])

  const loading = isLoading ? <Loading /> : null

  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <StopsFilter />
        </div>
        <div className={classes.rightColumn}>
          <Sorting />
          {loading}
          <TicketList />
        </div>
      </div>
    </main>
  )
}

export default App

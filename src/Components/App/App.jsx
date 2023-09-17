import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SpinnerDotted } from 'spinners-react'

import { setTickets } from '../redux/actions/ticketActions'
import Header from '../Header'
import StopsFilter from '../StopsFilter'
import Sorting from '../Sorting'
import TicketList from '../TicketList'
import AviaApi from '../../Api/AviaApi'

import classes from './App.module.scss'

function App() {
  const aviaApi = new AviaApi()

  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const { tickets } = useSelector((state) => state)

  useEffect(() => {
    const fetchData = async () => {
      const searchId = await aviaApi.getSearchId()
      const response = await aviaApi.getTickets(searchId)
      const data = await response.json()
      dispatch(setTickets(data.tickets))
    }

    fetchData()
  }, [])

  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <StopsFilter />
        </div>
        <div className={classes.rightColumn}>
          <Sorting />
          <SpinnerDotted color="#2196F3" />
          <TicketList />
        </div>
      </div>
    </main>
  )
}

export default App

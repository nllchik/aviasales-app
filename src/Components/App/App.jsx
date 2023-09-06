import React from 'react'

import Header from '../Header'
import StopsFilter from '../StopsFilter'
import Sorting from '../Sorting'
import TicketList from '../TicketList'

import classes from './App.module.scss'

function App() {
  return (
    <main className={classes.main}>
      <Header />
      <StopsFilter />
      <Sorting />
      <TicketList />
    </main>
  )
}

export default App

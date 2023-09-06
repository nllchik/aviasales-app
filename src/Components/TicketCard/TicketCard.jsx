import React from 'react'

import Logo from '../../assets/images/testAirlines.png'

import classes from './TicketCard.module.scss'

function TicketCard() {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <h2 className={classes.ticket__price}>13 400 Р</h2>
        <img className={classes.ticket__airline} src={Logo} alt="AeroCompany" />
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__wayInfo}>
          <div className={classes.ticket__airports}>MOW – HKT</div>
          <div className={classes.ticket__time}>10:45 – 08:00</div>
        </div>
        <div className={classes.ticket__timeInfo}>
          <div className={classes.ticket__inWay}>В пути</div>
          <div className={classes.ticket__totalTime}>21ч 15м</div>
        </div>
        <div className={classes.ticket__transferInfo}>
          <div className={classes.ticket__transfer}>2 пересадки</div>
          <div className={classes.ticket__transferAirports}>HKG, JNB</div>
        </div>
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__wayInfo}>
          <div className={classes.ticket__airports}>MOW – HKT</div>
          <div className={classes.ticket__time}>11:20 – 00:50</div>
        </div>
        <div className={classes.ticket__timeInfo}>
          <div className={classes.ticket__inWay}>В пути</div>
          <div className={classes.ticket__totalTime}>13ч 30м</div>
        </div>
        <div className={classes.ticket__transferInfo}>
          <div className={classes.ticket__transfer}>1 пересадка</div>
          <div className={classes.ticket__transferAirports}>HKG</div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard

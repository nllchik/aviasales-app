import React from 'react'

import classes from './TicketCard.module.scss'

function TicketCard({ ticketData }) {
  const { carrier, price, segments } = ticketData

  const formattedPrice = price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })

  const [departure, arrival] = segments

  const getTotalTime = (segment) => {
    const totalTime = segment.duration
    const hours = Math.floor(totalTime / 60)
    const minutes = Math.round((totalTime % 60) / 5) * 5
    return `${hours}ч ${minutes}м`
  }

  const getTransfers = (segment) => {
    const { stops } = segment
    if (stops.length === 0) {
      return '-'
    }
    return stops.join(', ')
  }

  const getTransfersText = (segment) => {
    const { stops } = segment
    if (stops.length === 0) {
      return 'Без пересадок'
    }
    if (stops.length === 1) {
      return '1 пересадка'
    }
    if (stops.length === 2) {
      return '2 пересадки'
    }
    if (stops.length === 3) {
      return '3 пересадки'
    }
    return `${stops.length} пересадок`
  }

  const getTimeRange = (segment) => {
    function formatTime(date) {
      const hours = String(date.getHours()).padStart(2, '0')
      let minutes = String(date.getMinutes())
      minutes = Math.floor(minutes / 5) * 5
      minutes = String(minutes).padStart(2, '0')
      return `${hours}:${minutes}`
    }

    const startTime = new Date(segment.date)
    const startTimeString = formatTime(startTime)

    const endTime = new Date(startTime)
    endTime.setMinutes(endTime.getMinutes() + segment.duration)
    const endTimeString = formatTime(endTime)

    return `${startTimeString} - ${endTimeString}`
  }

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <h2 className={classes.ticket__price}>{formattedPrice}</h2>
        <img className={classes.ticket__airline} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="AeroCompany" />
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__wayInfo}>
          <div className={classes.ticket__airports}>
            {departure.origin} – {departure.destination}
          </div>
          <div className={classes.ticket__time}>{getTimeRange(departure)}</div>
        </div>
        <div className={classes.ticket__timeInfo}>
          <div className={classes.ticket__inWay}>В пути</div>
          <div className={classes.ticket__totalTime}>{getTotalTime(departure)}</div>
        </div>
        <div className={classes.ticket__transferInfo}>
          <div className={classes.ticket__transfer}>{getTransfersText(departure)}</div>
          <div className={classes.ticket__transferAirports}>{getTransfers(departure)}</div>
        </div>
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__wayInfo}>
          <div className={classes.ticket__airports}>
            {arrival.origin} – {arrival.destination}
          </div>
          <div className={classes.ticket__time}>{getTimeRange(arrival)}</div>
        </div>
        <div className={classes.ticket__timeInfo}>
          <div className={classes.ticket__inWay}>В пути</div>
          <div className={classes.ticket__totalTime}>{getTotalTime(arrival)}</div>
        </div>
        <div className={classes.ticket__transferInfo}>
          <div className={classes.ticket__transfer}>{getTransfersText(arrival)}</div>
          <div className={classes.ticket__transferAirports}>{getTransfers(arrival)}</div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortByPrice, sortByFastest, sortByOptimal } from '../../redux/actions/ticketActions'

import classes from './Sorting.module.scss'

function Sorting() {
  const dispatch = useDispatch()
  const { price, fastest, optimal } = useSelector((state) => state.sorting)

  const handleSortByPrice = () => {
    dispatch(sortByPrice())
  }

  const handleSortByFastest = () => {
    dispatch(sortByFastest())
  }

  const handleSortByOptimal = () => {
    dispatch(sortByOptimal())
  }

  return (
    <div className={classes.sorting}>
      <button
        className={`${classes.sorting__button} ${price ? classes.active : ''}`}
        type="button"
        data-tab="cheap"
        onClick={handleSortByPrice}
      >
        <span className={classes.sorting__text}>Самый дешевый</span>
      </button>
      <button
        className={`${classes.sorting__button} ${fastest ? classes.active : ''}`}
        type="button"
        data-tab="fast"
        onClick={handleSortByFastest}
      >
        <span className={classes.sorting__text}>Самый быстрый</span>
      </button>
      <button
        className={`${classes.sorting__button} ${optimal ? classes.active : ''}`}
        type="button"
        data-tab="optimal"
        onClick={handleSortByOptimal}
      >
        <span className={classes.sorting__text}>Оптимальный</span>
      </button>
    </div>
  )
}

export default Sorting

import React from 'react'

import classes from './Sorting.module.scss'

function Sorting() {
  return (
    <div className={classes.sorting}>
      <button className={classes.sorting__button} type="button" data-tab="cheap">
        <span className={classes.sorting__text}>Самый дешевый</span>
      </button>
      <button className={classes.sorting__button} type="button" data-tab="fast">
        <span className={classes.sorting__text}>Самый быстрый</span>
      </button>
      <button className={classes.sorting__button} type="button" data-tab="optimal">
        <span className={classes.sorting__text}>Оптимальный</span>
      </button>
    </div>
  )
}

export default Sorting

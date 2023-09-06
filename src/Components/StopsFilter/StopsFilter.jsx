import React from 'react'

import classes from './StopsFilter.module.scss'

function StopsFilter() {
  return (
    <div className={classes.filter}>
      <h2 className={classes.filter__title}>Количество пересадок</h2>
      <div className={classes.filter__checkboxes}>
        <label className={classes.check}>
          <input className={classes.check__input} type="checkbox" />
          <span className={classes.check__box} />
          <span className={classes.check__text}>Все</span>
        </label>
        <label className={classes.check}>
          <input className={classes.check__input} type="checkbox" />
          <span className={classes.check__box} />
          <span className={classes.check__text}>Без пересадок</span>
        </label>
        <label className={classes.check}>
          <input className={classes.check__input} type="checkbox" />
          <span className={classes.check__box} />
          <span className={classes.check__text}>1 пересадка</span>
        </label>
        <label className={classes.check}>
          <input className={classes.check__input} type="checkbox" />
          <span className={classes.check__box} />
          <span className={classes.check__text}>2 пересадки</span>
        </label>
        <label className={classes.check}>
          <input className={classes.check__input} type="checkbox" />
          <span className={classes.check__box} />
          <span className={classes.check__text}>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

export default StopsFilter

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import toggleChecked from '../../redux/actions/stopsFilterActions'
import { addFilter, removeFilter } from '../../redux/actions/ticketActions'

import classes from './StopsFilter.module.scss'

function StopsFilter() {
  const dispatch = useDispatch()

  const filters = useSelector((state) => state.stopsFilter)

  function toggle(id, checked) {
    dispatch(toggleChecked(id))
    if (checked) {
      dispatch(removeFilter(id))
    } else {
      dispatch(addFilter(id))
    }
  }

  const renderCheckbox = (value, checked, id) => (
    <label className={classes.check} key={value}>
      <input className={classes.check__input} type="checkbox" onChange={() => toggle(id, checked)} checked={checked} />
      <span className={classes.check__box} />
      <span className={classes.check__text}>{value}</span>
    </label>
  )

  const filters1 = filters.map(({ value, checked, id }) => renderCheckbox(value, checked, id))

  return (
    <div className={classes.filter}>
      <h2 className={classes.filter__title}>Количество пересадок</h2>
      <div className={classes.filter__checkboxes}>{filters1}</div>
    </div>
  )
}

export default StopsFilter

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  allTransfersToggle,
  noTransfersToggle,
  oneTransferToggle,
  twoTransfersToggle,
  threeTransfersToggle,
  displayFilteredToggle,
} from '../redux/actions/stopsFilterActions'
import {
  addAllFilter,
  addNoTransfersFilter,
  addOneTransferFilter,
  addTwoTransfersFilter,
  addThreeTransfersFilter,
  removeAllFilter,
  removeNoTransfersFilter,
  removeOneTransferFilter,
  removeTwoTransfersFilter,
  removeThreeTransfersFilter,
} from '../redux/actions/ticketActions'

import classes from './StopsFilter.module.scss'

function StopsFilter() {
  const dispatch = useDispatch()

  const { all, noTransfer, oneTransfer, twoTransfers, threeTransfers } = useSelector((state) => state.stopsFilter)

  const filtersOptions = [
    {
      label: 'Все',
      checked: all,
      onChange: () => {
        dispatch(allTransfersToggle())
        dispatch(displayFilteredToggle())
        if (all) {
          dispatch(removeAllFilter())
        } else {
          dispatch(addAllFilter())
        }
      },
    },
    {
      label: 'Без пересадок',
      checked: noTransfer,
      onChange: () => {
        dispatch(noTransfersToggle())
        dispatch(displayFilteredToggle())
        if (noTransfer) {
          dispatch(removeNoTransfersFilter())
        } else {
          dispatch(addNoTransfersFilter())
        }
      },
    },
    {
      label: '1 пересадка',
      checked: oneTransfer,
      onChange: () => {
        dispatch(oneTransferToggle())
        dispatch(displayFilteredToggle())
        if (oneTransfer) {
          dispatch(removeOneTransferFilter())
        } else {
          dispatch(addOneTransferFilter())
        }
      },
    },
    {
      label: '2 пересадки',
      checked: twoTransfers,
      onChange: () => {
        dispatch(twoTransfersToggle())
        dispatch(displayFilteredToggle())
        if (twoTransfers) {
          dispatch(removeTwoTransfersFilter())
        } else {
          dispatch(addTwoTransfersFilter())
        }
      },
    },
    {
      label: '3 пересадки',
      checked: threeTransfers,
      onChange: () => {
        dispatch(threeTransfersToggle())
        dispatch(displayFilteredToggle())
        if (threeTransfers) {
          dispatch(removeThreeTransfersFilter())
        } else {
          dispatch(addThreeTransfersFilter())
        }
      },
    },
  ]

  const renderCheckbox = (label, checked, onChange) => (
    <label className={classes.check} key={label}>
      <input className={classes.check__input} type="checkbox" onChange={onChange} checked={checked} />
      <span className={classes.check__box} />
      <span className={classes.check__text}>{label}</span>
    </label>
  )

  const filters = filtersOptions.map(({ label, checked, onChange }) => renderCheckbox(label, checked, onChange))

  return (
    <div className={classes.filter}>
      <h2 className={classes.filter__title}>Количество пересадок</h2>
      <div className={classes.filter__checkboxes}>{filters}</div>
    </div>
  )
}

export default StopsFilter

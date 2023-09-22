import React from 'react'
import { useSelector } from 'react-redux'

import classes from './ErrorHandler.module.scss'

export default function ErrorHandler() {
  const error = useSelector((state) => state.serverError.error)

  if (!error) {
    return null
  }

  return (
    <div className={classes.error}>
      <p className={classes.error__message}>Произошла ошибка. Пожалуйста, попробуйте еще раз позднее.</p>
      <p className={classes.__details}>
        Код ошибки: {error.code} | {error.message}
      </p>
    </div>
  )
}

import React from 'react'

import Logo from '../../assets/images/logo.png'

import classes from './Header.module.scss'

function Header() {
  return (
    <header>
      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
      </div>
    </header>
  )
}

export default Header

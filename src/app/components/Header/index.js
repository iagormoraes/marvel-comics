import React from 'react'
import styles from './Header.module.css'

import Logo from '../Logo'

function HeaderComponent({ children }) {
  return (
    <section className={styles.container}>
      <Logo className="mb-16" />
      {children}
    </section>
  )
}

const Header = React.memo(HeaderComponent)

export default Header

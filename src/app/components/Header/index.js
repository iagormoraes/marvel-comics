import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

import Logo from '../Logo'

function HeaderComponent({ children }) {
  const spaceMargin = 16
  const [shadowHeight, setShadowHeight] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    setShadowHeight(container.clientHeight + spaceMargin)
  }, [])

  return (
    <section style={{ height: shadowHeight }}>
      <section ref={containerRef} className={styles.container}>
        <Logo className="mb-3" />
        {children}
      </section>
    </section>
  )
}

const Header = React.memo(HeaderComponent)

export default Header

import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

import Logo from '../Logo'

function HeaderComponent({ children }) {
  const spaceMargin = 16
  const [shadowHeight, setShadowHeight] = useState(0)
  const containerRef = useRef(null)

  const handleCalculateHeight = useCallback(() => {
    const container = containerRef.current

    setShadowHeight(container.clientHeight + spaceMargin)
  }, [])

  useEffect(() => {
    handleCalculateHeight()

    window.addEventListener('load', handleCalculateHeight)

    return () => {
      window.removeEventListener('load', handleCalculateHeight)
    }
  }, [handleCalculateHeight])

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

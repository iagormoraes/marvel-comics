import React, { useMemo } from 'react'
import styles from './Logo.module.css'

import LogoAsset from '../../../assets/images/marvel_logo.png'

function LogoComponent({ ...containerProps }) {
  const className = useMemo(() => {
    let classNames = styles.image

    if (containerProps.className) {
      classNames += ` ${containerProps.className}`
    }
    return classNames
  }, [containerProps.className])

  return <img className={className} src={LogoAsset} alt="Marvel logo" />
}

const Logo = React.memo(LogoComponent)

export default Logo

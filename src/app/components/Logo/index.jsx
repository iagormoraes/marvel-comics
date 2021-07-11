import React, { useMemo } from 'react'
import styles from './Logo.module.css'

import { mergeClassNames } from '../../../helpers/styles/mergeClassNames'

import LogoAsset from '../../../assets/images/marvel_logo.png'

function LogoComponent({ ...containerProps }) {
  const className = useMemo(
    () => mergeClassNames(styles.image, containerProps.className),
    [containerProps.className]
  )

  return <img className={className} src={LogoAsset} alt="Marvel logo" />
}

const Logo = React.memo(LogoComponent)

export default Logo

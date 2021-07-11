import React, { useMemo, useState } from 'react'
import styles from './LikeButton.module.css'

import { mergeClassNames } from '../../../helpers/styles/mergeClassNames'

import LikeOnAsset from '../../../assets/images/heart_on.png'
import LikeOffAsset from '../../../assets/images/heart_off.png'
import LikeHoverAsset from '../../../assets/images/heart_hover.png'

function LikeButtonComponent({ like, onClick, ...props }) {
  const [isHover, setIsHover] = useState(false)

  const className = useMemo(() => mergeClassNames(styles.container, props.className), [props.className])

  const likeAsset = useMemo(() => {
    if (isHover && !like) {
      return LikeHoverAsset
    }

    if (like) {
      return LikeOnAsset
    }

    return LikeOffAsset
  }, [isHover, like])

  return (
    <section
      {...props}
      className={className}
      role="button"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className={styles['like-button']} src={likeAsset} alt="Like interaction button" />
    </section>
  )
}

const LikeButton = React.memo(LikeButtonComponent)

export default LikeButton

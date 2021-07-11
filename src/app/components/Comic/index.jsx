import React, { useCallback, useMemo } from 'react'
import styles from './Comic.module.css'

import { mergeClassNames } from '../../../helpers/styles/mergeClassNames'

import LikeButton from '../LikeButton'

import useComic from './useComic'

function ComicComponent({ cover, title, like, onLikeClick }) {
  const { imageRef, hover, handleShowDetails, handleHideDetails } = useComic()

  const detailsClassName = useMemo(() => {
    if (like) {
      return mergeClassNames(styles['details-container'], styles.favourite)
    }

    return mergeClassNames(styles['details-container'])
  }, [like])

  const renderDetails = useCallback(() => {
    if (!hover && !like) return null

    return (
      <div className={detailsClassName}>
        <LikeButton className={styles.like} onClick={onLikeClick} like={like} />
        <span className={styles['title']}>{title}</span>
      </div>
    )
  }, [hover, title, like, onLikeClick, detailsClassName])

  return (
    <div className={styles.container} onMouseEnter={handleShowDetails} onMouseLeave={handleHideDetails}>
      <img ref={imageRef} className={styles.cover} src={cover} alt={`cover of ${title}`} />
      {renderDetails()}
    </div>
  )
}

const Comic = React.memo(ComicComponent)

export default Comic

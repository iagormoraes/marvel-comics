import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Comic from '../../../app/components/Comic'

import { like, dislike, selectComicFavourites } from '../comicSlice'

function ComicListItemComponent({ comic }) {
  const dispatch = useDispatch()
  const favourites = useSelector(selectComicFavourites)

  const isFavourite = useMemo(() => !!favourites[comic.id], [favourites, comic.id])

  const handleFavourite = useCallback(() => {
    if (!isFavourite) {
      dispatch(like(comic.id))

      return
    }

    dispatch(dislike(comic.id))
  }, [dispatch, isFavourite, comic.id])

  return (
      <Comic cover={comic.thumbnail} title={comic.title} onLikeClick={handleFavourite} like={isFavourite} />
  )
}

const ComicListItem = React.memo(ComicListItemComponent)

export default ComicListItem

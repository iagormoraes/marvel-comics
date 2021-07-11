import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

import { fetchComicBySearchAsync, selectComicLoading } from '../comicSlice'

import useDebounce from '../../../app/hooks/useDebounce'

function useComicSearch() {
  const dispatch = useDispatch()
  const loading = useSelector(selectComicLoading)

  const handleSearch = useCallback(
    (value) => {
      dispatch(fetchComicBySearchAsync({ name: value }))
    },
    [dispatch]
  )

  const handleChange = useDebounce(handleSearch, 500)

  return { loading, handleChange }
}

export default useComicSearch

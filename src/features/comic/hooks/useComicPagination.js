import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchComicAsync, selectComicCombined } from '../comicSlice'

import useDebounce from '../../../app/hooks/useDebounce'

function useComicPagination() {
  const dispatch = useDispatch()
  const { pagination, character, loading } = useSelector(
    selectComicCombined(['pagination', 'character', 'loading'])
  )

  const isFirstPage = useMemo(() => pagination.currentPage <= 1, [pagination.currentPage])

  const isLastPage = useMemo(() => pagination.currentPage >= pagination.lastPage, [pagination])

  const handlePreviousPage = useCallback(() => {
    if (!isFirstPage) {
      dispatch(fetchComicAsync({ character, page: pagination.currentPage - 1 }))
    }
  }, [dispatch, isFirstPage, character, pagination.currentPage])

  const handleNextPage = useCallback(() => {
    if (!isLastPage) {
      dispatch(fetchComicAsync({ character, page: pagination.currentPage + 1 }))
    }
  }, [dispatch, isLastPage, character, pagination.currentPage])

  const handlePreviousPagePress = useDebounce(handlePreviousPage, 200)
  const handleNextPagePress = useDebounce(handleNextPage, 200)

  return {
    loading,
    isFirstPage,
    isLastPage,
    handlePreviousPagePress,
    handleNextPagePress,
  }
}

export default useComicPagination

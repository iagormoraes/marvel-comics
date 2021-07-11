import React, { useCallback } from 'react'

import Container from '../../../app/components/Container'
import Row from '../../../app/components/Row'
import PaginationButton from '../../../app/components/PaginationButton'

import useComicPagination from '../hooks/useComicPagination'

function ComicPaginationComponent() {
  const { loading, isFirstPage, isLastPage, handlePreviousPagePress, handleNextPagePress } =
    useComicPagination()

  const renderPreviousButton = useCallback(() => {
    if (isFirstPage) return null

    return (
      <PaginationButton onClick={handlePreviousPagePress} disabled={loading}>
        PREVIOUS PAGE
      </PaginationButton>
    )
  }, [isFirstPage, handlePreviousPagePress, loading])

  const renderNextButton = useCallback(() => {
    if (isLastPage) return null

    return (
      <PaginationButton onClick={handleNextPagePress} disabled={loading}>
        NEXT PAGE
      </PaginationButton>
    )
  }, [isLastPage, handleNextPagePress, loading])

  return (
    <Container className="my-5">
      <Row className="d-flex flex-md-row flex-column">
        <div className="col">{renderPreviousButton()}</div>
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col">{renderNextButton()}</div>
      </Row>
    </Container>
  )
}

const ComicPagination = React.memo(ComicPaginationComponent)

export default ComicPagination

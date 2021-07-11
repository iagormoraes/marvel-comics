import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchComicAsync, selectComicList } from '../comicSlice'

import ComicListItem from './ComicListItem'
import Container from '../../../app/components/Container'
import Row from '../../../app/components/Row'

function ComicListComponent() {
  const dispatch = useDispatch()
  const list = useSelector(selectComicList)

  useEffect(() => {
    dispatch(fetchComicAsync({ page: 1 }))
  }, [dispatch])

  const renderList = useCallback(() => {
    return list.map((item, index) => {
      const everyFifth = (index + 1) % 5 === 0

      if (everyFifth) {
        return (
          <React.Fragment key={item.id}>
            <div className="col mt-3">
              <ComicListItem comic={item} />
            </div>
            <div style={{ display: 'block' }} />
          </React.Fragment>
        )
      }

      return (
        <div key={item.id} className="col mt-3">
          <ComicListItem key={item.id} comic={item} />
        </div>
      )
    })
  }, [list])

  return (
    <Container>
      <Row>{renderList()}</Row>
    </Container>
  )
}

const ComicList = React.memo(ComicListComponent)

export default ComicList

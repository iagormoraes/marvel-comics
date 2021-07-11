import React from 'react'

import Input from '../../../app/components/Input'
import Container from '../../../app/components/Container'
import Row from '../../../app/components/Row'

import useComicSearch from '../hooks/useComicSearch'

function ComicSearchComponent() {
  const { loading, handleChange } = useComicSearch()

  return (
    <Container>
      <Row>
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <Input onChange={handleChange} placeholder="search comics by character" disabled={loading} />
        </div>
      </Row>
    </Container>
  )
}

const ComicSearch = React.memo(ComicSearchComponent)

export default ComicSearch

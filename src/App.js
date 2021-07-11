import React  from 'react'

import ComicSearch from './features/comic/components/ComicSearch'
import ComicList from './features/comic/components/ComicList'
import ComicPagination from './features/comic/components/ComicPagination'

import Header from './app/components/Header'

function App() {
  return (
    <div className="App">
      <Header>
        <ComicSearch />
      </Header>
      <ComicList />
      <ComicPagination />
    </div>
  )
}

export default App

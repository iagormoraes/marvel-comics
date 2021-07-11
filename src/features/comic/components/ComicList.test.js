import { renderWithRedux } from '../../../helpers/testing/renderWithRedux'

import ComicList from './ComicList'

describe('<ComicList/>', () => {
  const initialState = {
    search: '',
    character: null,
    list: [{ id: 1, title: 'Title sample', thumbnail: 'http://thumbnail.test' }],
    favourites: {},
    pagination: {
      currentPage: 1,
      lastPage: 1,
    },
    loading: false,
  }

  test('should present list', () => {
    const { getAllByAltText } = renderWithRedux(<ComicList />, { preloadedState: { comic: initialState } })

    const covers = getAllByAltText(/cover of/i)

    expect(covers.length).toEqual(1)
  })
})

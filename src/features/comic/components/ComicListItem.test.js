import { renderWithRedux } from '../../../helpers/testing/renderWithRedux'

import ComicListItem from './ComicListItem'

describe('<ComicListItem/>', () => {
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

  test('should render correctly', () => {
    const { container } = renderWithRedux(<ComicListItem comic={initialState.list[0]} />, {
      preloadedState: { comic: initialState },
    })

    expect(container).toBeTruthy()
  })
})

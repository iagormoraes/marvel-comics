import { renderWithRedux } from '../../../helpers/testing/renderWithRedux'

import ComicPagination from './ComicPagination'

const state = {
  search: '',
  character: null,
  list: [],
  favourites: {},
  pagination: {
    currentPage: 1,
    lastPage: 2,
  },
  loading: false,
}
describe('<ComicPagination/>', () => {
  let initialState = state

  beforeEach(() => {
    initialState = state
  })

  test('should present next button', () => {
    initialState.pagination = {
      currentPage: 1,
      lastPage: 2,
    }

    const { getByText } = renderWithRedux(<ComicPagination />, {
      preloadedState: { comic: initialState },
    })

    const button = getByText(/NEXT PAGE/i)

    expect(button).toBeInTheDocument()
  })

  test('should present previous button', () => {
    initialState.pagination = {
      currentPage: 2,
      lastPage: 2,
    }

    const { getByText } = renderWithRedux(<ComicPagination />, {
      preloadedState: { comic: initialState },
    })

    const button = getByText(/PREVIOUS PAGE/i)

    expect(button).toBeInTheDocument()
  })

  test('should present previous and next button', () => {
    initialState.pagination = {
      currentPage: 2,
      lastPage: 3,
    }

    const { getByText } = renderWithRedux(<ComicPagination />, {
      preloadedState: { comic: initialState },
    })

    const prevButton = getByText(/PREVIOUS PAGE/i)
    const nextButton = getByText(/NEXT PAGE/i)

    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })
})

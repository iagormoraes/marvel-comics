import { renderHookWithRedux } from '../../../helpers/testing/renderHookWithRedux'

import useComicPagination from './useComicPagination'

jest.mock('../comicService.js', () => () => ({
  listComics: ({ character = null, page }) => {
    return {
      data: [{ id: 1, title: 'Title sample', thumbnail: 'https://thumbnail.com' }],
      character: character,
      metadata: {
        currentPage: page,
        lastPage: 3,
      },
    }
  },
  fetchCharacterId: ({ name = '' }) => 1,
}))

const initialState = {
  search: '',
  character: null,
  list: [],
  favourites: {},
  pagination: {
    currentPage: 1,
    lastPage: 1,
  },
  loading: false,
}

describe('useComicPagination', () => {
  let state = initialState

  beforeEach(() => {
    state = initialState
  })

  test('should manage next page', async () => {
    state.pagination = {
      currentPage: 1,
      lastPage: 2,
    }

    const { result, waitForNextUpdate } = renderHookWithRedux(() => useComicPagination(), {
      preloadedState: { comic: state },
    })

    result.current.handleNextPagePress()

    expect(result.current.isFirstPage).toEqual(true)

    await waitForNextUpdate()

    expect(result.current.isFirstPage).toEqual(false)
    expect(result.current.isLastPage).toEqual(false)
  })

  test('should manage previous page', async () => {
    state.pagination = {
      currentPage: 2,
      lastPage: 2,
    }

    const { result, waitForNextUpdate } = renderHookWithRedux(() => useComicPagination(), {
      preloadedState: { comic: state },
    })

    result.current.handlePreviousPagePress()

    expect(result.current.isLastPage).toEqual(true)

    await waitForNextUpdate()

    expect(result.current.isFirstPage).toEqual(true)
    expect(result.current.isLastPage).toEqual(false)
  })
})

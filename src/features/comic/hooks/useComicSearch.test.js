import { renderHookWithRedux } from '../../../helpers/testing/renderHookWithRedux'

import useComicSearch from './useComicSearch'

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

describe('useComicSearch', () => {
  let state = initialState

  beforeEach(() => {
    state = initialState
  })

  test('should handle text change', async () => {
    const { result, waitForNextUpdate } = renderHookWithRedux(() => useComicSearch(), {
      preloadedState: { comic: state },
    })

    result.current.handleChange('some text')

    await waitForNextUpdate()

    expect(result.all[0].loading).toEqual(false)
    expect(result.all[1].loading).toEqual(true)
    expect(result.all[2].loading).toEqual(false)
  })
})

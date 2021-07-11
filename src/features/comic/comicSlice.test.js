import { configureStore } from '@reduxjs/toolkit'
import comicReducer, {
  changeSearch,
  like,
  dislike,
  fetchComicAsync,
  fetchComicBySearchAsync,
} from './comicSlice'

jest.mock('./comicService.js', () => () => ({
  listComics: ({ character = null, page }) => {
    return {
      data: [{ id: 1, title: 'Title sample', thumbnail: 'https://thumbnail.com' }],
      character: character,
      metadata: {
        currentPage: page,
        lastPage: page + 1,
      },
    }
  },
  fetchCharacterId: ({ name = '' }) => 1,
}))

describe('comicSlice', () => {
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

  test('should change search', () => {
    const searchText = 'some search'
    const state = comicReducer(initialState, changeSearch(searchText))

    expect(state.search).toEqual(searchText)
  })

  test('should like', () => {
    const character = 100
    const state = comicReducer(initialState, like(character))

    expect(state.favourites).toEqual({ [character]: character })
  })

  test('should dislike', () => {
    const character = 100
    const likeState = comicReducer(initialState, like(character))

    expect(likeState.favourites).toEqual({ [character]: character })

    const dislikeState = comicReducer(initialState, dislike(character))

    expect(dislikeState.favourites).toEqual({})
  })

  test('should fetch comic', async () => {
    const store = configureStore({ reducer: { comic: comicReducer } })

    await store.dispatch(fetchComicAsync({ character: null, page: 1 }))

    const state = store.getState()

    expect(state.comic.character).toEqual(null)
    expect(state.comic.pagination.lastPage).toEqual(2)
    expect(state.comic.list.length).toEqual(1)
  })

  test('should fetch by character search', async () => {
    const character = 'deadpool'
    const store = configureStore({ reducer: { comic: comicReducer } })

    await store.dispatch(fetchComicBySearchAsync({ name: character }))

    const state = store.getState()

    expect(state.comic.character).toEqual(1)
    expect(state.comic.pagination.lastPage).toEqual(2)
    expect(state.comic.list.length).toEqual(1)
  })
})

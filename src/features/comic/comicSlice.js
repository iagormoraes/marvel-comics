import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import comicService from './comicService'

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

export const fetchComicAsync = createAsyncThunk('comic/fetchComics', async ({ character, page }) => {
  return await comicService().listComics({ character, page })
})

export const fetchComicBySearchAsync = createAsyncThunk('comic/fetchComicsBySearch', async ({ name }) => {
  let characterId = null

  if (name) {
    characterId = await comicService().fetchCharacterId({ name })
  }

  return await comicService().listComics({ character: characterId, page: 1 })
})

export const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload
    },
    like: (state, action) => {
      state.favourites[action.payload] = action.payload
    },
    dislike: (state, action) => {
      delete state.favourites[action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false
          state.list = action.payload.data
          state.pagination = action.payload.metadata
          state.character = action.payload.character
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.loading = false
        }
      )
  },
})

export const { changeSearch, like, dislike } = comicSlice.actions

export const selectComicState = (state) => state

export const selectComicSearch = (state) => state.comic.search

export const selectComicList = (state) => state.comic.list

export const selectComicFavourites = (state) => state.comic.favourites

export const selectComicPagination = (state) => state.comic.pagination

export const selectComicLoading = (state) => state.comic.loading

export const selectComicCharacter = (state) => state.comic.character

export const selectComicCombined = (listProps) => (state) => {
  const selectedObject = {}

  for (const property of listProps) {
    selectedObject[property] = state.comic[property]
  }

  return selectedObject
}

export default comicSlice.reducer

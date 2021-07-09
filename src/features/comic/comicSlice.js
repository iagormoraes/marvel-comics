import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import comicService from './comicService'

const initialState = {
  search: '',
  list: [],
  favouriteList: [],
  pagination: {
    currentPage: 1,
    lastPage: 1,
  },
  loading: false,
}

export const fetchComicAsync = createAsyncThunk('comic/fetchComics', async (page) => {
  return await comicService().listComics({ page })
})

export const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload
    },
    like: (state, action) => {
      state.favouriteList = state.favouriteList.push(action.payload)
    },
    dislike: (state, action) => {
      state.favouriteList = state.favouriteList.filter((item) => item !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComicAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchComicAsync.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.data
        state.pagination = action.payload.metadata
      })
  },
})

export const selectComicState = (state) => state

export const selectComicSearch = (state) => state.search

export const selectComicList = (state) => state.list

export const selectComicFavouriteList = (state) => state.favouriteList

export const selectComicPagination = (state) => state.pagination

export const selectComicLoading = (state) => state.loading

export default comicSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import comicReducer from '../features/comic/comicSlice'

export const store = configureStore({
  reducer: {
    comic: comicReducer,
  },
})

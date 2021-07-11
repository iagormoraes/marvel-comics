import React from 'react'

import { renderHook } from '@testing-library/react-hooks'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import comicReducer from '../../features/comic/comicSlice'

export function renderHookWithRedux(callback, { store, preloadedState } = {}) {
  const storeInstance = store || configureStore({ reducer: { comic: comicReducer }, preloadedState })

  function Wrapper({ children }) {
    return <Provider store={storeInstance}>{children}</Provider>
  }

  return renderHook(callback, { wrapper: Wrapper })
}

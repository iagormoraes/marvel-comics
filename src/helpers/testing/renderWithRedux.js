import React from 'react'

import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import comicReducer from '../../features/comic/comicSlice'

export function renderWithRedux(ui, { preloadedState, store, ...renderOptions } = {}) {
  const storeInstance = store || configureStore({ reducer: { comic: comicReducer }, preloadedState })

  function Wrapper({ children }) {
    return <Provider store={storeInstance}>{children}</Provider>
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

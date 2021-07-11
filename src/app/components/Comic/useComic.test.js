import { renderHook, act } from '@testing-library/react-hooks'

import useComic from './useComic'

describe('useComic', () => {
  test('should manage hover state', () => {
    const { result } = renderHook(() => useComic())

    act(() => {
      result.current.handleShowDetails()
    })

    expect(result.current.hover).toBeTruthy()

    act(() => {
      result.current.handleHideDetails()
    })

    expect(result.current.hover).toBeFalsy()
  })
})

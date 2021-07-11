import { renderHook, act } from '@testing-library/react-hooks'

import useDebounce from './useDebounce'

describe('useDebounce', () => {
  test('should call in correct time', () => {
    jest.useFakeTimers()

    const ms = 250
    const handler = jest.fn()
    const { result } = renderHook(() => useDebounce(handler, ms))

    act(() => {
      result.current()
    })

    jest.advanceTimersByTime(ms)

    expect(handler).toBeCalled()
    expect(handler).toBeCalledTimes(1)
  })
})

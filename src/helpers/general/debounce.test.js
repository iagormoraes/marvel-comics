import { debounce } from './debounce'

describe('debounce', () => {
  test('should get called in correct time', () => {
    jest.useFakeTimers()

    const handler = jest.fn()
    const ms = 250

    debounce(handler, ms)()

    jest.advanceTimersByTime(ms)

    expect(handler).toBeCalled()
    expect(handler).toBeCalledTimes(1)
  })
})

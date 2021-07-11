import { hashMD5 } from './hash'

describe('hash', () => {
  test('should hash to MD5', () => {
    const text = 'some string'
    const hash = hashMD5(text).toString()

    expect(hash.length).toEqual(32)
    expect(/^[a-f0-9]{32}$/.test(hash)).toBeTruthy()
  })
})

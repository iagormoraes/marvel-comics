import { mergeClassNames } from './mergeClassNames'

describe('mergeClassNames', () => {
  test('should merge class names', () => {
    const defaultClassName = 'default'
    const newClassName = 'some-new-class'

    const className = mergeClassNames(defaultClassName, newClassName)

    expect(className).toContain(defaultClassName)
    expect(className).toContain(newClassName)
  })
})

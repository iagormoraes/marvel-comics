import { render } from '@testing-library/react'

import Container from './'

describe('<Container/>', () => {
  test('should render correctly', () => {
    const { container } = render(
      <Container>
        <div />
      </Container>
    )

    expect(container.childElementCount).toEqual(1)
  })
})

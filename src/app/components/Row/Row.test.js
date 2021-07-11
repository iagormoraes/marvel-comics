import { render, screen } from '@testing-library/react'

import Row from './'

describe('<Row/>', () => {
  test('should render correctly', () => {
    const text = 'Some text'

    render(
      <Row>
        <p>{text}</p>
      </Row>
    )

    const paragraph = screen.getByText(text)

    expect(paragraph).toBeInTheDocument()
  })
})

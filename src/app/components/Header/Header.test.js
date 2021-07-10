import { render, screen } from '@testing-library/react'

import Header from './'

describe('<Header/>', () => {
  test('should render correctly', () => {
    const text = 'Some text'

    render(
      <Header>
        <p>{text}</p>
      </Header>
    )

    const paragraph = screen.getByText(text)

    expect(paragraph).toBeInTheDocument()
  })
})

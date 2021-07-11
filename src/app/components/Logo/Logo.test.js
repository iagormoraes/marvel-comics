import { render, screen } from '@testing-library/react'

import Logo from './'

describe('<Logo/>', () => {
  test('should render correctly', () => {
    render(<Logo />)

    const logo = screen.getByAltText('Marvel logo')

    expect(logo).toBeInTheDocument()
  })
})

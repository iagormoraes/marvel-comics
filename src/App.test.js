import { screen } from '@testing-library/react'
import App from './App'

import { renderWithRedux } from './helpers/testing/renderWithRedux'

describe('<App/>', () => {
  test('render main components', () => {
    renderWithRedux(<App />)

    const logo = screen.getByAltText(/marvel logo/i)
    const search = screen.getByPlaceholderText(/search comics by character/i)

    expect(logo).toBeInTheDocument()
    expect(search).toBeInTheDocument()
  })
})

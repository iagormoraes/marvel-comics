import { render, fireEvent, screen } from '@testing-library/react'

import PaginationButton from './'

describe('<PaginationButton/>', () => {
  test('should present correct text', () => {
    const props = {
      children: 'Some text',
      onClick: jest.fn(),
    }

    render(<PaginationButton {...props} />)

    const button = screen.getByText(props.children)

    fireEvent.click(button)

    expect(props.onClick).toBeCalledTimes(1)
  })
})

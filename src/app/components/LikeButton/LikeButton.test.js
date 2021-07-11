import { render, fireEvent, screen } from '@testing-library/react'

import LikeButton from './index'

describe('<LikeButton/>', () => {
  test('should manage props correctly', () => {
    let props = {
      like: false,
      onClick: () => (props.like = !props.like),
    }

    render(<LikeButton {...props} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(props.like).toEqual(true)

    fireEvent.click(button)

    expect(props.like).toEqual(false)
  })
})

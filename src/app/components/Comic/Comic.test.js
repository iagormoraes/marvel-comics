import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Comic from './'

describe('<Comic/>', () => {
  test('should render without details', async () => {
    const props = {
      cover: 'http://mockurl.com',
      title: 'Title sample',
      like: false,
      onLikeClick: jest.fn,
    }

    render(<Comic {...props} />)

    const likeButton = screen.queryByAltText(/Like interaction button/i)

    expect(likeButton).not.toBeInTheDocument()
    expect(screen.getByAltText(`cover of ${props.title}`)).toBeInTheDocument()
  })

  test('should render with details', async () => {
    const props = {
      cover: 'http://mockurl.com',
      title: 'Title sample',
      like: true,
      onLikeClick: jest.fn(),
    }

    render(<Comic {...props} />)

    const likeButton = screen.queryByAltText(/Like interaction button/i)
    const titleText = screen.queryByText(props.title)

    fireEvent.click(likeButton)

    expect(titleText).toBeInTheDocument()
    expect(likeButton).toBeInTheDocument()
    expect(props.onLikeClick).toHaveBeenCalledTimes(1)
  })
})

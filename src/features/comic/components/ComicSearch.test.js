import { fireEvent } from '@testing-library/react'

import { renderWithRedux } from '../../../helpers/testing/renderWithRedux'

import ComicSearch from './ComicSearch'

describe('<ComicSearch/>', () => {
  const initialState = {
    search: '',
    character: null,
    list: [],
    favourites: {},
    pagination: {
      currentPage: 1,
      lastPage: 2,
    },
    loading: false,
  }

  test('should handle change text', () => {
    const searchName = 'deadpool'
    const { getByPlaceholderText } = renderWithRedux(<ComicSearch />, {
      preloadedState: { comic: initialState },
    })

    const input = getByPlaceholderText(/search comics by character/i)

    fireEvent.change(input, { target: { value: searchName } })

    expect(input.value).toEqual(searchName)
  })
})

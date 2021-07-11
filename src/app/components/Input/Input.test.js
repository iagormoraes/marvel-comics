import { render, fireEvent, screen } from '@testing-library/react'

import Input from './'

describe('<Input/>', () => {
  test('should change value', () => {
    const props = {
      placeholder: 'placeholder',
      onChange: jest.fn(),
    }

    render(<Input {...props} />)

    const input = screen.getByPlaceholderText(props.placeholder)

    fireEvent.change(input, { target: { value: 'text' } })

    expect(props.onChange).toBeCalledTimes(1)
  })
})

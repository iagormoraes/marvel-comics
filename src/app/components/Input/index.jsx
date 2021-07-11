import React, { useCallback, useMemo } from 'react'
import styles from './Input.module.css'

import { mergeClassNames } from '../../../helpers/styles/mergeClassNames'

function InputComponent({ onChange, ...inputProps }) {
  const className = useMemo(() => mergeClassNames(styles.input, inputProps.className), [inputProps.className])

  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value)
    },
    [onChange]
  )

  return <input {...inputProps} className={className} onChange={handleChange} />
}

const Input = React.memo(InputComponent)

export default Input

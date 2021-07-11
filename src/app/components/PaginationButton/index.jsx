import React, { useMemo } from 'react'
import styles from './PaginationButton.module.css'

import { mergeClassNames } from '../../../helpers/styles/mergeClassNames'

function PaginationButtonComponent({ children, ...buttonProps }) {
  const className = useMemo(
    () => mergeClassNames(styles.button, buttonProps.className),
    [buttonProps.className]
  )

  return (
    <button {...buttonProps} className={className}>
      {children}
    </button>
  )
}

const PaginationButton = React.memo(PaginationButtonComponent)

export default PaginationButton

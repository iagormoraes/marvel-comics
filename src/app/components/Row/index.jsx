import React, { useMemo } from 'react'

import { mergeClassNames } from '../../../helpers/styles/mergeClassNames'

function RowComponent({ children, ...rowProps }) {
  const className = useMemo(() => mergeClassNames('row', rowProps.className), [rowProps.className])

  return (
    <div {...rowProps} className={className}>
      {children}
    </div>
  )
}

const Row = React.memo(RowComponent)

export default Row

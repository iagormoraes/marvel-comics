import React, { useMemo } from 'react'

import { mergeClassNames } from '../../../helpers/styles/mergeClassNames'

function ContainerComponent({ children, ...containerProps }) {
  const className = useMemo(
    () => mergeClassNames('container', containerProps.className),
    [containerProps.className]
  )

  return (
    <section {...containerProps} className={className}>
      {children}
    </section>
  )
}

const Container = React.memo(ContainerComponent)

export default Container

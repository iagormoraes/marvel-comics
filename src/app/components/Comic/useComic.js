import { useCallback, useRef, useState } from 'react'

function useComic() {
  const imageRef = useRef(null)
  const [hover, setHover] = useState(false)

  const handleShowDetails = useCallback(() => setHover(true), [])

  const handleHideDetails = useCallback(() => setHover(false), [])

  return { imageRef, hover, handleShowDetails, handleHideDetails }
}

export default useComic

import { useEffect, useRef } from 'react'

import { debounce } from '../../helpers/general/debounce'

function useDebounce(func, wait = 250) {
  const funcRef = useRef(func)

  const debounceRef = useRef(debounce((...params) => funcRef.current(...params), wait))

  useEffect(() => {
    funcRef.current = func
  }, [func])

  return debounceRef.current
}

export default useDebounce

import {useEffect, useRef} from 'react'

/**
 * UsePrevious is used to store previous value of an object
 */
function usePrevious(value, initialValue = '') {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similiar to an instance property on a class
  const ref = useRef(initialValue)

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}

export default usePrevious

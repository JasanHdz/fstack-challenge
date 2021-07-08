import { useState } from 'react'

function useFocusElement(intialState) {
  const [isFocus, setIsFocus] = useState(intialState)
  const handleFocus = (event) => {
    setIsFocus(true)
  }
  const handleBlur = (event) => {
    setIsFocus(false)
  }
  return {
    isFocus,
    handleFocus,
    handleBlur,
  }
}

export default useFocusElement

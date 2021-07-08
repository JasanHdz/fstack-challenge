import { useState } from 'react'

function useInputValue(initialState = '') {
  const [value, setValue] = useState(initialState)
  const onChange = event => {
    const el = event.target
    setValue(el.value)
    sessionStorage.setItem(el.name, el.value)
  }
  return { value, onChange }
}

export default useInputValue

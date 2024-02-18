import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <p>{counter}</p>
        <button onClick={(() => setCounter(counter + 1))}>Increase the value</button>
    </div>
  )
}

export default HookUseState
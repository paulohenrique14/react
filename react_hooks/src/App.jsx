import { useState } from 'react'

import './App.css'
import HookUseState from './components/HookUseState'
import HookUseReducer from './components/HookUseReducer'
import HookUseEffect from './components/HookUseEffect'

function App() {
  return (
    <>
      <HookUseState />
      <hr/>
      <HookUseReducer />
      <hr/>
      <HookUseEffect />
    </>
  )
}

export default App

import {React, useEffect} from 'react'

const HookUseEffect = () => {

    useEffect(() => {
        console.log('Estou sendo executado')
    })
  return (
    <div>
        <h1>UseEffect</h1>
    </div>
  )
}

export default HookUseEffect
import React from 'react'
import { useReducer } from 'react'

const HookUseReducer = () => {
    
    const handleReducer = (state, action) => {
        switch(action.type){
            case 'INCREMENT':
                return {...state, count: state.count + 1};
            case 'SHOWTEXT':
                return {...state, text: !state.text};
            case 'DEFAULT':
                return "this type of action doesn't exist"
        }
    }

    const [state, dispatch] = useReducer(handleReducer,{
        count: 0,
        text: true
    });  

    const handleValues = () => {
        dispatch({type: 'INCREMENT'});
        dispatch({type: 'SHOWTEXT'})
    }

  return (
    <div>
        <h1>UseReducer</h1>
        <p>Número: {state.count}</p>
        <button onClick={handleValues}>Alterar numero</button>
        {!state.text && <p>Follow the Front Begginers on yt</p>}
    </div>
  )
}

export default HookUseReducer
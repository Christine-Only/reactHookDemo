import React, { useReducer } from 'react'
import './UseReducer.css'

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const UseReducer = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return(
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </>
  )
}

export default UseReducer

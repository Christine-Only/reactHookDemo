import React, { createContext, useReducer } from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'

export const ColorContext = React.createContext({})

const initData = { color: 'blue' }
const reducer = (state, action) => {
  switch (action.color) {
    case 'red':
      return { color: 'red' }
    case 'green':
      return { color: 'green' }
    default:
      throw new Error()
  }
}

const ModifyColor = () => {
  const [ state, dispatch ] = useReducer(reducer, initData)

  return (
    <>
      <ColorContext.Provider value={{state, dispatch}}>
        <ShowArea />
        <Buttons />
      </ColorContext.Provider>
    </>
  )
}

export default ModifyColor

import React, { useContext } from 'react'
import { ColorContext } from './ModifyColor'
import './Buttons.css'

const Buttons = () => {
  const { dispatch } = useContext(ColorContext)
  return (
    <>
      <button onClick={() => dispatch({ color: 'red' })}>红色</button>
      <button onClick={() => dispatch({ color: 'green' })}>绿色</button>
    </>
  )
}

export default Buttons

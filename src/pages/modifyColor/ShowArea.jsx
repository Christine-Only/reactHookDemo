import React, { useContext } from 'react'
import { ColorContext } from './ModifyColor'

const ShowArea = () => {
  const { state } = useContext(ColorContext)
  return <h2 style={{ color: state.color }}>当前颜色为{state.color}</h2>
}

export default ShowArea

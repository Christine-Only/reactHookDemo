import React, { useState, useEffect, useLayoutEffect } from 'react'

const UseLayOutEffect = () => {
  const [ color, setColor ] = useState('red')

  useEffect(() => {
    console.log('useEffect+color', color)
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect+color', color)
  })

  return(
    <>
      <div style={{ background: color }}>苹果是红色</div>
      <button onClick={() => setColor('green')}>将苹果变成绿苹果</button>
      <button onClick={() => setColor('yellow')}>将苹果变成黄苹果</button>
    </>
  )
}

export default UseLayOutEffect

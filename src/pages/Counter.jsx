import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [ number, setNumber ] = useState(0)
  const [ text, setText ] = useState('')

  useEffect(() => {
    console.log('开启一个定时器！！！')
    const timerId = setInterval(() => {
      setNumber(number + 1)
    }, 1000)
    // 如果要清除副作用，要么返回一个清除副作用的函数
    // return () => {
    //   console.log('组件卸载')
    //   clearInterval(timerId)
    // }
  }, []) //要么在这里传入一个空的依赖项数组，这样就不会去重复执行

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>{number}</p>
      <button>+</button>
    </>
  )
}

export default Counter

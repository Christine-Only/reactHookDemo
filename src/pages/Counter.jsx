import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [ number, setNumber ] = useState(0)
  const [ text, setText ] = useState('')

  useEffect(() => {
    console.log('开启一个定时器！！！')
    const timerId = setInterval(() => {
      setNumber(number => number + 1)
    }, 1000)
    // useEffect 如果返回一个函数的话，该函数会在组件卸载或者更新时调用
    // useEffect 在执行副作用函数之前，会先调用上一次返回的函数
    // 如果要清除副作用，要么返回一个清除副作用的函数
    return () => {
      console.log('destory effect')
      clearInterval(timerId)
    }
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

import React, { useRef, useState, useEffect } from 'react'

/**
 * useRef两个作用
 * 第一个获取dom元素 并对dom元素进行操作
 * 第二个保存普通变量
 */
const UseRef = () => {
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.value = '糖糖吃糖'
    console.log('inputRef: ', inputRef);
  }
  const [ value, setValue ] = useState('tsy')
  const valueRef = useRef()
  useEffect(() => {
    // 每次状态变化都进行状态存储
    valueRef.current = value
    console.log('valueRef.current: ', valueRef.current);
  })

  return (
    <>
      {/* 保存input的ref到inputRef */}
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>点我设置input框的值</button>
      <br/>
      <br/>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </>
  )
}

export default UseRef

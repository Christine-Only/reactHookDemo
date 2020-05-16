import React, { useState, useEffect } from 'react'
import './App.css'

/**
 * useState返回值有两个
 * 第一个是当前state
 * 第二个修改state的函数
 * 0表示count初始值
 */
function App() {
  const [ count, setCount ] = useState(0)

  /**
   * useEffect 页面初始渲染就会执行 相当于cpmponentDidMount
   * useEffect 有return值，React将会在执行清除操作时调用它
   */
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
    return () => {
      console.log('============')
    }
  }, [count]) //当count发生改变时，就会执行useEffect

  return (
    <div className="App">
      <p>You clicked { count } times</p>
      <button onClick={() => setCount(count + 1)}>Clicked me</button>
    </div>
  )
}

export default App

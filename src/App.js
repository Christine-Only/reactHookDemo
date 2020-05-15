import React, { useState } from 'react'
import './App.css'

/**
 * useState返回值有两个
 * 第一个是当前state
 * 第二个修改state的函数
 * 0表示count初始值
 */
function App() {
  const [ count, setCount ] = useState(0)
  return (
    <div className="App">
      <p>You clicked { count } times</p>
      <button onClick={() => setCount(count + 1)}>Clicked me</button>
    </div>
  )
}

export default App

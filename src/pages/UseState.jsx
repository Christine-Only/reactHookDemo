import React, { useState } from 'react'

/**
 * useState返回值有两个
 * 第一个是当前state
 * 第二个修改state的函数
 * 0表示count初始值
 */
const UseState = () => {
  // 这里可以任意命名，因为返回的是数组，数组解构
  const [ count, setCount ] = useState(0)
  return (
    <>
      <p>You clicked { count } times</p>
      <button onClick={() => setCount(count => count + 1)}>Clicked me</button>
    </>
  )
}

// class UseState extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     )
//   }
// }

export default UseState

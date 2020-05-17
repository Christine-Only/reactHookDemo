import React, { useState, useEffect } from 'react'
const Counter = () => {
  const [number, setNumber] = useState(0)
  // useEffect里面的这个函数会在第一次渲染之后和更新完成后执行
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `你点击了${number}次`
  })

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
}

// class Counter extends React.Component {
//   state = { number: 0 }
//   add = () => {
//     this.setState({ number: this.state.number + 1 })
//   };
//   componentDidMount() {
//     this.changeTitle()
//   }
//   componentDidUpdate() {
//     this.changeTitle()
//   }
//   changeTitle = () => {
//     document.title = `你已经点击了${this.state.number}次`
//   };
//   render() {
//     return (
//       <>
//         <p>{this.state.number}</p>
//         <button onClick={this.add}>+</button>
//       </>
//     )
//   }
// }

export default Counter

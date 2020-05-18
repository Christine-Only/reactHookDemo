import React, { useEffect, useState } from 'react'

function useNumber() {
  let [number, setNumber] = useState(0)
  console.log("Get a new number " + number)
  useEffect(() => {
    console.log("Timer created")
    let timerId = setInterval(() => {
      setNumber(number => number + 1)
      console.log(`set number ${number}`)
    }, 1000)
    console.log('timerID', timerId)
  }, [])
  return [number, setNumber]
}
// 每个组件调用同一个 hook，只是复用 hook 的状态逻辑，并不会共用一个状态
const Counter1 = () => {
  let [number, setNumber] = useNumber()
  return (
    <div>
      <button onClick={() => { setNumber(number + 1) }}>
        {number}
      </button>
    </div>
  )
}
const Counter2 = () => {
  let [number, setNumber] = useNumber()
  return (
    <div>
      <button onClick={() => { setNumber(number + 1) }}>{number}
      </button>
    </div>
  )
}

const UseNumber = () => {
  return (
    <>
      <Counter1></Counter1>
      <Counter2></Counter2>
    </>
  )
}

export default UseNumber

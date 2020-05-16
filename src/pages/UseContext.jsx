import React, { useState, createContext, useContext } from 'react'

const Context = React.createContext()

const Counter = () => {
  const count = useContext(Context)
  return <h2>{count}</h2>
}

const UseContext = () => {
  const [ count, setCount ] = useState(0)
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Context.Provider value={count}>
        <Counter />
      </Context.Provider>
    </>
  )
}

export default UseContext


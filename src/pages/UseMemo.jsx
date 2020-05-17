import React, { useState, createContext, useContext, useMemo } from 'react'

const Context = React.createContext()
const UseMemo = () => {
  const [ state1, setState1 ] = useState("小红真美")
  const [ state2, setState2  ] = useState('小明真帅')
  return(
    <>
      <button onClick={() => setState1(+new Date())}>小红</button>
      <button onClick={() => setState2(`${+new Date()}，身高180com`)}>小明</button>
      <Context.Provider value={{state1, state2}}>
        <ChildComponent></ChildComponent>
      </Context.Provider>
    </>
  )
}

const ChildComponent = () => {
  const { state1, state2 } = useContext(Context)
  const changeState1 = (state1) => {
    console.log('小红身高160cm')
    return `${state1}，小红会跳舞`
  }
  // const actionState1 = changeState1(state1)
  /**
   * useMemo需要两个参数
   * 第一个参数是一个函数
   * 第二个参数是依赖项数组
   * 只有依赖项数组中的值改变，才会重新计算
   * 传入useMemo的函数仅会在渲染期间执行
   */
  const actionState1 = useMemo(() => changeState1(state1), [state1])
  return(
    <>
      <div>{actionState1}</div>
      <div>{state2}</div>
    </>
  )
}

export default UseMemo
import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp'

const UseCallbackHook = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const handleIncrement = useCallback(() => {
        setCount((prevCount)=> prevCount + 1)
    }, [])
    
  return (
    <div>
        {/* 
        usecallbackHook - The usecallback hook in react is used to momoize
        functions, This is particularly useful when passing functions
        as props to child components as it helps prevent unnecessary
        re-renders.
        */}
        <h2>UseCallbackHook</h2>
        <h2>Count: {count}</h2>
        <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
    
    <div className='mt-3'>
        <input type='text' 
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter text...'
        className=''
        value={text}
        />

        <ChildComp onIncrement={handleIncrement}  />
        </div>
    </div>
  )
}

export default UseCallbackHook
import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const reducer = (currentState, action) => {
        console.log(action)
        switch(action.type){
            case "INCREMENT":
                return currentState + action.payload
            case "DECREMENT":
                return currentState - action.payload
        default:
            return currentState;
        }
    }

    // action consists of type and payload

    const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
        <h2>UseReducerHook</h2>
        <h3>Count: {count}</h3>
        <button className='btn btn-primary me-3'
        onClick={() => {dispatch({type:'INCREMENT', payload:10})}}
        >Increment</button>
        <button className='btn btn-danger me-3'>Decrement</button>
    </div>
  )
}

export default UseReducerHook
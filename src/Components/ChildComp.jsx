import React from 'react'

const ChildComp = ({onIncrement}) => {
    console.log('child Component Rendered')

  return (
    <div>
        <h2>Callback Child Component</h2>
        <button
        className='btn btn-warning'
        onClick={onIncrement}>Child Increment</button>
    </div>
  )
}

export default React.memo(ChildComp)
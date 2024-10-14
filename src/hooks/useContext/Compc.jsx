import React, { useContext } from 'react'
import { userContext } from './UseContextHook'

const Compc = () => {
    const userData = useContext(userContext)
  return (
    <div>
        <h2>Compc {userData.name}</h2>
    </div>
  )
}

export default Compc
import React, { useContext } from 'react'
import CompB from './CompB'
import { userContext } from './UseContextHook'

const CompA = () => {
    const userData = useContext(userContext)
    console.log(userData)

  return (
    <div>
        <h2>CompA {userData.name}</h2>
        <CompB />
    </div>
  )
}

export default CompA
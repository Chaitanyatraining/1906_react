import React, { useEffect, useState } from 'react'

const UseeffectUnmounting = () => {
    const [count, setCount] = useState(5)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevsCount => prevsCount + 1)
        }, 1000)

        // cleanup function
        // unmounting Phase

        return() => {
            clearInterval(timer)
        }

    }, [])

  return (
    <div>
        <h2>UseeffectUnmounting</h2>
        <h4>Count:{count}</h4>
    </div>
  )
}

export default UseeffectUnmounting
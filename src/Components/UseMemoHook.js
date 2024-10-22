import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [bool, setBool] = useState(false)
    const [amount, setAmount] = useState(1000)

    const expensiveFunction = () => {
        const data = []

        for(let i=0; i<= amount; i++){
            if(i % 2 ===0){
                console.log(i)
                data.push(i)
            }
        }
        return data
    } 

    const CalculationData = useMemo(()=> {expensiveFunction()}, [amount])
    
  return (
    <div>
        {/* 
            it is used to optimise the performance of the components by memoizing the 
            results of expensive calculations. it allows you to cache the result of 
            a function and only recomputes it when the dependencies of the function have 
            changed.
        */}
        <h2>UseMemoHook</h2>
        <h4>value: {bool ? 'true' : 'false'}</h4>
        <button className='btn btn-info' 
        onClick={() => setBool(prevState => !prevState)}
        >Change</button>

        <button className='btn btn-warning ms-3'
        onClick={() => {setAmount(prevState=> prevState + 100)}}
        >Add Amount</button>

        {CalculationData && CalculationData.map((val) => {
            return <h6 key={val}>{val}</h6>
        })}

    </div>
  )
}

export default UseMemoHook
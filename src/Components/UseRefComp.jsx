import React, { useEffect, useRef } from 'react'

const UseRefComp = () => {
    // UseState will rerender when the content change and update the UI.

    // useref Hook doesn't notify you when its content changes.Mutating the  
    // .current property doesn't cause a re-render.

    const data = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data.current.value)
    }

    useEffect(() => {
        data.current.focus()
    }, [])

  return (
    <div>
        <h2>UseRefComp</h2>
        <form>
            <input ref={data} type="text"  />
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
    </div>
  )
}

export default UseRefComp
import React from 'react'
import './Styles.css'
import moduleStyles from './moduleStyles.module.css'

const StylingsComp = () => {
    // Inline
    // Internal
    // External 
    // Module css
    const headingStyle = {
        internalHead:{
            color:'blue',
            backgroundColor: 'orange'
        },
        paraStyle: {
            color: 'brown',
            backgroundColor: 'purple'
        }
    }

  return (
    <div>
        <h2>StylingsComp</h2>
        <h4 style={{color:'red', backgroundColor:'yellow'}}>This is Inline Stylings</h4>
        <h4 style={headingStyle.internalHead}>This is Internal Styles</h4>
        <p style={headingStyle.paraStyle}>This is para</p>
        <div className='extHead'>This is External Css</div>
        <h2 className={moduleStyles.moduleheadstyle}>This is Module Css</h2>
        <h4 className='text-primary'>This is bootsrap </h4>
    </div>
  )
}

export default StylingsComp
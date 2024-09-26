import React, { Component } from 'react'

class Counter extends Component {
    // state is also an object
    // state is used to update the data within the component

    constructor(){
        super()
        // this.state = {
        //     count: 0
        // }
    }

    state = {
        count: 0,
    }

        handleIncrement = () => {
            this.setState({
                count: this.state.count + 1
            })
        }



  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h3>Count : {this.state.count}</h3>
        <button className='btn btn-info' onClick={() => {this.handleIncrement()}}>Increment</button>
        <button className='btn btn-danger'>Decrement</button>
        <button>Reset</button>

      </div>
    )
  }
}

export default Counter
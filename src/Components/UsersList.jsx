import React, { Component } from 'react'
import ListsandKeys from './ListsandKeys'

 class UsersList extends Component {
    constructor(props){
        super(props)
        console.log('constructor executed')
    }

    state = {
        usersdata: []
    }

    static getDerivedStateFromProps(props, state){
        console.log('static getderievedstatefromstate executed')
        return null
    }

    componentDidMount(){
        console.log('componentdidmount executed')
        this.getUsersData()
    }

    getUsersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        this.setState({usersdata: data})
    }

  render() {
    console.log('render executed')
    return (
      <div>
        <h2>Userslist</h2>
        <table className='table'>
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>userName</th>
                <th>Email</th>
            </tr>
           {
            this.state.usersdata && this.state.usersdata.length > 0 && this.state.usersdata.map((user, index) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            ))
           }
        </table>
      </div>
    )
  }
}

export default UsersList
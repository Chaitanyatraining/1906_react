import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const UseEffectData = () => {
    // const [userData, setuserData] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'

    const userData = useFetch(url)
    // useEffect(() => {
    //     getUsersData()
    //  }, [])

    // useEffect brings lifecycle methods 

    // const getUsersData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     setuserData(data)        
    // }

    return (
        <div>
            <h2>Useeffectdata 1111</h2>
            <table className='table'>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>userName</th>
                    <th>Email</th>
                </tr>
                {
                    userData && userData.length > 0 && userData.map((user, index) => (
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

export default UseEffectData
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [userdata, setUserData] = useState([])
    // the hook starts with 'use'
    // we should not return jsx in custom hook
    // we can return object,array,''.....

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json()
        setUserData(data)
    }
    return userdata;
}

export default useFetch
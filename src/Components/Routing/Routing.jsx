import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UsersList from '../UsersList'
import Pagination from '../Pagination'
import ListsandKeys from '../ListsandKeys'
import NotFound from '../NotFound'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/listkeys' element={<ListsandKeys />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing
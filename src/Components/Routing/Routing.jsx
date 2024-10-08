import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UsersList from '../UsersList'
import Pagination from '../Pagination'
import ListsandKeys from '../ListsandKeys'
import NotFound from '../NotFound'
import UseEffectData from '../UseEffectData'
import UseEffectPagination from '../UseEffectPagination'
import UseeffectUnmounting from '../UseeffectUnmounting'
import ContactUs from '../ContactUs'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/listkeys' element={<ListsandKeys />} />
        <Route path='/useeffect' element={<UseEffectData />} />
        <Route path='/useeffectpagination' element={<UseEffectPagination />} />
        <Route path='/useeffectunmounting' element={<UseeffectUnmounting />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing
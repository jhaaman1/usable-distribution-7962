import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import News from './News'
import PlayerSearch from './PlayerSearch'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/playersearch' element={<PlayerSearch/>} />
            <Route path='/sportsnews' element={<News/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes
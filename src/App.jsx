import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout'

const App = () => {
  return (
    <div >
    <Routes>
      <Route path='/' element={<HomeLayout/>}></Route>
    </Routes>
    </div>
  )
}

export default App

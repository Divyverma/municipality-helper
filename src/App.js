import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './component/HomePage'
import Login from './component/Login'
import Register from './component/Register'

const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

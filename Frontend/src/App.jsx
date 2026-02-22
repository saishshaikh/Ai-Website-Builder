import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Home from './Pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/Home' element={<Home/>}/>
        <Route  path='/Login' element={<Login/>}/>
        <Route  path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App

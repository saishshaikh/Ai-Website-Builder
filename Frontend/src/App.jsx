import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Home from './Pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/Home' element={<Home/>}/>
       
      
      </Routes>
    </div>
  )
}

export default App

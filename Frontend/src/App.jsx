import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
export const serverUrl="http://localhost:8000"
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

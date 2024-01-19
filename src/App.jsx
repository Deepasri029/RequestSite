import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Bank from './Components/Bank'
import Branchs from './Components/Branchs'
import Home from './Components/Home'
import Up from './Components/Up'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <br />
        <Routes>
          <Route path='/' element={<Bank />} />
          <Route path='/branchs' element={<Branchs />} />
          <Route path='/up/:id' element={<Up />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

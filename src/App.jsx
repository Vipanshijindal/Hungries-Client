import React from 'react'
import LandingPage from './Hungries/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProductMenu from './Hungries/components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
      </Routes>
    
    </div>
  )
}

export default App
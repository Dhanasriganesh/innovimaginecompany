import React from 'react'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import {Routes,Route} from "react-router-dom"
function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Routers

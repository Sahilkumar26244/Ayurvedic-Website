import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import YogaPage from '../Pages/YogaPage'
import About from '../Pages/About'
import LifeAsPrayer from '../Pages/LifeAsPrayer'
import News from '../Pages/News'
import Reservations from '../Pages/Reservations'
import Help from '../Pages/Help'

function AllRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/yoga'  element={<YogaPage/>} />   
            <Route path='/lifeAsPrayer' element={<LifeAsPrayer/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/reservations' element={<Reservations/>} />
            <Route path='/howYouCanHelp' element={<Help/>} />  
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes
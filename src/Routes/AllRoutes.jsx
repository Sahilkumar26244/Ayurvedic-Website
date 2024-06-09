import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PrayerPage from '../Pages/PrayerPage'
import YogaPage from '../Pages/YogaPage'
import BhaktiPage from '../Pages/BhaktiPage'
import Meditation from '../Pages/Meditation'

function AllRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/prayer' element={<PrayerPage/>} />
            <Route path='/yoga'  element={<YogaPage/>} />
            <Route path='/bhakti'  element={<BhaktiPage/>} />
            <Route path='/meditation'  element={<Meditation/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes
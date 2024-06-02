import React from 'react'
import HeroSection from '../Components/HeroSection'
import WelcomeNotes from '../Components/WelcomeNotes'
import AshramDetails from '../Components/AshramDetails'

function Home() {
  return (
    <div>
        <HeroSection/>
        <WelcomeNotes/>
        <AshramDetails/>
    </div>
  )
}

export default Home
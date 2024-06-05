import React from 'react'
import HeroSection from '../Components/HeroSection'
import WelcomeNotes from '../Components/WelcomeNotes'
import AshramDetails from '../Components/AshramDetails'
import YogaCourceSection from '../Components/YogaCourceSection'

function Home() {
  return (
    <div>
        <HeroSection/>
        <WelcomeNotes/>
        <AshramDetails/>
        <YogaCourceSection/>
    </div>
  )
}

export default Home
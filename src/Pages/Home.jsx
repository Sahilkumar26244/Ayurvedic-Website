import React from 'react'
import HeroSection from '../Components/HeroSection'
import WelcomeNotes from '../Components/WelcomeNotes'
import AshramDetails from '../Components/AshramDetails'
import YogaCourceSection from '../Components/YogaCourceSection'
import OurTeam from '../Components/OurTeam'
import ContactSection from '../Components/ContactSection'

function Home() {
  return (
    <div>
        <HeroSection/>
        <WelcomeNotes/>
        <AshramDetails/>
        <YogaCourceSection/>
        <OurTeam/>
        <ContactSection/>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from './navbar'
import HeroSection from './hero_section'
import VisionMission from './vision_and_mission'
import AllEvents from './all_events'
import Videos from './videos'
import Testimonials from './testimonials'
import Footer from './footer'
function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <VisionMission></VisionMission>
        <AllEvents></AllEvents>
        <Videos></Videos>
        <Testimonials></Testimonials>
        <Footer></Footer>
    </div>
  )
}

export default Home
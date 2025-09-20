import React from 'react'
import Footer from '../../components/Footer'
import ThreeCardsSection from '../../components/HomeComponents/ThreeCardSection';
import HeroSection from '../../components/HomeComponents/HeroSection';
import UserProfileRecommendations from '../../components/HomeComponents/UserProfileRecommendations';
import Banner from '../../components/HomeComponents/Banner';
import AboutSection from '../../components/HomeComponents/AboutSection';


function Home() {
  return (
    <>
    <HeroSection />
    <ThreeCardsSection />
    <UserProfileRecommendations />
    <Banner/>
    <AboutSection />
    </>
  )
}

export default Home
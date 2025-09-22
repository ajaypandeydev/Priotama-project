import React from 'react'
import Footer from '../../components/Footer'
import ThreeCardsSection from '../../components/HomeComponents/ThreeCardSection';
import HeroSection from '../../components/HomeComponents/HeroSection';
import UserProfileRecommendations from '../../components/HomeComponents/UserProfileRecommendations';
import Banner from '../../components/HomeComponents/Banner';
import AboutSection from '../../components/HomeComponents/AboutSection';
import FAQ from '../../components/HomeComponents/FAQ';


function Home() {
  return (
    <>
    <HeroSection />
    <ThreeCardsSection />
    <UserProfileRecommendations />
    <Banner/>
    <AboutSection />
    <FAQ/>
    </>
  )
}

export default Home
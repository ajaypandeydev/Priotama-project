import React from 'react'
import ThreeCardsSection from '../../components/HomeComponents/ThreeCardSection';
import HeroSection from '../../components/HomeComponents/HeroSection';
import UserProfileRecommendations from '../../components/HomeComponents/UserProfileRecommendations';
import Banner from '../../components/HomeComponents/Banner';
import AboutSection from '../../components/HomeComponents/AboutSection';
import FAQ from '../../components/HomeComponents/FAQ';
import DatingChatBot from '../../components/DatingChatBot';
import HomeitWork from '../../components/HomeComponents/HowItWork'
import HowItWorks from '../../components/HomeComponents/HowItWork';


function Home() {
  return (
    <>
    <HeroSection />
    <ThreeCardsSection />
    <UserProfileRecommendations />
    <Banner/>
    <AboutSection />
    <HowItWorks />
    <FAQ/>
    <DatingChatBot />
    </>
  )
}

export default Home
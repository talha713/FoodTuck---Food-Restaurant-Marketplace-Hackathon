import React from 'react'
import Hero from './component/hero';
import MainPage from './component/mainpage';
import FoodExperienceSection from './component/FoodExperienceSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <MainPage />
      <FoodExperienceSection />
    </div>
    
  );
}


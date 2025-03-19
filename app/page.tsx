"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoSlider from './components/LogoSlider';
import UiDesign from './components/UiDesign';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <UiDesign/>
      {/* <Testimonials/> */}
      <Footer/>

      
    </motion.main>
  );
}

"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';



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
      
    </motion.main>
  );
}

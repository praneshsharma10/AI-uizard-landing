"use client";

import { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";





export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = window.devicePixelRatio * 100; // Gets zoom level as percentage
      setMobileMenuOpen(zoomLevel > 125); // Open menu if zoom > 125%
    };
  
    checkZoom(); // Initial check
    window.addEventListener("resize", checkZoom);
    
    return () => window.removeEventListener("resize", checkZoom);
  }, []);
  

  return (
    <header className="fixed w-full z-50 bg-[#0F0018]/80 backdrop-blur-sm">

      <div className="w-full text-center bg-[#0F0018]/80-to-r from-purple-500 via-indigo-500 to-blue-500 py-2">
        <p className="text-white text-sm">
          <span className="inline-block mr-2">✨</span> 
          Autodesigner 2.0 is here. The most popular UI generator just got even better!
        </p>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
         

              <Image src="/assets/nav-img1.svg" alt="Wizard Miro Labs" width={150} height={40} />
            </Link>
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            <Link href="/" className="text-white hover:text-purple-300 transition">Product</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition">
              <span className="flex items-center">
                <span className="mr-1">✨</span> AI Design
              </span>
            </Link>
            <Link href="/" className="text-white hover:text-purple-300 transition">Templates</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition">Solutions</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition">Blog</Link>
          </motion.nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Link href="/" className="text-white hover:text-purple-300 transition">Pricing</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition">sales</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition">Log in</Link>
            {/* <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
              Sign up for free
            </Link> */}

          <Link
            href="/"
            className="relative px-4 py-2 text-white rounded-md transition bg-[radial-gradient(42.88%_158.65%_at_50%_100%,_rgb(97,_177,_255)_0%,_rgb(30,_144,_255)_100%)] 
            shadow-[inset_0px_1px_1px_rgb(105,181,255),_0px_2px_6px_rgba(3,3,3,0.16)] hover:brightness-110">
            Sign up for free
          </Link>

          </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-purple-300"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#1A0C2A] p-4"
        >
          <nav className="flex flex-col space-y-4">
            <Link href="/product" className="text-white hover:text-purple-300 transition">Product</Link>
            <Link href="/ai-design" className="text-white hover:text-purple-300 transition">
              <span className="flex items-center">
                <span className="mr-1">✨</span> AI Design
              </span>
            </Link>

            <Link href="/templates" className="text-white hover:text-purple-300 transition">Templates</Link>
            <Link href="/solutions" className="text-white hover:text-purple-300 transition">Solutions</Link>
            <Link href="/blog" className="text-white hover:text-purple-300 transition">Blog</Link>
            <Link href="/pricing" className="text-white hover:text-purple-300 transition">Pricing</Link>
            <Link href="/contact" className="text-white hover:text-purple-300 transition">Contact sales</Link>
            <Link href="/login" className="text-white hover:text-purple-300 transition">Log in</Link>
            <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-center transition">
              Sign up for free
            </Link>
          </nav>
        </motion.div>
      )}


      
      
      
    </header>
  );
}
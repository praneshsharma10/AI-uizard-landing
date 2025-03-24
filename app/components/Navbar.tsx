"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [useMobileLayout, setUseMobileLayout] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const checkNavbarSpace = () => {
      if (navRef.current) {

        const containerWidth = navRef.current.offsetWidth;
        setUseMobileLayout(containerWidth < 1000);
      }
    };
    
    checkNavbarSpace();
    
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        checkNavbarSpace();
      });
      
      if (navRef.current) {
        resizeObserver.observe(navRef.current);
      }
      
      return () => {
        if (navRef.current) {
          resizeObserver.unobserve(navRef.current);
        }
      };
    } else {

      window.addEventListener('resize', checkNavbarSpace);
      return () => {
        window.removeEventListener('resize', checkNavbarSpace);
      };
    }
  }, []);



  useEffect(() => {
    if (!useMobileLayout) {
      setMobileMenuOpen(false);
    }
  }, [useMobileLayout]);



  return (
     // <header className="fixed w-full h-auto z-50 bg-[#0F0018]/80 backdrop-blur-sm">

    //   <div className="w-full text-center bg-[#0F0018]/80-to-r from-purple-500 via-indigo-500 to-blue-500 py-2">
    //     <p className="text-white text-sm">
    //       <span className="inline-block mr-2">✨</span> 
    //       Autodesigner 2.0 is here. The most popular UI generator just got even better!
    //     </p>
    //   </div>
    <header className="fixed w-full h-auto z-50 bg-[#0F0018]/80 backdrop-blur-sm">
      <div className="w-full text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 py-2">
        <p className="text-white text-sm">
          <span className="inline-block mr-2">✨</span>
          Autodesigner 2.0 is here. The most popular UI generator just got even better!
        </p>
      </div>

      <div ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {!useMobileLayout && (
            <>
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex space-x-8"
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
                className="flex items-center space-x-4"
              >
                <Link href="/" className="text-white hover:text-purple-300 transition">Pricing</Link>
                <Link href="/" className="text-white hover:text-purple-300 transition">Contact Sales</Link>
                <Link href="/" className="text-white hover:text-purple-300 transition">Log in</Link>
                
                <button
                  className="relative px-4 py-2 text-white rounded-md transition 
                            bg-[radial-gradient(42.88%_158.65%_at_50%_100%,_rgb(97,_177,_255)_0%,_rgb(30,_144,_255)_100%)] 
                            shadow-[inset_0px_1px_1px_rgb(105,181,255),_0px_2px_6px_rgba(3,3,3,0.16)] 
                            hover:bg-blue-400
                            hover:shadow-[inset_0px_1px_1px_rgb(105,181,255),_0px_2px_6px_rgba(3,3,3,0.16)] 
                            hover:brightness-90"
                >
                  Sign up for free
                </button>


              </motion.div>
            </>
          )}

          {useMobileLayout && (
            <div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-purple-300 p-2 rounded"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>



      {useMobileLayout && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="bg-[#1A0C2A] overflow-hidden"
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">Product</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">
              <span className="flex items-center">
                <span className="mr-1">✨</span> AI Design
              </span>
            </Link>
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">Templates</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">Solutions</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">Blog</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">Pricing</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">Contact Sales</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition py-2">Log in</Link>
            <Link href="/" className="bg-[radial-gradient(42.88%_158.65%_at_50%_100%,_rgb(97,_177,_255)_0%,_rgb(30,_144,_255)_100%)] hover:brightness-90 text-white px-4 py-3 rounded-md text-center transition mt-2">
              Sign up for free
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
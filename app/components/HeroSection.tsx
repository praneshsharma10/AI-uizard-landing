"use client";

import { useEffect, useRef } from 'react';
//framer-motion
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });


  const mainControls = useAnimation();
  const bgControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      bgControls.start("visible");
    }
  }, [isInView, mainControls, bgControls]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },

    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const bgVariants: Variants = {
    hidden: { opacity: 0.2 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      ref={ref} 
      className="relative pt-32 pb-24 overflow-hidden px-4 sm:px-6"
    >
      <motion.div
        initial="hidden"
        animate={bgControls}
        variants={bgVariants}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b0764_0%,_#0F0018_60%)]"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto pt-16">
        <div className="text-center mb-16">
          <motion.h1
            custom={0}
            initial="hidden"
            animate={mainControls}
            variants={textVariants}
        //     className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight"
        //   >
            className="text-white text-[2.5rem] leading-[2.5rem] tracking-[-0.4px] text-center font-[540] m-0 whitespace-pre-line font-clash">
            Turn product ideas into
            <br />
            concepts instantly <span className="text-gray-300">with</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              GenAI
            </span>
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate={mainControls}
            variants={textVariants}
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Visualize, communicate, and iterate on wireframes and prototypes in minutes. 
            Empower your product team with AI!
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate={mainControls}
            variants={textVariants}
            className="mt-12 flex justify-center"
          >
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-xl w-full">
              <input
                type="text"
                placeholder="An e-commerce website design for a clothing brand"
                className="w-full p-4 rounded-lg bg-[#201130] border border-purple-900 text-white"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-6 rounded-lg transition whitespace-nowrap flex items-center">
                <span className="mr-2">✨</span> Generate
              </button>
            </div>

          </motion.div>
        </div>


        
      </div>
    </section>
  );
}
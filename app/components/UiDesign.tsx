"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const UiDesign: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="inline-flex items-center bg-purple-900/30 px-4 py-2 rounded-full mb-6">
            <span className="text-white mr-2">✨</span>
            <p className="text-purple-300">AI UI design is here!</p>
          </div> */}
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-full border border-purple-400 bg-gradient-to-r from-black/30 to-gray-600/30 via-purple-500/10">
            <span className="text-white">✨</span>
            <p className="text-white-300">AI UI design is here!</p>
          </div>
          
          <h1 className="pt-8 pb-8 text-[1.625rem] md:text-[2rem] lg:text-[2.5rem] leading-[2rem] md:leading-[2.5rem] lg:leading-[3rem] tracking-tight text-center font-semibold bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            UI design for disruptive product <br/> teams
            
          </h1>
          
          <p className="pb-8 text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] leading-[1.25rem] md:leading-[1.5rem] lg:leading-[1.5rem] tracking-tight text-center font-medium text-gray-100">
            Collaborate in real-time with AI and your entire product team. In Uizard, everyone can contribute to <br/>building the next big thing!
          </p>
          
          <button className="inline-flex text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-purple-700 font-medium py-4 px-6 rounded-lg transition whitespace-nowrap flex items-center">
            Find out more
          </button>
        </motion.div>
      </section>

      
      
    </div>
  );
};

export default UiDesign;
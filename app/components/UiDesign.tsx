"use client";

import React from "react";

import { motion } from "framer-motion";

const UiDesign: React.FC = () => {
  return (
    // min-h-screen 
    <div className="pb-20 bg-black text-white">
      {/* Hero Section */}
      <section className="pb-20 container mx-auto pt-40 text-center">
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
          
          <button className="pt-4 pb-4 inline-flex text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-purple-700 font-medium py-4 px-6 rounded-lg transition whitespace-nowrap flex items-center">
            Find out more
          </button>
        </motion.div>
      </section>







      

      
      
    </div>
  );
};

export default UiDesign;












// <section className="container mx-auto py-20">
// <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, delay: 1.0 }}
//   className="text-center"
// >
//   <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
//     Ready to transform your design workflow?
//   </h2>
//   <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//     Join thousands of teams already using Uizard to design faster, collaborate better, and build amazing products.
//   </p>
//   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//     <button className="inline-flex text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-purple-700 font-medium py-4 px-6 rounded-lg transition whitespace-nowrap items-center">
//       Get started for free
//     </button>
//     <button className="inline-flex text-white bg-transparent border border-purple-500 hover:bg-purple-900/20 font-medium py-4 px-6 rounded-lg transition whitespace-nowrap items-center">
//       See pricing
//     </button>
//   </div>
// </motion.div>
// </section>
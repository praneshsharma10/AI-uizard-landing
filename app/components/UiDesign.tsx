"use client";

import React from "react";

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












// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const UiDesign: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col justify-between">
//       {/* Hero Section */}
//       <section className="container mx-auto py-20 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-full border border-purple-400 bg-gradient-to-r from-black/30 to-gray-600/30 via-purple-500/10">
//             <span className="text-white">✨</span>
//             <p className="text-white-300">AI UI design is here!</p>
//           </div>
          
//           <h1 className="pt-8 pb-8 text-[1.625rem] md:text-[2rem] lg:text-[2.5rem] leading-[2rem] md:leading-[2.5rem] lg:leading-[3rem] tracking-tight text-center font-semibold bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
//             UI design for disruptive product <br/> teams
//           </h1>
          
//           <p className="pb-8 text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] leading-[1.25rem] md:leading-[1.5rem] lg:leading-[1.5rem] tracking-tight text-center font-medium text-gray-100">
//             Collaborate in real-time with AI and your entire product team. In Uizard, everyone can contribute to <br/>building the next big thing!
//           </p>
          
//           <button className="inline-flex text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-purple-700 font-medium py-4 px-6 rounded-lg transition whitespace-nowrap flex items-center">
//             Find out more
//           </button>
//         </motion.div>
//       </section>

//       {/* Design Tool Section */}
//       <section className="my-16 px-4 flex-grow flex items-center">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
//           {/* Left Card - Generate prototypes */}
//           <motion.div 
//             className="rounded-3xl bg-gradient-to-br from-purple-900 to-black p-6 overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Generate prototypes</h2>
//             <p className="text-lg mb-10 opacity-90">
//               No ideas left behind... generate multi-screen, editable prototypes in seconds using simple text.
//             </p>
//             <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-800">
//               <Image 
//                 src="/assets/uidesign-r1c1.webp" 
//                 alt="Autodesigner interface showing a goal tracking app" 
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
          
//           {/* Right Card - Modify components */}
//           <motion.div 
//             className="rounded-3xl bg-black border border-gray-800 p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Modify any component</h2>
//             <p className="text-lg mb-6 opacity-90">
//               Iterate at speed.. Select any component, describe the changes you want, and let Autodesigner do the hard work.
//             </p>
//             <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-800">
//               <Image 
//                 src="/assets/uidesign-r1c2.webp" 
//                 alt="Autodesigner interface showing a goal tracking app" 
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UiDesign;


















// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const UiDesign: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col justify-between">
//       {/* Hero Section */}
//       <section className="container mx-auto py-20 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-full border border-purple-400 bg-gradient-to-r from-black/30 to-gray-600/30 via-purple-500/10">
//             <span className="text-white">✨</span>
//             <p className="text-white-300">AI UI design is here!</p>
//           </div>
          
//           <h1 className="pt-8 pb-8 text-[1.625rem] md:text-[2rem] lg:text-[2.5rem] leading-[2rem] md:leading-[2.5rem] lg:leading-[3rem] tracking-tight text-center font-semibold bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
//             UI design for disruptive product <br/> teams
//           </h1>
          
//           <p className="pb-8 text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] leading-[1.25rem] md:leading-[1.5rem] lg:leading-[1.5rem] tracking-tight text-center font-medium text-gray-100">
//             Collaborate in real-time with AI and your entire product team. In Uizard, everyone can contribute to <br/>building the next big thing!
//           </p>
          
//           <button className="inline-flex text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-purple-700 font-medium py-4 px-6 rounded-lg transition whitespace-nowrap flex items-center">
//             Find out more
//           </button>
//         </motion.div>
//       </section>

//       {/* Design Tool Section */}
//       <section className="my-16 px-8 flex-grow flex items-center">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
//           {/* Left Card - Generate prototypes */}
//           <motion.div 
//             className="rounded-3xl bg-gradient-to-br from-purple-900 to-black p-8 overflow-hidden shadow-xl shadow-purple-900/30 relative"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               backgroundImage: "url('/assets/bg-pattern-left.png')",
//               backgroundSize: "cover",
//               backgroundBlendMode: "overlay"
//             }}
//           >
//             <div className="relative z-10">
//               <h2 className="text-3xl font-bold mb-4">Generate prototypes</h2>
//               <p className="text-lg mb-10 opacity-90">
//                 No ideas left behind... generate multi-screen, editable prototypes in seconds using simple text.
//               </p>
//             </div>
            
//             <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-800 shadow-lg">
//               <Image 
//                 src="/assets/uidesign-r1c1.webp"
//                 alt="Autodesigner interface showing a goal tracking app"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
          
//           {/* Right Card - Modify components */}
//           <motion.div 
//             className="rounded-3xl bg-black border border-gray-800 p-8 overflow-hidden shadow-xl shadow-blue-900/20 relative"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             style={{
//               backgroundImage: "url('/assets/bg-pattern-right.png')",
//               backgroundSize: "cover",
//               backgroundBlendMode: "soft-light"
//             }}
//           >
//             <div className="relative z-10">
//               <h2 className="text-3xl font-bold mb-4">Modify any component</h2>
//               <p className="text-lg mb-6 opacity-90">
//                 Iterate at speed.. Select any component, describe the changes you want, and let Autodesigner do the hard work.
//               </p>
//             </div>
            
//             <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-800 shadow-lg">
//               <Image 
//                 src="/assets/uidesign-r1c2.webp"
//                 alt="Autodesigner interface showing a goal tracking app"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UiDesign;



















//good design -- can add to the landing page


// {/* Call to Action Section */}
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
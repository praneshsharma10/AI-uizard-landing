"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoSlider = () => {
  const logos = [
    "/assets/logo1-atlassian.svg",
    "/assets/logo2-logitech.svg",
    "/assets/logo3-IBM.svg",
    "/assets/logo4-samsung.svg",
    "/assets/logo5-meta.svg",
    "/assets/logo6-uber.svg",
    "/assets/logo7-ingenico.svg",
    "/assets/logo8-accenture.svg",
    "/assets/logo9-adidas.svg",
  ];

  return (
    // <section className="pt-2 py-5 md:py-20 bg-gradient-to-b from-[#0F0018] to-black">
    <section className="pt-0 py-1 md:py-6 bg-gradient-to-b from-[#0F0018] to-black">

      <div className="container">
        <div className="flex flex-col items-center gap-5">
          {/* Header */}
          <h2 className="text-white text-center text-lg md:text-xl font-semibold">
            Trusted by individuals and teams at the world's boldest companies
          </h2>

          {/* Scrolling Logo Section */}
          <div className="flex w-full overflow-hidden relative">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex flex-none gap-20"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="h-10 w-auto flex-none">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={600}
                    height={200}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default LogoSlider;

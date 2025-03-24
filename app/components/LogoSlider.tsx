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

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="pt-0 py-1 md:py-6 bg-gradient-to-b from-black via-black to-[#0A0013]">

      <div className="h-16 bg-gradient-to-b from-transparent to-black -mt-16"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5">
          {/* Header */}
          <h2 className="text-white text-center text-lg md:text-xl font-semibold">
            Trusted by individuals and teams at the worlds boldest companies
          </h2>

          {/* Scrolling Logo Section */}
          <div
            className="relative w-full overflow-hidden mx-4 shadow-xl rounded"
            style={{

              // Create a fade effect on the left/right edges similar to a mask
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <motion.div
              className="flex gap-8 items-center"
              initial={{ translateX: "0%" }}
              animate={{ translateX: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
                  style={{ width: `calc(100% / ${logos.length})` }}
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index % logos.length + 1}`}
                    width={600}
                    height={200}
                    className="object-contain h-full w-auto"
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

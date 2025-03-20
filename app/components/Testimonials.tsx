"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

type SocialPlatform = 'twitter' | 'instagram' | 'linkedin';

type Testimonial = {
  id: number;
  profilePic: string;
  name: string;
  handle: string;
  content: string;
  platform: SocialPlatform;
  verified?: boolean;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    profilePic: "/assets/t1.jpg",
    name: "Sarah Mitchell",
    handle: "@sarahuxdesign",
    platform: "twitter",
    content: "Just watched an AI generate an entire UI from a simple text prompt... This is NEXT LEVEL! 🚀 #GameChanger #UX"
  },
  {
    id: 2,
    profilePic: "/assets/t2.jpg",
    name: "Jake Thompson",
    handle: "@jakedev",
    platform: "twitter",
    verified: true,
    content: "I was skeptical at first, but this AI-powered UI assistant just saved me HOURS of work. Auto-generating wireframes and mockups in seconds? Insane! 🔥"
  },
  {
    id: 3,
    profilePic: "/assets/t3.jpg",
    name: "Elena Carter",
    handle: "@elena.designs",
    platform: "instagram",
    verified: true,
    content: "Can't believe how smooth the AI is at turning hand-drawn sketches into polished UI mockups. As a designer, this feels like having a superpower! 💡✨"
  },
  {
    id: 4,
    profilePic: "/assets/t4.jpg",
    name: "David Kim",
    handle: "David Kim",
    platform: "linkedin",
    verified: true,
    content: "PMs, if you're struggling to communicate design ideas with your team, THIS is the tool you need. I went from idea to interactive prototype in under a minute. 🚀"
  },
  {
    id: 5,
    profilePic: "/assets/t5.jpg",
    name: "Jason Lee",
    handle: "@jasonuiux",
    platform: "instagram",
    verified: true,
    content: "AI-powered UI design is no longer just a gimmick. This tool can transform screenshots into editable wireframes and generate components instantly. Absolute game-changer! 🔥"
  },
  {
    id: 6,
    profilePic: "/assets/t6.jpg",
    name: "Maya Patel",
    handle: "@maya_ux",
    platform: "instagram",
    verified: true,
    content: "I'm always racing against deadlines, but this AI just made my workflow 10x faster. Wireframing, copywriting, even predicting where users will focus - all in one tool. Incredible! 🚀"
  },
  {
    id: 7,
    profilePic: "/assets/t7.jpg",
    name: "Chris Johnson",
    handle: "@chrisui",
    platform: "twitter",
    content: "The way AI is evolving UI design is mind-blowing. Just tested this tool, and I can't believe how effortlessly it creates responsive layouts. 🔥"
  },
  {
    id: 8,
    profilePic: "/assets/t8.jpg",
    name: "Anonymous",
    handle: "",
    platform: "twitter",
    content: "I thought AI tools were just hype, but this one actually delivers. Auto-generating full app designs in minutes? Crazy!"
  },
  {
    id: 9,
    profilePic: "/assets/t9.jpg",
    name: "Lisa Wong",
    handle: "@lisawongdesign",
    platform: "instagram",
    content: "Figma + AI-generated design components = the future of UI/UX. This is the biggest leap in design workflows I’ve seen in years! 🎨💡"
  }
];




const Testimonials = () => {
    return (
      <section className="pr-px pl-px pt-5 bg-black overflow-hidden">
        <div className="pr-px pl-px max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl text-white mb-16">
            What our customers say about us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col, i) => (
              <InfiniteScrollColumn 
                key={i} 
                testimonials={col} 
                scrollSpeed={25} 
                delay={1000} 


              />
            ))}
          </div>
        </div>
      </section>
    );
  };



// matrix
const leftColumn = [testimonials[0], testimonials[3], testimonials[6]];
const middleColumn = [testimonials[7], testimonials[1], testimonials[4]];
const rightColumn = [testimonials[8], testimonials[2], testimonials[5]];

const columns = [leftColumn, middleColumn, rightColumn];

const getPlatformIcon = (platform: SocialPlatform) => {
  switch (platform) {
    case 'twitter':
      return <FaTwitter className="text-gray-400" />;

    case 'instagram':
      return <FaInstagram className="text-gray-400" />;
    case 'linkedin':
      return <FaLinkedin className="text-gray-400" />;
  }
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {

  const formattedContent = testimonial.content.replace(/✦/g, '•');
  
  return (
    <div className="p-6 rounded-xl bg-black border border-gray-800 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={testimonial.profilePic}
              alt={testimonial.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <p className="text-white font-medium text-sm">{testimonial.name}</p>
              {testimonial.verified && (
                <span className="text-blue-400 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53-1.704-1.705a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
            {testimonial.handle && (
              <p className="text-gray-500 text-xs">{testimonial.handle}</p>
            )}
          </div>
        </div>
        <div className="text-lg">
          {getPlatformIcon(testimonial.platform)}
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {testimonial.content.includes("✦") ? (
          formattedContent.split("•").map((point, index) => (
            index === 0 ? point : (
              <React.Fragment key={index}>
                <br />
                <span className="flex items-start gap-2 mt-2">
                  <span className="text-amber-400 text-lg">✦</span>
                  <span>{point.trim()}</span>
                </span>
              </React.Fragment>
            )
          ))
        ) : (
          formattedContent
        )}
      </p>
    </div>
  );
};

const InfiniteScrollColumn: React.FC<{ testimonials: Testimonial[], scrollSpeed?: number, delay?: number }> = ({ 
  testimonials, 
  scrollSpeed = 15, 
  delay = 0 
}) => {
  const controls = useAnimationControls();
  const [height, setHeight] = useState(0);
  
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const measureHeight = () => {
      const columnElement = document.querySelector('.testimonial-column');
      if (columnElement) {
        const cardHeight = columnElement.scrollHeight / 3; 
        setHeight(cardHeight);
        
        timeout = setTimeout(() => {
          controls.start({
            y: -cardHeight,
            transition: {
              duration: scrollSpeed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }
          });
        }, delay);
      }
    };
    

    requestAnimationFrame(() => {
      measureHeight();
    });
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [controls, scrollSpeed, delay]);

  return (
    <div className="relative overflow-hidden h-[800px]">
     
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      
      
      <motion.div 
        className="testimonial-column"
        animate={controls}
        onAnimationComplete={() => {
          

          controls.set({ y: 0 });
          controls.start({
            y: -height,
            transition: {
              duration: scrollSpeed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }
          });
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`${testimonial.id}-${index}`} 
            testimonial={testimonial} 
          />
        ))}
      </motion.div>
      
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};



export default Testimonials;
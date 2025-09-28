'use client'

import { motion, } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { fadeIn } from "../../../utils/animations";
import {UserIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
const HeroText = () => {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);
  //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //     const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

    // Download CV function
  const downloadCV = () => {
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = '/cv/AQ_Developer_CV.pdf'; // Put your CV in public/cv folder
    link.download = 'AQ_Developer_CV.pdf';
    link.click();
  };

  const typingTexts = useMemo(() => [
    "Full Stack Web Developer",
    "Next.js Specialist", 
    "MERN Stack Developer",
    "TypeScript Expert",
  ], []);

  // Typewriter Effect
  useEffect(() => {
    const currentText = typingTexts[currentTypeIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          setTypeSpeed(100 + Math.random() * 100);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          setTypeSpeed(50);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTypeIndex((prev) => (prev + 1) % typingTexts.length);
          setTypeSpeed(200);
        }
      }
    };

    const timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTypeIndex, typeSpeed, typingTexts]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);


  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center relative ">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtitle with Enhanced Animation */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey relative"
      >
        <motion.span
          className="inline-block"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'linear-gradient(90deg, #000000, #1a1a1a, #2a2a2a, #000000)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Full Stack Web Developer
        </motion.span>
        
        {/* Floating particles around subtitle */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${50}%`
            }}
          />
        ))}
      </motion.h2>

      {/* Main Name with 3D Effect */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-4xl sm:text-2xl font-bold uppercase relative"
      >
        <motion.span>
         Ridoy Islam Nasim
        </motion.span>

        {/* 3D Shadow Effect */}
        <motion.span
          className="absolute inset-0  bg-clip-text text-transparent blur-sm -z-10"
          animate={{
            x: [0, 2, 0],
            y: [0, 2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >

        </motion.span>
      </motion.h1>

      {/* Dynamic Typewriter Text */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 relative"
      >
        {/* Typewriter Container */}
        <motion.div 
          className="min-h-[3rem] flex flex-col justify-center "
          layout
        >
          <motion.h1
            className="text-2xl md:text-3xl font-bold mb-2"
            layout
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0.1 }}
              className="text-orange-500 font-normal ml-1"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Description with Reveal Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              I specialize in building{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
            >
              modern, scalable, and secure
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {" "}web applications using{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="font-medium text-orange-500"
            >
              Next.js, React, Node.js, TypeScript, and MongoDB.
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="flex md:flex-row flex-col gap-4 mt-6 md:max-w-[600px]">
                    {/* Hire Me */}
                    <motion.a
                      href="/contact"
                      className="flex items-center justify-center py-2.5 px-5 bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white font-medium rounded-lg transition-all duration-300 group relative overflow-hidden flex-1"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-pink-500/90"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="flex items-center space-x-2 relative z-10">
                        <span>Hire Me</span>
                        <UserIcon className="h-4 w-4" />
                      </span>
                    </motion.a>

                    {/* Download CV */}
                    <motion.button
                      onClick={downloadCV}
                      className="flex items-center justify-center py-2.5 px-5 border border-green-400 text-green-500 dark:text-green-400 font-medium rounded-lg transition-all duration-300 flex-1 group relative overflow-hidden"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-green-50 dark:bg-green-500/10 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <span className="flex items-center space-x-2 relative z-10">
                        <span>Download CV</span>
                        <DocumentArrowDownIcon className="h-4 w-4" />
                        <motion.div
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{
                            y: [0, -6, 0],
                            opacity: [0, 1, 0],
                            scale: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </span>
                    </motion.button>
                  </div>

      {/* Floating Achievement Badges */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute right-0 top-20 hidden lg:block"
      >
        {[
          { text: "3+ Years", subtext: "Experience", color: "from-green-500 to-emerald-500" },
          { text: "50+", subtext: "Projects", color: "from-blue-500 to-cyan-500" },
          { text: "100%", subtext: "Satisfaction", color: "from-purple-500 to-pink-500" }
        ].map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 3.2 + (index * 0.2), 
              duration: 0.6,
              type: "spring"
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
            className={`mb-4 p-4 rounded-2xl bg-gradient-to-r ${badge.color} text-white text-center backdrop-blur-sm border border-white/20 cursor-pointer`}
            style={{
              transform: `translateX(${index * 10}px) rotate(${index * 5 - 5}deg)`
            }}
          >
            <motion.div
              className="font-bold text-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
              {badge.text}
            </motion.div>
            <div className="text-sm opacity-90">{badge.subtext}</div>
          </motion.div>
        ))}
      </motion.div> */}
    </div>
  );
};

export default HeroText;

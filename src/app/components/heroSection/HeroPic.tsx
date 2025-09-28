'use client'

import { motion } from "framer-motion";
import { PiHexagonThin } from "react-icons/pi";
import { FaReact, FaNodeJs, FaGithub, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, SiFramer, SiJavascript } from "react-icons/si";
import profileImg from "../../../assets/bgimg.png";
import Image from "next/image";

const techStack = [
  // Top Section
  { Icon: SiNextdotjs, position: "-top-15  left-30 md:left-48", delay: 0 },
  { Icon: FaReact, position: "-top-15 ", delay: 0.4 },
  { Icon: SiTypescript, position: "-top-15  -right-1", delay: 0.8 },

  // Right Section
  { Icon: FaNodeJs, position: "-right-20 top-1/8", delay: 1.2 },
  { Icon: SiMongodb, position: "-right-20 top-3/4", delay: 1.6 },

  // Left Section
  { Icon: SiRedux, position: "-left-20 top-1/8", delay: 2.0 },
  { Icon: SiTailwindcss, position: "-left-20 top-3/4", delay: 2.4 },

  // Bottom Section
  { Icon: SiJavascript, position: "-bottom-15 left-30 md:left-48", delay: 2.8 },
  { Icon: FaHtml5, position: "-bottom-15 ", delay: 3.2 },
  { Icon: FaCss3Alt, position: "-bottom-15  -right-0", delay: 3.6 },

  // Extra Corners
  { Icon: SiFramer, position: "top-1/2 -translate-y-1/2 -right-20", delay: 4.0 },
  { Icon: FaGithub, position: "top-1/2 -translate-y-1/2 -left-20", delay: 4.4 },
];



const HeroPic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center relative"
    >
      <div className="relative">
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-orange to-cyan rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full shadow-inner-custom pointer-events-none z-10"></div>
          <Image 
            src={profileImg} 
            alt="Profile Image" 
            fill
            priority
            sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
            quality={100}
            className="rounded-full object-cover object-center hover:scale-105 transition-transform duration-500"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>

        {techStack.map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} z-10`}
            initial={{ opacity: 1, y: 0 }}
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
              }
            }}
          >
            <Icon className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 hover:scale-110
              ${Icon === SiNextdotjs ? 'text-[#000000] dark:text-white' : ''}
              ${Icon === FaReact ? 'text-[#61DAFB]' : ''}
              ${Icon === SiTypescript ? 'text-[#3178C6]' : ''}
              ${Icon === FaNodeJs ? 'text-[#339933]' : ''}
              ${Icon === SiMongodb ? 'text-[#47A248]' : ''}
              ${Icon === SiRedux ? 'text-[#764ABC]' : ''}
              ${Icon === SiTailwindcss ? 'text-[#06B6D4]' : ''}
              ${Icon === SiJavascript ? 'text-[#F7DF1E]' : ''}
              ${Icon === FaHtml5 ? 'text-[#E34F26]' : ''}
              ${Icon === FaCss3Alt ? 'text-[#1572B6]' : ''}
              ${Icon === SiFramer ? 'text-[#0055FF]' : ''}
              ${Icon === FaGithub ? 'text-[#181717] dark:text-white' : ''}
            `} />
          </motion.div>
        ))}
      </div>

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:min-h-[600px] min-h-[400px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};


export default HeroPic;

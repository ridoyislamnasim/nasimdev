'use client'
import Link from 'next/link'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, UserIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // const [ setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname(); // Active route detection

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse position tracking for magnetic effect
  useEffect(() => {
    // const handleMouseMove = (e: MouseEvent) => {
    //   // setMousePosition({ x: e.clientX, y: e.clientY });
    // };

    // window.addEventListener('mousemove', handleMouseMove);
    // return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Download CV function
  const downloadCV = () => {
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = '/cv/AQ_Developer_CV.pdf'; // Put your CV in public/cv folder
    link.download = 'AQ_Developer_CV.pdf';
    link.click();
  };

  const menuItems = [
    { href: '/', label: 'Home', gradient: 'from-blue-500 to-cyan-500' },
    { href: '/about', label: 'About', gradient: 'from-purple-500 to-pink-500' },
    { href: '/projects', label: 'Projects', gradient: 'from-green-500 to-emerald-500' },
    { href: '/blogs', label: 'Blogs', gradient: 'from-orange-500 to-red-500' },
    { href: '/contact', label: 'Contact', gradient: 'from-indigo-500 to-purple-500' },
  ];

  // Check if current route is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'fixed w-full z-50 transition-all duration-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl px-2 sm:px-4 lg:px-6' 
          : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl'
      } px-2 sm:px-4 lg:px-6`}
    >
      {/* Background Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%'
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className={`flex items-center justify-between transition-all duration-700 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Logo Section with Magnetic Effect */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link href="/" className="relative group block">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated Logo Text */}
                <motion.div
                  className={`relative font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-500 ${
                    scrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                  }`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  &lt;AQ.Dev/&gt;
                </motion.div>

                {/* Floating Particles - Fixed overflow */}
                <div className="relative w-20 h-8 overflow-visible hidden sm:block">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${i * 8}px`,
                        top: `${i * 3}px`
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Dynamic Underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ 
                  width: "100%", 
                  opacity: 1,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
          
          {/* Desktop Menu with Liquid Animations */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                className="relative overflow-visible" // Fixed overflow for animations
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link 
                  href={item.href} 
                  className="relative px-6 py-2 rounded-xl transition-all duration-500 group flex items-center space-x-2 overflow-visible"
                >
                  {/* Active State Indicator */}
                  {isActive(item.href) && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-90 rounded-xl shadow-lg`}
                      layoutId="activeTab"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  )}

                  {/* Morphing Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-xl`}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{
                      scale: hoveredItem === item.label ? 1 : 0,
                      rotate: hoveredItem === item.label ? 0 : 180,
                      opacity: hoveredItem === item.label ? 0.1 : 0
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />

                  {/* Enhanced Text with Better Active State */}
                  <motion.span 
                    className={`relative font-semibold transition-all duration-300 ${
                      isActive(item.href)
                        ? `text-white font-bold drop-shadow-lg` // White text for active state
                        : hoveredItem === item.label 
                          ? `bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent` 
                          : 'text-gray-700 dark:text-gray-300'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 8px rgba(147, 51, 234, 0.3)"
                    }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Active State Pulse */}
                  {isActive(item.href) && (
                    <motion.div
                      className={`absolute -right-1 -top-1 w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* Liquid Drop Effect - Fixed overflow */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 overflow-visible">
                    <motion.div
                      className={`w-1 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
                      animate={hoveredItem === item.label ? {
                        scale: [1, 3, 1],
                        opacity: [1, 0.3, 1],
                        x: [0, 10, 0],
                        y: [0, -5, 0]
                      } : {}}
                      transition={{
                        duration: 1,
                        repeat: hoveredItem === item.label ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Hire Me Button with Icon */}
            <motion.a
              href="/contact"
              className="relative px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              
              {/* Button Text with Icon */}
              <motion.span 
                className="relative z-10 flex items-center space-x-2"
                whileHover={{ x: 2 }}
              >
                <span className='text-sm'>Hire Me</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <UserIcon className="h-4 w-4" />
                </motion.div>
              </motion.span>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-50 -z-10"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Download CV Button with Icon */}
            <motion.button
              onClick={downloadCV}
              className="relative px-4 py-2 border-2 border-green-500 text-green-600 dark:text-green-400 font-semibold rounded-xl overflow-hidden group transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                borderColor: '#10b981'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Fill */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Button Content with Icon */}
              <motion.div 
                className="relative z-10 flex items-center space-x-2"
                whileHover={{ x: 2 }}
              >
                <span className='text-sm'>Download CV</span>
                <motion.div
                  animate={{ 
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <DocumentArrowDownIcon className="h-4 w-4" />
                </motion.div>
              </motion.div>

              {/* Download Animation Effect */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"
                animate={{
                  y: [0, 30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            {/* Enhanced Theme Toggle with Day/Night Effects */}
            <motion.button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl transition-all duration-500 group overflow-hidden"
              whileHover={{ 
                scale: 1.1,
                boxShadow: theme === 'dark' 
                  ? "0 20px 40px rgba(251, 191, 36, 0.3)" 
                  : "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Day/Night Background */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  background: theme === 'dark' 
                    ? "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)" // Day colors
                    : "linear-gradient(135deg, #1e293b, #0f172a, #020617)", // Night colors
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  background: { duration: 0.8 },
                  scale: { duration: 2, repeat: Infinity }
                }}
              />

              {/* Icon Container without rotation */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center justify-center relative"
                    >
                      <SunIcon className="h-5 w-5 text-white drop-shadow-lg" />
                      
                      {/* Sun Rays - Static */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-0.5 h-2 bg-yellow-300 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            scale: { duration: 1.5, repeat: Infinity },
                            opacity: { duration: 2, repeat: Infinity }
                          }}
                          style={{
                            transformOrigin: 'center 12px',
                            transform: `rotate(${i * 45}deg)`
                          }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center justify-center relative"
                    >
                      <MoonIcon className="h-5 w-5 text-blue-200 drop-shadow-lg" />
                      
                      {/* Moon Glow */}
                      <motion.div
                        className="absolute inset-0 bg-blue-400/30 rounded-full blur-md"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Stars - Static positions */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={`star-${i}`}
                          className="absolute w-0.5 h-0.5 bg-white rounded-full"
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                          style={{
                            left: `${Math.cos(i * 90 * Math.PI / 180) * 15 + 50}%`,
                            top: `${Math.sin(i * 90 * Math.PI / 180) * 15 + 50}%`
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-white/30"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.3, 1.6],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.button>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Action Buttons (Tablet and up) */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Mobile Hire Me */}
              <motion.a
                href="/contact"
                className="relative px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="relative z-10 flex items-center space-x-1"
                >
                  <span className='text-xs'>Hire</span>
                  <UserIcon className="h-4 w-4" />
                </motion.span>
              </motion.a>

              {/* Mobile Download CV */}
              <motion.button
                onClick={downloadCV}
                className="relative px-3 py-2 border-2 border-green-500 text-green-600 dark:text-green-400 font-semibold rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span className='text-xs'>CV</span>
                  <DocumentArrowDownIcon className="h-4 w-4" />
                </span>
              </motion.button>

              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative p-2 rounded-lg transition-all duration-500 group overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: theme === 'dark' 
                    ? "linear-gradient(135deg, #fbbf24, #f59e0b)" 
                    : "linear-gradient(135deg, #1e293b, #0f172a)"
                }}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="mobile-sun"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <SunIcon className="h-4 w-4 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mobile-moon"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MoonIcon className="h-4 w-4 text-gray-100" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="relative p-3 rounded-xl transition-all duration-300 overflow-hidden"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Morphing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-xl"
                animate={{
                  scale: isMobileMenuOpen ? [1, 1.2, 1] : 1,
                  rotate: isMobileMenuOpen ? [0, 360] : 0
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Morphing Icon */}
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-blue-600" />
                )}
              </motion.div>

              {/* Ripple Effect */}
              {isMobileMenuOpen && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-blue-500"
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.5, 0.2, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with Fixed Height and Scroll */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.9 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden fixed left-0 right-0 top-20 z-40"
              style={{ maxHeight: 'calc(100vh - 80px)' }}
            >
              <motion.div 
                className="mx-4 mb-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl relative overflow-hidden"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '400% 400%'
                  }}
                />

                {/* Mobile Menu Content */}
                <div className="p-6 relative z-10 space-y-4">
                  {/* Menu Items in Desktop Style */}
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1, 
                          duration: 0.5
                        }}
                      >
                        <Link
                          href={item.href}
                          className="relative block px-4 py-3 rounded-xl transition-all duration-500 group overflow-visible"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {/* Desktop Style Active State */}
                          {isActive(item.href) && (
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-90 rounded-xl shadow-lg`}
                              layoutId="activeMobileTab"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.5 }}
                            />
                          )}

                          {/* Hover Background */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-xl`}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                          />

                          <div className="flex items-center justify-between relative z-10">
                            <motion.span 
                              className={`font-semibold transition-all duration-300 ${
                                isActive(item.href)
                                  ? `text-white font-bold drop-shadow-lg`
                                  : 'text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600'
                              }`}
                            >
                              {item.label}
                            </motion.span>

                            {/* Active State Pulse */}
                            {isActive(item.href) && (
                              <motion.div
                                className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full`}
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [1, 0.7, 1]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            )}

                            {/* Hover Indicator */}
                            {!isActive(item.href) && (
                              <motion.div
                                className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full opacity-50`}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  x: [0, 3, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50 space-y-3">
                    {/* Mobile Hire Me */}
                    <motion.a
                      href="/contact"
                      className="flex items-center justify-center py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="flex items-center space-x-2 relative z-10">
                        <span>Hire Me</span>
                        <UserIcon className="h-5 w-5" />
                      </span>
                    </motion.a>

                    {/* Mobile Download CV */}
                    <motion.button
                      onClick={() => {
                        downloadCV();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center py-3 px-6 border-2 border-green-500 text-green-600 dark:text-green-400 font-semibold rounded-xl transition-all duration-300 w-full group relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="flex items-center space-x-2 relative z-10">
                        <span>Download CV</span>
                        <DocumentArrowDownIcon className="h-5 w-5" />
                        <motion.div
                          className="w-1 h-1 bg-green-500 rounded-full ml-2"
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </span>
                    </motion.button>

                    {/* Mobile Theme Toggle - Desktop Style */}
                    <motion.button
                      onClick={() => {
                        toggleTheme();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between py-3 px-6 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 w-full group relative overflow-hidden"
                    >
                      <span className="font-semibold">
                        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                      </span>
                      <motion.div
                        className="relative p-2 rounded-lg overflow-hidden"
                        style={{
                          background: theme === 'dark' 
                            ? "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)" 
                            : "linear-gradient(135deg, #1e293b, #0f172a, #020617)"
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AnimatePresence mode="wait">
                          {theme === 'dark' ? (
                            <motion.div
                              key="mobile-menu-sun"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ duration: 0.5 }}
                              className="relative"
                            >
                              <SunIcon className="h-5 w-5 text-white" />
                              {/* Mobile Sun Rays */}
                              {[...Array(4)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-0.5 h-2 bg-yellow-300 rounded-full"
                                  animate={{
                                    opacity: [0.5, 1, 0.5]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                  }}
                                  style={{
                                    transformOrigin: 'center 12px',
                                    transform: `rotate(${i * 90}deg)`
                                  }}
                                />
                              ))}
                            </motion.div>
                          ) : (
                            <motion.div
                              key="mobile-menu-moon"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ duration: 0.5 }}
                              className="relative"
                            >
                              <MoonIcon className="h-5 w-5 text-gray-100" />
                              {/* Mobile Stars */}
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={`mobile-star-${i}`}
                                  className="absolute w-0.5 h-0.5 bg-white rounded-full"
                                  animate={{
                                    opacity: [0, 1, 0]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.4
                                  }}
                                  style={{
                                    left: `${70 + i * 10}%`,
                                    top: `${20 + i * 15}%`
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
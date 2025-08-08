import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Enhanced gradient animation variants with more colors
  const gradientVariants = {
    animate: {
      background: [
        "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        "linear-gradient(135deg, #1a365d 0%, #2d3748 50%, #4a5568 100%)",
        "linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #718096 100%)",
        "linear-gradient(135deg, #1a365d 0%, #2d3748 50%, #1a365d 100%)",
        "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
      ],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Content animation variants with staggered entrance
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Button hover animations
  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        variants={gradientVariants}
        animate="animate"
      />
      
      {/* Content with enhanced animations */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          variants={itemVariants}
        >
          Yumemi
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          A dreamy mobile world for collaborative roleplay and storytelling
        </motion.p>
        
        <motion.p 
          className="text-lg text-white/80 mb-12 max-w-xl mx-auto"
          variants={itemVariants}
        >
          Immerse yourself in enchanting realms where imagination meets reality. 
          Create characters, explore worlds, and build stories together.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button 
            className="dreamy-button text-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Join the Beta
          </motion.button>
          <motion.button 
            className="dreamy-button-secondary text-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>
        </motion.div>
        
        {/* iOS Badge with enhanced hover */}
        <motion.div 
          className="mt-12"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 text-white/90"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(0, 0, 0, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-2xl">📱</span>
            <span className="font-medium">iOS Only • TestFlight</span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 
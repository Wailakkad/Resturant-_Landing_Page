import React from 'react';
import { motion } from 'framer-motion';
import FoodIconImg from "../../images/kebab.png";
import HeroImg from "../../images/nachos.png";
import About_us from '../About_us/About_us';
import Popular from '../Popular/Popular';
import Action from '../Action/Action';
import Subscribe from '../Subscribe/Subscribe';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
   <>
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-12 px-4 md:px-8 lg:px-12 min-h-screen mt-16 gap-8 lg:gap-0"
      >
        {/* Left Section with Title and Description */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full lg:max-w-4xl text-center lg:text-left"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 leading-snug"
            variants={fadeInUp}
          >
            Enjoy Delicious <br />
            <motion.div 
              className="flex items-center justify-center lg:justify-start"
              variants={scaleIn}
            >
              <motion.img 
                src={FoodIconImg} 
                width={80} 
                height={80} 
                alt="Kebab Food" 
                className="md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-7xl"
                variants={fadeInUp}
              >
                Kabab Food
              </motion.h1>
            </motion.div>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-gray-600 mt-2 md:mt-4 max-w-xl"
            variants={fadeInUp}
          >
            After a good dinner, one can forgive anybody, even one.
          </motion.p>
          <motion.button 
            className="bg-orange-500 text-white font-bold rounded-lg px-6 md:px-8 py-2.5 md:py-3 mt-4 md:mt-6 hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </motion.div>

        {/* Right Section with Hero Image and Animated Background */}
        <motion.div 
          className="flex items-center justify-center w-full relative mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animated background blur effect */}
          <div className="absolute inset-0 -z-10 animate-blob scale-75 md:scale-90 lg:scale-100">
            <motion.div 
              className="absolute top-0 -left-1 w-72 h-72 bg-[#606c38] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.5, 0.7] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute top-0 -right-2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.7, 0.5] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-16 -right-6 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob mr-16"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.5, 0.7] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
          <motion.img 
            src={HeroImg} 
            alt="Nachos" 
            className="rounded-lg relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
      <About_us/>
      <Popular/>
      <Action/>
      <Subscribe/>
   </>
  );
};

export default Hero;
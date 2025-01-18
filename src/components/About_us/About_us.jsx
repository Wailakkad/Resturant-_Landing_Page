import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PlacIcon from "../../images/play-button.png";
import SaladImage from "../../images/salad.png";
import IconSalad from "../../images/spinach.png";

const About_us = () => {
  // Refs for scroll monitoring
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when in view

  // Animation Variants
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} id='about' className="bg-white py-16 px-6">
      {/* Section Container */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-16 flex-col lg:flex-row">
        
        {/* Left Side - Image Section */}
        <motion.div 
          className="flex-1"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariant}
        >
          <img 
            src={SaladImage} 
            alt="Healthy Salad" 
            className="rounded-lg" 
          />
        </motion.div>
        
        {/* Right Side - Text and Details Section */}
        <motion.div 
          className="flex-1 flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariant}
        >
          {/* Title */}
          <motion.h1 
            id="mini-tittre" 
            className="text-4xl font-bold text-gray-800 mb-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariant}
          >
            About Us
          </motion.h1>
          
          {/* Description Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2">
              <motion.p 
                className="text-4xl text-gray-700 font-medium"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariant}
              >
                We Provide
              </motion.p>
              <motion.img 
                src={IconSalad} 
                alt="Salad Icon" 
                className="w-16 h-16"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={imageVariant}
              />
            </div>
            <motion.p 
              className="text-4xl text-gray-800 font-semibold"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariant}
            >
              Healthy and Nutritious Food
            </motion.p>
          </div>
          
          {/* Description of the Brand */}
          <motion.div 
            className="text-gray-600"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariant}
          >
            <p className="text-lg leading-relaxed mb-6">
              At Saladuxe, we believe in the power of healthy eating. Our mission is to offer fresh, delicious, and nutritious meals that fuel your body and mind.
              Every dish is carefully crafted with the finest ingredients to ensure you get the nutrients you need while enjoying every bite.
            </p>
          </motion.div>

          {/* Explore More Section */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer text-orange-500 hover:text-orange-600"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={textVariant}
          >
            <img src={PlacIcon} alt="Play Icon" className="w-8 h-8" />
            <h2 className="text-lg font-semibold">Explore More About Us</h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About_us;

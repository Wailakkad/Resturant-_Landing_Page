import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion
import IMG from "../../images/french-fries.png";
import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <div className="py-16 px-6 flex items-center justify-center">
      <motion.div 
        className="bg-black shadow-lg rounded-lg p-8 max-w-[900px] w-full flex items-center justify-between space-x-8"
        initial={{ opacity: 0, x: -50 }} // Start off-screen (from left)
        whileInView={{ opacity: 1, x: 0 }} // Animate when in view
        transition={{ duration: 1 }} // Duration of animation
        viewport={{ once: true }} // Trigger the animation only once when the component comes into view
      >
        {/* Left Image Section */}
        <div className="flex-shrink-0">
          <motion.img
            src={IMG} 
            alt="French Fries"
            width={290} 
            height={290}
            initial={{ opacity: 0, scale: 0.8 }} // Start scaled down and invisible
            whileInView={{ opacity: 1, scale: 1 }} // Scale and fade in when in view
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Subscription Text Section */}
        <div className="flex flex-col items-start">
          <motion.h1 
            className="text-3xl font-semibold text-orange-500 mb-4"
            initial={{ opacity: 0, y: 30 }} // Start below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Animate into place
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Subscribe
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white mb-6"
            initial={{ opacity: 0, y: 30 }} // Start below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Animate into place
            transition={{ duration: 1, delay: 0.2 }} // Slight delay
            viewport={{ once: true }}
          >
            Stay updated with the latest news and offers. Subscribe now!
          </motion.p>

          {/* Email Input and Subscribe Button */}
          <div className="flex items-center w-full space-x-3">
           
            <motion.button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              initial={{ opacity: 0 }} // Start invisible
              whileInView={{ opacity: 1 }} // Fade in when in view
              transition={{ duration: 1, delay: 0.6 }} // Delay to sync with input
              viewport={{ once: true }}
            >
             <Link to="/contact" className="block w-full h-full">
                     Subscribe
              </Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Subscribe;

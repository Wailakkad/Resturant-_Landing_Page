import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion
import ImgAction from "../../images/waiter.png";

const Action = () => {
  return (
    <div className="bg-gray-100 py-16 px-16 lg:flex lg:items-center lg:justify-between ">
      {/* Text Content */}
      <motion.div 
        className="max-w-screen-lg mx-auto text-center lg:text-left lg:w-1/2 lg:pr-16 ml-12"
        initial={{ opacity: 0, y: 30 }} // Start off-screen (from bottom)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1 }} // Duration of animation
        viewport={{ once: true }} // Trigger the animation only once when the component comes into view
      >
        <h1 id="mini-tittre" className="text-4xl font-bold text-gray-800 mb-4">Take Action Now!</h1>
        <h2 className="text-2xl text-gray-700 mb-6">
          Indulge in Kabab, Tacos, and Healthy Salads
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          If you love good food and enjoy eating, don't miss out on our delicious menu offerings. 
          We provide a wide range of options that cater to every palate.
        </p>
        <motion.button 
          className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
          initial={{ opacity: 0 }} // Initial state
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 0.8, delay: 0.5 }} // Delay to sync with text animation
          viewport={{ once: true }} // Trigger the animation only once when the component comes into view
        >
          Contact Us Now
        </motion.button>
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-16 flex justify-center"
        initial={{ opacity: 0, x: 50 }} // Start off-screen (from right)
        whileInView={{ opacity: 1, x: 0 }} // Animate when in view
        transition={{ duration: 1, delay: 0.7 }} // Delay to sync with text and button animation
        viewport={{ once: true }} // Trigger the animation only once when the component comes into view
      >
        <img src={ImgAction} alt="Waiter serving food" className="w-full lg:max-w-lg"/>
      </motion.div>
    </div>
  );
};

export default Action;

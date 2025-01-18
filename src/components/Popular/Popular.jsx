import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SaladImage from "../../images/SaladImage.png";
import TacosImage from "../../images/Tacos.png";
import HumberImage from "../../images/HumberGer.png";

const Popular = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Animation triggers when section enters the viewport

  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3, // Adds delay between children animations
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const Data = [
    {
      img: SaladImage,
      title: "Fresh Salad",
      description: "A refreshing mix of the finest greens, topped with healthy ingredients. Perfect for a light and nutritious meal.",
    },
    {
      img: TacosImage,
      title: "Tasty Tacos",
      description: "Delicious tacos filled with fresh ingredients and bold flavors, wrapped in soft tortillas. A treat for your taste buds.",
    },
    {
      img: HumberImage,
      title: "Juicy Burger",
      description: "A classic, mouthwatering burger with all the toppings you love. A hearty, satisfying meal for any craving.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden py-20 px-6"
    >
      {/* Animated background blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[200px] h-[200px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[200px] h-[200px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      {/* Section Header */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariant}
        className="text-center mb-16 relative"
      >
        <h2 id="mini-tittre" className="text-5xl font-bold text-gray-800 mb-4">
          Our Popular Dishes
        </h2>
        <motion.div
          variants={itemVariant}
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
        ></motion.div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the most loved dishes from our menu, prepared with the freshest ingredients.
        </p>
      </motion.div>

      {/* Popular Dishes Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariant}
      >
        {Data.map((dish, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            className="group relative border-2 border-black bg-[#faedcd] backdrop-blur-sm bg-opacity-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden flex items-center justify-center mt-6">
              <img
                src={dish.img}
                alt={dish.title}
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {dish.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {dish.description}
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Popular;

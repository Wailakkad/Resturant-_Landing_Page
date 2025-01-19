import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Phone, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import MenuIcon from "../../images/app.png"
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [open , setOpen] = useState(false);
  return (
    <>
      <motion.nav 
      className="fixed w-full backdrop-blur-sm bg-white/30 text-gray-800 py-4 px-6 shadow-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <motion.div
          className=""
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1
            id='Logo'
            className="text-4xl font-bold bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Zesty Plate
          </h1>
        </motion.div>
        {/* Left Navigation Links */}
        <div className=" md:flex md:items-center hidden md:block gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#ffdab9] hover:scale-105"
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/Menu"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#ffdab9] hover:scale-105"
            >
              <Info size={18} />
              <span className="font-medium">Menu</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#ffdab9] hover:scale-105"
            >
              <Phone size={18} />
              <span className="font-medium">Contact</span>
            </Link>
          </motion.div>
        </div>

        {/* Logo */}
     

        {/* Right Navigation Link */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex '
        >
          <Link
            to="/contact"
            className="hidden md:block md:flex md:items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#a3b18a] to-[#3a5a40] text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <LogIn size={18} />
            <span >Contact_us</span>
          </Link>
          <img src={MenuIcon} onClick={()=>setOpen(!open)} className='md:hidden'  width={30} height={30} alt="" />
        </motion.div>
      </div>
      </motion.nav>
    {/* {Mobile sideBar Section} */}
    <MobileMenu open={open}/>
    </>
  );
};

export default Navbar;

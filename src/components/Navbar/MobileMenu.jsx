import React from 'react'
import { motion , AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const MobileMenu = ({open}) => {
  return (
    <AnimatePresence>
        {
            open && (
                <motion.div  initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity:0}}
                className='absolute  left-0 w-full h-full  z-20 mt-16'
                >
                    <div className='flex flex-col items-center bg-black justify-center gap-4 py-6 m-6 rounded-xl'>
                        <Link to="/home" className='text-white text-2xl p-4 hover:bg'>
                          Home
                        </Link>
                        <Link to="/home" className='text-white text-2xl p-4 hover:bg'>
                          Menu 
                        </Link>
                        <Link to="/home" className='text-white text-2xl p-4 hover:bg'>
                          Help
                        </Link>
                        <button className='px-6 py-2 bg-white rounded-xl'>
                            Contact Us
                        </button>

                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default MobileMenu;
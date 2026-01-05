import React from 'react';
import { NavLink, Outlet } from 'react-router';
import BlurBlob from './BlurBlob';
import { motion } from 'motion/react';

function Resume() {
    const resumeMenuLinks = [
        { to: "", label: "About Me", end: true },
        { to: "education", label: "Education", end: false },
        { to: "skills", label: "Skills", end: false },
        { to: "experience", label: "Experience", end: false },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className='relative min-h-screen  text-white py-20 overflow-hidden'>
            {/* Background Blobs */}
            <BlurBlob position={{ top: "35%", left: "40%" }} size={{ width: "20%", height: "25%" }} />
            <BlurBlob position={{ top: "65%", left: "80%" }} size={{ width: "20%", height: "25%" }} />

            <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 relative z-10'>
                
                {/* Left Sidebar Menu */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='lg:w-1/3'
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='text-4xl font-bold pb-10 text-center lg:text-left'
                    >
                        Why Hire Me?
                    </motion.h1>

                    <div className='flex flex-col gap-4 items-center lg:items-start'>
                        {resumeMenuLinks.map((link) => (
                            <motion.div 
                                key={link.to} 
                                variants={itemVariants}
                                className="w-full max-w-xs"
                            >
                                <NavLink 
                                    to={link.to} 
                                    end={link.end}
                                >
                                    {({ isActive }) => (
                                        <motion.li 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`list-none transition-all duration-300 border-2 border-green-500 py-3 px-6 rounded-2xl text-xl font-semibold text-center cursor-pointer
                                                ${isActive 
                                                    ? 'text-black bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.5)]' 
                                                    : 'text-white hover:text-green-400 hover:bg-green-500/10'
                                                }`}
                                        >
                                            {link.label}
                                        </motion.li>
                                    )}
                                </NavLink>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side Content (Outlet) with Animation */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='flex-1'
                >
                    <div className="bg-[#16161a]/50 p-2 lg:p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <Outlet />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default Resume;
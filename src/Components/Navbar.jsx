import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/home" },
    { name: "Resume", path: "/resume" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinks = links.map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className={({ isActive }) =>
        `relative py-2 transition-all duration-300 ${
          isActive
            ? "text-green-500 font-bold text-[20px]"
            : "text-white hover:text-green-400 text-[18px]"
        }`
      }
      onClick={() => setIsOpen(false)}
    >
      {({ isActive }) => (
        <>
          {link.name}
          {isActive && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"
            />
          )}
        </>
      )}
    </NavLink>
  ));

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-20 bg-gray-900/80 backdrop-blur-md border-b border-white/5 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <a href="/" className="text-3xl font-black tracking-tighter">
            Peyal<span className="text-green-500 inline-block animate-pulse">.</span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks}
          </div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/peyalhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-500 hover:bg-green-400 text-black rounded-full transition-colors text-2xl"
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white text-3xl p-2 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-gray-900 border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {navLinks}
              <a
                href="https://github.com/peyalhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-black px-10 py-3 rounded-full font-bold text-xl mt-4"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
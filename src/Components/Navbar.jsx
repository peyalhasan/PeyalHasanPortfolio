import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const navLinks = (
        <div className="flex gap-6">
            <NavLink
                to="/home"
                className={({ isActive }) =>
                    isActive
                        ? "border-b-4 border-green-500 text-green-500 text-[20px] font-semibold"
                        : "hover:text-green-400 transition text-[18px]"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/resume"
                className={({ isActive }) =>
                    isActive
                        ? "border-b-4 border-green-500 text-green-500 text-[20px] font-semibold"
                        : "hover:text-green-400 transition text-[18px]"
                }
            >
                Resume
            </NavLink>
            <NavLink
                to="/project"
                className={({ isActive }) =>
                    isActive
                        ? "border-b-4 border-green-500 text-green-500 text-[20px] font-semibold"
                        : "hover:text-green-400 transition text-[18px]"
                }
            >
                Project
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive
                        ? "border-b-4 border-green-500 text-green-500 text-[20px] font-semibold"
                        : "hover:text-green-400 transition text-[18px]"
                }
            >
                Contact
            </NavLink>
        </div>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-50 h-24 bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-1">
                    <a href="/" className="text-3xl font-bold">
                        Peyal<span className="text-green-500 animate-pulse">.</span>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks}
                    <a
                        href="https://github.com/peyalhasan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-green-500 hover:bg-green-400 text-black font-semibold text-xl"
                    >
                        <FaGithub />
                    </a>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    {/* Mobile dropdown code */}
                </div>
            </div>
        </div>

    );
};

export default Navbar;

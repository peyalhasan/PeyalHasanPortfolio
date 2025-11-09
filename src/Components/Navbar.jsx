import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
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
    </>
  );

  return (
    <div className=" container mx-auto px-3 fixed top-0 left-0 w-full z-50 bg-[rgb(29,28,34)] text-white shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="flex-1">
          <a href="/" className="text-3xl font-bold">
            Peyal<span className="text-green-500 animate-pulse">.</span>
          </a>
        </div>

        {/* Desktop Menu - NavLinks + GitHub aligned right */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6">{navLinks}</div>
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
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-8 6h8"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-[rgb(40,39,46)] rounded-box w-48"
            >
              {navLinks}
              <li className="mt-2">
                <a
                  href="https://github.com/peyalhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success w-full text-black font-semibold"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

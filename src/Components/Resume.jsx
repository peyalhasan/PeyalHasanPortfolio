import React from 'react'
import { NavLink, Outlet } from 'react-router';
import BlurBlob from '././BlurBlob';

function Resume() {

    const ResumeMenu = (
        <>

            <NavLink to="" end>
                {({ isActive }) => (
                    <li className={`w-80 transition-all duration-100 list-none border-2 border-green-500 px-25 py-3 rounded-2xl text-xl font-semibold 
            ${isActive ? 'text-black bg-green-500' : 'hover:text-[#3BB77E] hover:scale-105'}`}>
                        About Me
                    </li>
                )}
            </NavLink>


            <NavLink to="education">
                {({ isActive }) => (
                    <li className={`w-80 transition-all duration-100 list-none border-2  border-green-500 px-25  py-3 rounded-2xl text-xl font-semibold 
            ${isActive ? ' text-black bg-green-500  ' : 'hover:text-[#3BB77E] hover:scale-105 '}`}>
                        Education
                    </li>
                )}
            </NavLink>

            <NavLink to="skills">
                {({ isActive }) => (
                    <li className={`w-80 transition-all duration-100 list-none border-2  border-green-500 px-25 py-3 rounded-2xl text-xl font-semibold 
            ${isActive ? ' text-black bg-green-500  ' : 'hover:text-[#3BB77E] hover:scale-105 '}`}>
                        Skills
                    </li>
                )}
            </NavLink>
            <NavLink to="experience">
                {({ isActive }) => (
                    <li className={`w-80 transition-all duration-100 list-none border-2  border-green-500 px-25 py-3 rounded-2xl text-xl font-semibold 
            ${isActive ? ' text-black bg-green-500  ' : 'hover:text-[#3BB77E] hover:scale-105 '}`}>
                        Experience
                    </li>
                )}
            </NavLink>

        </>
    )
    return (
        <>
            <div className='w-9/12 mx-auto flex flex-col lg:flex-row gap-3 lg:gap-30'>
                <BlurBlob position={{ top: "35%", left: "40%" }} size={{ width: "20%", height: "25%" }} ></BlurBlob>
                <BlurBlob position={{ top: "65%", left: "80%" }} size={{ width: "20%", height: "25%" }} ></BlurBlob>

                <div>
                    <h1 className='text-4xl pb-10 text-center'>Why Hire Me?</h1>
                    <div className='h-full lg:h-screen flex flex-col gap-8 items-center lg:items-start justify-start'>
                        {ResumeMenu}
                    </div>

                </div>
                <div>
                    <Outlet></Outlet>
                </div>

            </div>
        </>
    )
}

export default Resume

import React from 'react'
import react1 from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import java from '../assets/javascript.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import { SiNextdotjs } from 'react-icons/si';
import git from '../assets/git.svg';
import vscode from '../assets/vscode.svg';
import figma from '../assets/figma.svg';
import github from '../assets/github.svg';
import vercel from '../assets/vercel.svg';
import netlify from '../assets/netlify.svg';


function Skill() {
    return (
        <>
            <div>
                <div className='text-center lg:text-start  mt-5'>
                    <h1 className='text-4xl font-semibold pb-10'>
                        My Skills
                    </h1>
                    <p className='leading-8 font-poppins text-white/70 mb-5'>I have recently completed a 4-month MERN Stack course training from Bd Calling It Ltd. Currently, I am continuing my training with the Reactive Accelerator course at LWS. During my learning journey, I have mastered HTML, CSS, JavaScript, React.js, Tailwind CSS, and Next.js, and I am continuously improving my skills to become a skilled Full-Stack Developer.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
                    <div className='bg-[#232229] py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-10 leading-7 sm:leading-8 md:leading-9 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl shadow-green-500/40 hover:scale-105 duration-300 ease-in w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-auto'>
                        <h3 className='text-white text-2xl font-semibold text-center border-b-4 w-11/12 mx-auto p-6'>Front-End Site</h3>
                        <div className='grid grid-cols-3 gap-5 pt-10 items-center justify-center text-center'>
                            <div className='flex flex-col justify-center w-20'>
                                <img  src={html} alt="" className=' duration-500 hover:-translate-y-4 w-12 ' />
                                <h5>Html</h5>
                            </div>

                            <div className='flex flex-col justify-center w-20 '>
                                <img src={css} alt="" className=' duration-500 w-12 hover:-translate-y-4' />
                                <h5>css</h5>
                            </div>

                            <div className='flex flex-col justify-center w-20 '>
                                <img src={tailwind} alt="" className=' duration-500 w-12 hover:-translate-y-4' />
                                <h5>Tailwind</h5>
                            </div>

                            <div className='flex flex-col justify-center w-20 '>
                                <img src={java} alt="" className=' duration-500 w-12 hover:-translate-y-4' />
                                <h5>JavaScript</h5>
                            </div>

                            <div className='flex flex-col justify-center w-20 '>
                                <img src={react1} alt="" className=' duration-500 w-12 hover:-translate-y-4' />
                                <h5>React JS</h5>
                            </div>

                            <div className='flex flex-col justify-center w-20 '>
                                <p><SiNextdotjs className='text-7xl duration-500 w-12 hover:-translate-y-4' /></p>
                                <h5>Next Js</h5>
                            </div>
                        </div>



                    </div>

                    <div className='bg-[#232229] py-4 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 leading-6 sm:leading-7 md:leading-8 lg:leading-9 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl shadow-green-500/40 hover:scale-105 duration-300 ease-in w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto h-auto'>

                        {/* Heading */}
                        <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center border-b-2 sm:border-b-3 md:border-b-4 w-10/12 sm:w-11/12 mx-auto p-3 sm:p-4 md:p-5 lg:p-6'>
                            Tools
                        </h3>

                        {/* Tools Grid */}
                        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-6 sm:pt-8 md:pt-10 lg:pt-12 items-center justify-center text-center'>

                            {/* GitHub */}
                            <div className='flex flex-col justify-center items-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22'>
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 duration-500  hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 transition-transform'
                                />
                                <h5 className='text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 text-white font-medium'>
                                    GitHub
                                </h5>
                            </div>

                            {/* Git */}
                            <div className='flex flex-col justify-center items-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22'>
                                <img
                                    src={git}
                                    alt="Git"
                                    className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 transition-transform'
                                />
                                <h5 className='text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 text-white font-medium'>
                                    Git
                                </h5>
                            </div>

                            {/* VS Code */}
                            <div className='flex flex-col justify-center items-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22'>
                                <img
                                    src={vscode}
                                    alt="VS Code"
                                    className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 transition-transform'
                                />
                                <h5 className='text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 text-white font-medium'>
                                    VS Code
                                </h5>
                            </div>

                            {/* Figma */}
                            <div className='flex flex-col justify-center items-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22'>
                                <img
                                    src={figma}
                                    alt="Figma"
                                    className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 transition-transform'
                                />
                                <h5 className='text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 text-white font-medium'>
                                    Figma
                                </h5>
                            </div>

                            {/* Vercel */}
                            <div className='flex flex-col justify-center items-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22'>
                                <img
                                    src={vercel}
                                    alt="Vercel"
                                    className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 transition-transform'
                                />
                                <h5 className='text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 text-white font-medium'>
                                    Vercel
                                </h5>
                            </div>

                            {/* Netlify */}
                            <div className='flex flex-col justify-center items-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22'>
                                <img
                                    src={netlify}
                                    alt="Netlify"
                                    className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 transition-transform'
                                />
                                <h5 className='text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 text-white font-medium'>
                                    Netlify
                                </h5>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Skill

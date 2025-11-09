import React from 'react';

const About = () => {
    return (
        <section id='about' className=' px-[7vw] md:px-[7vw] lg:px-[20vw] mt-16 md:mt-24 lg:mt-32 border-2 ' >
            <div className=' flex flex-col-reverse md:flex-row justify-between items-center ' >
                {/* Left side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0 '>
                    {/* Greeting */}
                    <h1 className=' text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight ' >
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className=' text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight   ' >
                        Peyal Hasan
                    </h2>

                </div>
            </div>
        </section>
    );
};

export default About;
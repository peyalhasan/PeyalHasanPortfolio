import React from 'react';
import { motion } from 'motion/react';

function Experience() {
    return (
        <section className="text-white">
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center lg:text-left'
            >
                <h1 className='text-4xl font-bold pb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
                    Professional Journey
                </h1>
                <p className='leading-8 font-poppins text-white/70 mb-10 max-w-3xl'>
                    I am a passionate <span className="text-white font-medium text-lg italic">Frontend Developer</span> dedicated to building visually stunning and highly responsive web interfaces. Having mastered modern frameworks, I am now ready to bring my creativity to a professional workspace.
                </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* Available for Work Card */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className='relative group bg-[#1c1c22] p-10 rounded-3xl border border-white/5 overflow-hidden'
                >
                    {/* Unique Border Trace */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.rect
                            x="0" y="0" width="100" height="100" rx="5" ry="5" fill="none" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="10 90" 
                            animate={{ strokeDashoffset: [0, -100] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-green-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">Status</span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                <span className="text-green-500 text-xs font-bold">Available to Hire</span>
                            </div>
                        </div>

                        <h3 className='text-gray-500 text-sm uppercase tracking-widest mb-1'>Future Goal</h3>
                        <h2 className='text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors'>
                            Frontend Engineer
                        </h2>
                        
                        <div className="pt-4 border-t border-white/5 mt-6">
                            <p className='text-white/60 italic text-sm leading-relaxed'>
                                "Currently seeking opportunities to work with React, Next.js, and Tailwind CSS to create seamless user experiences."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Training Experience Card */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className='bg-[#1c1c22] p-10 rounded-3xl border border-white/5 relative'
                >
                    <div className="absolute top-6 right-8 text-blue-500/20 text-6xl font-bold">01</div>
                    
                    <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">Training</span>
                    <h2 className='text-2xl font-bold text-white mt-2 mb-1'>Frontend Developer (Trainee)</h2>
                    <p className='text-white/40 text-sm mb-6 uppercase tracking-tighter'>Bd Calling It Ltd | Sept 2025 - Dec 2025</p>
                    
                    <ul className='space-y-3 text-sm text-white/70'>
                        <li className='flex items-start gap-2'>
                            <span className="text-green-500">▹</span> 
                            Focused on React.js, Tailwind CSS, and Framer Motion.
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className="text-green-500">▹</span> 
                            Developed responsive UI components and pixel-perfect designs.
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className="text-green-500">▹</span> 
                            Collaborated on version control using Git/GitHub.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
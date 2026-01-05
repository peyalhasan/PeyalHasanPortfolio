import React from 'react';
import { motion } from 'motion/react';
import { GrCloudComputer } from 'react-icons/gr';
import { IoIosSchool } from 'react-icons/io';
import { RiWifiOffLine } from 'react-icons/ri';

function Education() {
    // অ্যানিমেশন ভেরিয়েন্ট
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const educationData = [
        {
            title: "Bd Calling It Ltd",
            subject: "Web Development Course (Front-End)",
            date: "September 2025 - December 2025",
            institution: "Online course platform",
            icon: <RiWifiOffLine className='text-yellow-400' />
        },
        {
            title: "Mymensingh Polytechnic Institute",
            subject: "Certificate in Diploma in Engineering, Computer Science",
            date: "September, 2022 - Present (8th semester)",
            institution: "Tech Institute",
            icon: <GrCloudComputer className='text-yellow-400' />
        },
        {
            title: "Jogirsit High School",
            subject: "Secondary School Certificate, Science",
            date: "Jan, 2019 - Nov, 2021",
            institution: "School",
            icon: <IoIosSchool className='text-yellow-400' />
        }
    ];

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='text-center lg:text-left'
        >
            {/* Header Section */}
            <motion.div variants={cardVariants}>
                <h1 className='text-4xl font-bold pb-10 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent'>
                    My Education
                </h1>
                <p className='leading-8 font-poppins text-white/70 mb-12 max-w-2xl mx-auto lg:mx-0'>
                    It's me <span className="text-white font-medium">Peyal Hasan</span>. 
                    I am studying Computer Science & Technology at Mymensingh Polytechnic Institute. 
                    I am from Gazipur, Bangladesh.
                </p>
            </motion.div>

            {/* Education Cards Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ 
                            scale: 1.03,
                            boxShadow: "0px 0px 30px rgba(34, 197, 94, 0.2)"
                        }}
                        className='group bg-[#1c1c22] border border-white/5 py-8 px-8 leading-9 rounded-3xl relative overflow-hidden transition-all'
                    >
                        {/* Interactive Accent Line */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-green-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                        
                        <h3 className='text-white pb-2 text-2xl font-semibold group-hover:text-green-400 transition-colors'>
                            {edu.title}
                        </h3>
                        <p className='text-white/80 font-medium'>{edu.subject}</p>
                        <p className='text-white/50 text-sm mb-4 italic'>{edu.date}</p>
                        
                        <div className='flex gap-3 items-center justify-center lg:justify-start text-blue-400 bg-blue-400/5 py-2 px-4 rounded-xl w-fit mx-auto lg:mx-0'>
                            {edu.icon}
                            <span className="text-sm font-semibold uppercase tracking-wider">{edu.institution}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Education;
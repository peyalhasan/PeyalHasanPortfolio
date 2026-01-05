import React from 'react';
import { motion } from 'motion/react';

function AboutMeResume() {
    // অ্যানিমেশন ভেরিয়েন্ট
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const infoData = [
        { label: "Name", value: "Md Peyal Hasan" },
        { label: "Phone", value: "+8801794904180" },
        { label: "Email", value: "peyalhasan143@gmail.com" },
        { label: "Language", value: "Bangla, English" },
        { label: "Experience", value: "Fresher" },
        { label: "Nationality", value: "Bangladeshi" },
        { label: "Religion", value: "Islam" },
    ];

    return (
        
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
        >
            {/* Description Section */}
            <div className='pb-10 text-center lg:text-left mt-10 lg:mt-0'>
                <motion.h1 
                    variants={itemVariants}
                    className='text-4xl font-bold pb-10 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent'
                >
                    About Me
                </motion.h1>
                
                <motion.div variants={itemVariants} className="space-y-5">
                    <p className='leading-8 font-poppins text-white/70'>
                        As-Salamu Alaikum, I am <span className="text-green-400 font-medium">Md Peyal Hasan</span>. 
                        I am a passionate Frontend Developer who loves creating interactive and responsive web applications. 
                        I have hands-on experience with HTML, CSS, JavaScript, React.js, React Router, Next.js, Tailwind CSS, and Bootstrap.
                    </p>
                    <p className='leading-8 font-poppins text-white/70'>
                        I also integrate RESTful APIs on the frontend to make applications dynamic and functional. 
                        I use Git and GitHub to manage my projects and collaborate effectively.
                    </p>
                    <p className='leading-8 font-poppins text-white/70'>
                        I enjoy learning new frontend technologies and taking on challenges. My goal is to become a 
                        skilled Full-Stack Developer and keep improving every day.
                    </p>
                </motion.div>
            </div>

            {/* Info Grid Section */}
            <motion.div 
                variants={itemVariants}
                className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-white/70 leading-7 text-lg bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm'
            >
                {infoData.map((item, index) => (
                    <div key={index} className="flex justify-between border-b border-white/5 pb-2 group">
                        <span className="font-semibold text-green-500/80 group-hover:text-green-400 transition-colors">
                            {item.label} :
                        </span>
                        <span className="text-white text-right">{item.value}</span>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default AboutMeResume;
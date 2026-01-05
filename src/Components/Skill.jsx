import React from 'react';
import { motion } from 'motion/react'; 
import { 
    SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, 
    SiTailwindcss, SiMui, SiFramer, SiRedux, SiReactquery, 
    SiFirebase, SiJsonwebtokens, SiGit, SiGithub, 
     SiFigma, SiPostman, SiVercel, SiNetlify 
} from 'react-icons/si';

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Frontend Core",
        skills: [
            { name: "React", icon: <SiReact className="text-blue-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        ]
    },
    {
        title: "State & API Management",
        skills: [
            { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
            { name: "TanStack Query", icon: <SiReactquery className="text-red-500" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
            { name: "MUI", icon: <SiMui className="text-blue-600" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
        ]
    },
    {
        title: "Tools & Deployment",
        skills: [
            { name: "Git/GitHub", icon: <SiGithub className="text-gray-300" /> },
            { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
            { name: "Figma", icon: <SiFigma className="text-orange-400" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
        ]
    }
];

const Skill = () => {
    return (
        <section className="py-20 px-4 md:px-10  text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Technical Expertise
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed italic">
                        "I have mastered the MERN stack through professional training at Bd Calling It Ltd and LWS. 
                        Currently focusing on building scalable, high-performance web applications."
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[#1a191f] border border-gray-800 p-8 rounded-3xl hover:border-green-500/50 transition-all duration-300 shadow-xl w-full"
                        >
                            <h3 className="text-xl font-semibold mb-8 border-l-4 border-green-500 pl-4 text-gray-200">
                                {category.title}
                            </h3>
                            
                            <div className="grid grid-cols-3 gap-6">
                                {category.skills.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center group">
                                        <div className="text-4xl mb-2 group-hover:scale-125 group-hover:-translate-y-2 duration-300 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-green-400 font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
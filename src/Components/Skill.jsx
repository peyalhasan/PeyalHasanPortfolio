import React from 'react';
import { motion } from 'motion/react'; 
import { 
    SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, 
    SiTailwindcss, SiMui, SiFramer, SiRedux, SiReactquery, 
    SiFirebase, SiJsonwebtokens, SiGit, SiGithub, 
    SiFigma, SiPostman, SiVercel 
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
        title: "State & Management",
        skills: [
            { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
            { name: "React Query", icon: <SiReactquery className="text-red-500" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
            { name: "MUI", icon: <SiMui className="text-blue-600" /> },
            { name: "Framer", icon: <SiFramer className="text-white" /> },
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

const SkillCard = ({ category }) => {
    return (
        <div className="relative group w-full h-full p-8 rounded-3xl bg-[#0f0e13] border border-white/5 overflow-hidden">
            {/* SVG Border Trace Effect */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Clockwise Path */}
                <motion.rect
                    x="0" y="0" width="100" height="100"
                    rx="20" ry="20" // Rounded corners match your card
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="0.5"
                    strokeDasharray="20 80" // Line length and gap
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: Infinity, repeat: Infinity, ease: "linear" }}
                />
                {/* Counter-Clockwise Path */}
                <motion.rect
                    x="0" y="0" width="100" height="100"
                    rx="10" ry="10"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="0.5"
                    strokeDasharray="20 80"
                    initial={{ strokeDashoffset: -100 }}
                    animate={{ strokeDashoffset: 100 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-8 border-l-4 border-green-500 pl-4 text-gray-200">
                    {category.title}
                </h3>
                
                <div className="grid grid-cols-3 gap-6">
                    {category.skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group/icon">
                            <div className="text-4xl mb-2 group-hover/icon:scale-125 duration-300 transition-transform">
                                {skill.icon}
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover/icon:text-green-400 font-medium">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Skill = () => {
    return (
        <section className="py-20 px-4 md:px-10 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Technical Expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skillCategories.map((category, idx) => (
                        <SkillCard key={idx} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
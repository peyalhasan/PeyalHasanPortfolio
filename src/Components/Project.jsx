import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiJson } from "react-icons/si";
import BlurBlob from '../Components/BlurBlob';

const projects = [
    {
        id: 1,
        title: "Weather Dashboard 🌤️",
        description: "A responsive web application built with React.js that provides current weather information and forecasts for major world capitals. Users can search for weather data by entering city names.",
        image: "https://github.com/peyalhasan/Weather-Dashboard/raw/main/Weather-Dashboard.png",
        technologies: ["React", "JavaScript" , "Tailwind CSS"],
        githubLink: "https://github.com/peyalhasan/Weather-Dashboard",
        liveLink: "https://weather-dashboard-peyal.vercel.app/",
        features: ["Real-time API", "Favorite Cities", "Local Storage"]
    },
    {
        id: 2,
        title: "🚀 TechHub - Gadget Shop",
        description: "TechHub is a premium e-commerce platform for tech enthusiasts. It features a dynamic product showcase and seamless cart management. [Note: Requires Local JSON Server to fetch data].",
        image: 'https://raw.githubusercontent.com/peyalhasan/TechHub/main/TechBoard.png',
        technologies: ["React", "Tailwind CSS", "Context API", 'Local JSON'],
        githubLink: "https://github.com/peyalhasan/TechHub",
        liveLink: "https://github.com/peyalhasan/TechHub#readme", 
        features: ["Dynamic Product Filtering", "Interactive Cart System", "Local Storage Persistence", "Responsive Layout"]
    },
    {
        id: 3,
        title: "🐾 Pawtopia",
        description: "The ultimate pet care and adoption platform! Whether you're looking to adopt a furry friend or find reliable services, Pawtopia has got you covered.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHk24PsVeRTsQN1-LZcssTKdx61QOxzGXng&s",
        technologies: ["JavaScript", "CSS3", "HTML5"],
        githubLink: "https://github.com/peyalhasan/Pawtopia",
        liveLink: "https://pawtopia-delta.vercel.app/",
        features: ["Pet Adoption", "Community Forum", "Pet Profiles"]
    },
    {
        id: 4,
        title: "📱 Phone Hunter",
        description: "Search for mobile phones and view detailed specifications. It uses an external API to fetch phone data in a user-friendly interface.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3HmdVUr0hL1qj4sx4-2IzIQaWPmIfpha7w&s",
        technologies: ["Tailwind CSS", "JavaScript", "API Fetch"],
        githubLink: "https://github.com/peyalhasan/Phone-Hunter",
        liveLink: "https://peyalhasan.github.io/Phone-Hunter/",
        features: ["Spec Search", "Modern UI", "API Integration"]
    },
];

const getTechIcon = (tech) => {
    const icons = {
        "React": <FaReact className="text-blue-400" />,
        "Node.js": <FaNodeJs className="text-green-500" />,
        "MongoDB": <FaDatabase className="text-green-600" />,
        "Express": <SiExpress className="text-gray-400" />,
        "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
        "Context API": <FaCode className="text-purple-400" />,
        "Local JSON": <SiJson className="text-yellow-600" />,
        "JavaScript": <div className="w-3 h-3 bg-yellow-400 rounded-full" />,
        "CSS3": <div className="w-3 h-3 bg-blue-500 rounded-full" />,
        "HTML5": <div className="w-3 h-3 bg-orange-500 rounded-full" />,
    };
    return icons[tech] || <div className="w-3 h-3 bg-gray-500 rounded-full" />;
};

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative group rounded-3xl bg-[#0f0e13] border border-white/5 overflow-hidden"
    >
        {/* Animated Glow Border */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.rect
                x="0" y="0" width="100" height="100" rx="10" ry="10" fill="none" stroke="#22c55e" strokeWidth="0.4" strokeDasharray="15 85"
                animate={{ strokeDashoffset: [100, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </svg>

        <div className="relative h-60 overflow-hidden">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450?text=TechHub+Preview'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e13] via-transparent to-transparent opacity-80" />
            
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all">
                    <FaGithub className="text-2xl text-white" />
                </a>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-4 bg-green-500/80 backdrop-blur-md rounded-full hover:bg-green-400 transition-all">
                    <FaExternalLinkAlt className="text-2xl text-gray-900" />
                </a>
            </div>
        </div>

        <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.features.slice(0, 3).map((f, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-green-500/80 bg-green-500/5 px-3 py-1 rounded-md border border-green-500/10">
                        {f}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-3">
                    {project.technologies.map((tech, i) => (
                        <span key={i} title={tech} className="hover:scale-125 transition-transform">
                            {getTechIcon(tech)}
                        </span>
                    ))}
                </div>
                <span className="text-[10px] text-gray-600 font-mono tracking-tighter uppercase">Source Code Available</span>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="relative py-24 bg-[#050505] text-white overflow-hidden">
            <BlurBlob position={{ top: "10%", left: "-5%" }} size={{ width: "400px", height: "400px" }} />
            <BlurBlob position={{ top: "60%", left: "80%" }} size={{ width: "300px", height: "300px" }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-6xl font-black mb-6 italic bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent tracking-tighter"
                    >
                        SELECTED WORKS
                    </motion.h2>
                    <div className="h-1 w-20 bg-green-500 mx-auto rounded-full mb-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </div>

                <motion.div 
                    whileHover={{ y: -5 }}
                    className="mt-20 p-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"
                >
                    <div className="bg-[#0f0e13] rounded-3xl p-10 text-center border border-white/5">
                        <h3 className="text-3xl font-bold mb-4">Wanna see more?</h3>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto italic">
                            Checkout my other repositories and experiments on GitHub.
                        </p>
                        <a 
                            href="https://github.com/peyalhasan" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform active:scale-95"
                        >
                            <FaGithub className="text-xl" />
                            Explore Repositories
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import BlurBlob from '../Components/BlurBlob';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Weather Dashboard 🌤️",
            description: "A responsive web application built with React.js that provides current weather information and forecasts for major world capitals. Users can search for weather data by entering capital city names . Favorite cities can be added for quick access. The app fetches real-time",
            image: "https://github.com/peyalhasan/Weather-Dashboard/raw/main/Weather-Dashboard.png",
            technologies: ["React", "JavaScript" , "Tailwind CSS", "CSS", "HTML"],
            githubLink: "https://github.com/peyalhasan/Weather-Dashboard",
            liveLink: "https://weather-dashboard-peyal.vercel.app/",
            features: ["User Authentication", "Add cities to your favorites", "View favorites inside a modal", "Responsive Design", "Remove items easily", "Add on localStorage"]
        },
        {
            id: 2,
            title: "🏡 UrbanNest",
            description: "UrbanNest is a modern e-commerce web app built with React.js that allows users to browse, add, and manage products in a shopping cart with real-time price updates. It's designed with a clean UI, responsive layout, and dynamic product management logic.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VrGJSigixgnRWPHscSEYLgBThn7f_04uFg&s",
            technologies: ["React","HTML5", "CSS3", "JavaScript"],
            githubLink: "https://github.com/peyalhasan/UrbanNest",
            liveLink: "https://urban-nest-puce.vercel.app/",
            features: ["Add to cart", "Auto-updates price and quantity", "Responsive design", "Automatically removes item when quantity hits 0", ]

        },
        {
            id: 3,
            title: "🐾 Pawtopia",
            description: "Welcome to Pawtopia  the ultimate pet care and adoption platform! Whether you're looking to adopt a furry friend, find reliable pet services, or connect with fellow pet lovers, Pawtopia has got you covered.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHk24PsVeRTsQN1-LZcssTKdx61QOxzGXng&s",
            technologies: ["JavaScript", "CSS3", "HTML5"],
            githubLink: "https://github.com/peyalhasan/Pawtopia",
            liveLink: "https://pawtopia-delta.vercel.app/",
            features: [ 'Pet Adoption', 'Pet Profiles', 'Community Forum', ]
        },
        {
            id: 4,
            title: "📱 Phone Hunter",
            description: "Phone Hunter is a responsive web application that allows users to search for mobile phones and view detailed specifications. It uses an external API to fetch phone data and displays it in a clean, user-friendly interface.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3HmdVUr0hL1qj4sx4-2IzIQaWPmIfpha7w&s",
            technologies: ["Tailwind CSS", "JavaScript", "CSS3"],
            githubLink: "https://github.com/peyalhasan/Phone-Hunter",
            liveLink: "https://peyalhasan.github.io/Phone-Hunter/",
            features: ["Responsive Design", "Modern UI", "Project Showcase", "Smooth Animations", "search movie"]
        },
    ];

    const getTechIcon = (tech) => {
        const icons = {
            "React": <FaReact className="text-blue-400" />,
            "Node.js": <FaNodeJs className="text-green-500" />,
            "MongoDB": <FaDatabase className="text-green-600" />,
            "Express": <SiExpress className="text-gray-800" />,
            "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
            "JavaScript": <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>,
            "CSS3": <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>,
            "HTML5": <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>,
            "PHP": <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
        };
        return icons[tech] || <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>;
    };


    return (
        <section id="projects" className=" bg-gray-900 text-white">
            <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "25%", height: "30%" }} ></BlurBlob>
            <BlurBlob position={{ top: "60%", left: "70%" }} size={{ width: "25%", height: "30%" }} ></BlurBlob>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                        My Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents my passion for creating meaningful digital experiences.
                    </p>
                    <div className="mt-6">
                        <a
                            href="https://github.com/shaoynhassan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            <FaGithub className="text-xl" />
                            View All on GitHub
                        </a>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200 transition-colors duration-200"
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                    {project.liveLink !== "#" && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 text-gray-900 p-3 rounded-full hover:bg-green-400 transition-colors duration-200"
                                        >
                                            <FaExternalLinkAlt className="text-xl" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-green-500 mb-2">
                                        Key Features:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {project.technologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-1 text-sm text-gray-400"
                                                title={tech}
                                            >
                                                {getTechIcon(tech)}
                                                <span className="hidden sm:inline">{tech}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                            title="View Code"
                                        >
                                            <FaGithub className="text-xl" />
                                        </a>
                                        {project.liveLink !== "#" && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                                                title="Live Demo"
                                            >
                                                <FaExternalLinkAlt className="text-xl" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Stats Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-green-500 mb-6">
                            GitHub Activity
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">86+</div>
                                <div className="text-gray-400">Repositories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">4+</div>
                                <div className="text-gray-400">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">559+</div>
                                <div className="text-gray-400">contributions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">Active</div>
                                <div className="text-gray-400">Status</div>
                            </div>
                        </div>
                        <a
                            href="https://github.com/peyalhasan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 bg-green-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaGithub className="text-xl" />
                            Follow me on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
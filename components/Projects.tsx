'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Hotel Website Project",
        category: "Full Stack",
        year: "2025",
        tech: ["Flask", "PostgreSQL", "React", "Tailwind"],
        description: "Built full-stack hotel booking system with JWT auth, Google OAuth, and OTP email verification. Implemented admin CRUD for rooms, Razorpay integration, filtered listings, and secure booking confirmation."
    },
    {
        id: 2,
        title: "Social Media Web App",
        category: "Full Stack",
        year: "2025",
        tech: ["Django REST", "React", "PostgreSQL", "Bootstrap"],
        description: "Developed social media platform with JWT login/logout, OTP-based signup/reset, and email verification. Implemented post CRUD operations with tags, timestamps, and protected routes."
    },
    {
        id: 3,
        title: "Playwright Scraper",
        category: "Automation",
        year: "2025",
        tech: ["Playwright", "Python", "Pandas"],
        description: "Scraped election data (name, gender, phone) from Bihar Election website. Automated downloads of affidavits/photos and saved structured data into CSV."
    },
    {
        id: 4,
        title: "Grocery Store Management System",
        category: "Database Management",
        year: "2025",
        tech: ["Flask", "MySQL", "HTML/CSS/JS"],
        description: "Built inventory management system using Flask, SQLAlchemy, and MySQL. Designed frontend with Bootstrap and served endpoints through Flask routes."
    },
    {
        id: 5,
        title: "College Sports Website",
        category: "Web Development",
        year: "2024",
        tech: ["HTML", "CSS", "JavaScript"],
        description: "Created site to publish team schedules, match results, and athlete profiles."
    }
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen bg-black text-white py-24 px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">Selected Works</h2>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 p-8 md:p-12"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <h3 className="text-3xl font-bold">{project.title}</h3>
                                        <span className="text-xs border border-white/20 px-2 py-1 rounded-full text-gray-400">{project.year}</span>
                                    </div>
                                    <p className="text-sm text-blue-400 uppercase tracking-widest mb-4 font-bold">{project.category}</p>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:w-1/3 flex flex-col items-start md:items-end gap-4 mt-6 md:mt-0">
                                    <button className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

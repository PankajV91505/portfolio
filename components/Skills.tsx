'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        skills: ["C", "Python", "JavaScript"]
    },
    {
        title: "Web Development",
        skills: ["HTML", "CSS", "React", "Tailwind CSS", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Flask", "Django"]
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL"]
    },
    {
        title: "Testing & Tools",
        skills: ["Playwright", "Selenium", "Git", "Postman", "VSCode", "Pandas", "BeautifulSoup"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black text-white px-6 md:px-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-neutral-200">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-neutral-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

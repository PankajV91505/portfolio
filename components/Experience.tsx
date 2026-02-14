'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "Business Central Consultant Intern",
        company: "Infostrom Technologies Pvt. Ltd.",
        location: "Gurugram, Haryana",
        period: "July 2024 – Aug 2024",
        description: [
            "Improved time management by meeting deadlines and submitting daily progress reports.",
            "Learned AL (Application Language) for Microsoft Dynamics 365 Business Central.",
            "Enhanced debugging and problem-solving skills through real-world projects."
        ]
    },
    {
        id: 2,
        role: "Front-End Development Intern",
        company: "Entity Digital Sports Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        period: "July 2023 – Sept 2023",
        description: [
            "Built responsive web pages using HTML, CSS, and JavaScript.",
            "Submitted daily reports and coordinated with the team to meet project goals.",
            "Enhanced debugging and problem-solving skills through live frontend development tasks."
        ]
    }
];

const education = [
    {
        id: 1,
        degree: "B.Tech in Computer Science",
        institution: "Government Engineering College Jhalawar",
        location: "Jhalawar, Rajasthan",
        period: "2021 – 2025",
        details: "CGPA: 8.42"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-neutral-900 text-white px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
                >
                    Experience & Education
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-neutral-400 uppercase tracking-widest">Internships</h3>
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border-l-2 border-white/10 pl-8 relative"
                                >
                                    <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2" />
                                    <h4 className="text-xl font-bold">{exp.role}</h4>
                                    <p className="text-lg text-neutral-300 mb-1">{exp.company}</p>
                                    <div className="flex justify-between text-sm text-neutral-500 mb-4 font-mono">
                                        <span>{exp.period}</span>
                                        <span>{exp.location}</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-400">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-neutral-400 uppercase tracking-widest">Education</h3>
                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border-l-2 border-white/10 pl-8 relative"
                                >
                                    <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2" />
                                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                                    <p className="text-lg text-neutral-300 mb-1">{edu.institution}</p>
                                    <div className="flex justify-between text-sm text-neutral-500 mb-4 font-mono">
                                        <span>{edu.period}</span>
                                        <span>{edu.location}</span>
                                    </div>
                                    <p className="text-neutral-400 font-medium">{edu.details}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

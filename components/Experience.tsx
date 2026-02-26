'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const workExperience = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Codebais",
        location: "Remote",
        period: "Dec 2025 – Present",
        description: [
            "Engineered a comprehensive company HRMS and dashboard using React, Vite, and Tailwind CSS for a highly responsive frontend.",
            "Architected a scalable backend using FastAPI and PostgreSQL to handle employee management, attendance, leave, and payroll processing.",
            "Implemented secure OAuth-based authentication and JWT authorization systems across the platform.",
            "Optimized API response times and integrated frontend components seamlessly with backend services."
        ]
    },
    {
        id: 2,
        role: "Python & Web Automation Developer",
        company: "Freelance Software Developer",
        location: "Remote",
        period: "Jan 2025 – Nov 2025",
        description: [
            "Developed robust web scraping solutions using Python and Playwright to extract structured data from complex websites.",
            "Integrated OCR using PyTesseract to process image-based data, exporting results to Excel and relational databases.",
            "Built a custom Django-based dashboard to control and monitor automated scraping pipelines.",
            "Designed and implemented RESTful APIs with Flask and Django to serve processed data to client applications."
        ]
    }
];

const internships = [
    {
        id: 1,
        role: "Business Central Consultant Intern",
        company: "Infostrom Technologies Pvt. Ltd.",
        location: "Gurugram, Haryana",
        period: "July 2024 – Aug 2024",
        description: [
            "Developed and customized business workflows using AL for Microsoft Dynamics 365 Business Central.",
            "Collaborated with cross-functional teams to debug client-specific issues and optimize ERP solutions."
        ]
    },
    {
        id: 2,
        role: "Front-End Development Intern",
        company: "Entity Digital Sports Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        period: "July 2023 – Sept 2023",
        description: [
            "Designed and developed interactive, responsive web interfaces using HTML5, CSS3, and JavaScript.",
            "Resolved UI/UX bugs in live production environments, improving cross-browser compatibility and user retention."
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
        <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 tracking-tighter"
                >
                    Experience & <span className="gradient-text">Education</span>
                </motion.h2>

                {/* Work Experience */}
                <div className="mb-14">
                    <h3 className="text-lg sm:text-xl font-semibold mb-6 text-muted-foreground uppercase tracking-widest">
                        Work Experience
                    </h3>
                    <div className="space-y-6">
                        {workExperience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="gradient-border hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <CardTitle className="text-base sm:text-lg">{exp.role}</CardTitle>
                                                <CardDescription className="text-sm mt-1">{exp.company}</CardDescription>
                                            </div>
                                            <div className="gradient-dot w-3 h-3 rounded-full shrink-0 mt-1" />
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <Badge variant="secondary" className="font-mono text-xs">{exp.period}</Badge>
                                            <Badge variant="outline" className="text-xs">{exp.location}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-outside ml-4 space-y-1.5 text-muted-foreground text-sm">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
                    {/* Internships */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-muted-foreground uppercase tracking-widest">
                            Internships
                        </h3>
                        <div className="space-y-6">
                            {internships.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="gradient-border hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <CardTitle className="text-base sm:text-lg">{exp.role}</CardTitle>
                                                    <CardDescription className="text-sm mt-1">{exp.company}</CardDescription>
                                                </div>
                                                <div className="gradient-dot w-3 h-3 rounded-full shrink-0 mt-1" />
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <Badge variant="secondary" className="font-mono text-xs">{exp.period}</Badge>
                                                <Badge variant="outline" className="text-xs">{exp.location}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-outside ml-4 space-y-1.5 text-muted-foreground text-sm">
                                                {exp.description.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-muted-foreground uppercase tracking-widest">
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="gradient-border hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <CardTitle className="text-base sm:text-lg">{edu.degree}</CardTitle>
                                                    <CardDescription className="text-sm mt-1">{edu.institution}</CardDescription>
                                                </div>
                                                <div className="gradient-dot w-3 h-3 rounded-full shrink-0 mt-1" />
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <Badge variant="secondary" className="font-mono text-xs">{edu.period}</Badge>
                                                <Badge variant="outline" className="text-xs">{edu.location}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <Separator className="mb-4" />
                                            <p className="font-semibold gradient-text text-lg">{edu.details}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

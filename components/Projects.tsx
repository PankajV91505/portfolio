'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const projects = [
    {
        id: 1,
        title: "Hotel Booking System",
        category: "Full Stack",
        year: "July 2025",
        tech: ["React", "Tailwind", "Flask", "PostgreSQL"],
        description: "Built a full-stack platform featuring Google OAuth, OTP verification, and secure payment processing via Razorpay. Developed a comprehensive admin panel for room management, bookings, and filtered listings.",
        link: "https://github.com/PankajV91505/Hotel-Website"
    },
    {
        id: 2,
        title: "Social Media Web App",
        category: "Full Stack",
        year: "June 2025",
        tech: ["React", "Django REST", "PostgreSQL"],
        description: "Created a dynamic social platform with protected routes, JWT-based authentication, and OTP password recovery. Engineered CRUD functionality for posts with timestamping and tagging, utilizing Axios for global state management.",
        link: "https://github.com/PankajV91505/Social-Media-Django"
    },
    {
        id: 3,
        title: "Automated Election Scraper",
        category: "Automation",
        year: "April 2025",
        tech: ["Playwright", "Python", "Pandas"],
        description: "Automated the extraction of structured demographic data and media files from government portals, compiling results into clean CSV datasets.",
        link: "https://github.com/PankajV91505/PlayWright_Project"
    },
    {
        id: 4,
        title: "Inventory Management System",
        category: "Database Management",
        year: "Feb 2025",
        tech: ["Flask", "MySQL", "SQLAlchemy"],
        description: "Developed an end-to-end inventory tracker with dynamic routing and database relationship mapping.",
        link: "https://github.com/PankajV91505/Grocery_Store_System"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 tracking-tighter">
                    Selected <span className="gradient-text">Works</span>
                </h2>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <Card className="gradient-border group hover:shadow-xl hover:scale-[1.005] transition-all duration-300">
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                                                {project.title}
                                            </CardTitle>
                                            <Badge variant="outline" className="font-mono text-xs">
                                                {project.year}
                                            </Badge>
                                        </div>
                                        <Button asChild className="gradient-btn rounded-full w-fit cursor-pointer">
                                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                <span>View on GitHub →</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <CardDescription className="gradient-text font-bold uppercase tracking-widest text-xs sm:text-sm !mt-1">
                                        {project.category}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
                                        {project.description}
                                    </p>
                                    <Separator />
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <Badge key={t} variant="secondary" className="font-mono text-xs">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

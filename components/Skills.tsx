'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
    {
        title: "Languages",
        emoji: "💻",
        skills: ["Python", "JavaScript", "C", "Bash/PowerShell"]
    },
    {
        title: "Frontend",
        emoji: "🌐",
        skills: ["React", "Vite", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
    },
    {
        title: "Backend",
        emoji: "⚙️",
        skills: ["FastAPI", "Django", "Flask"]
    },
    {
        title: "Databases",
        emoji: "🗄️",
        skills: ["PostgreSQL", "MySQL"]
    },
    {
        title: "Automation & Scraping",
        emoji: "🤖",
        skills: ["Playwright", "Selenium", "BeautifulSoup", "PyTesseract (OCR)"]
    },
    {
        title: "Tools & Git",
        emoji: "🔧",
        skills: ["Git", "GitHub", "Postman", "VSCode"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 tracking-tighter"
                >
                    Technical <span className="gradient-text">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <Card className="gradient-border h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                <CardHeader className="pb-3">
                                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                                        <span className="text-xl">{category.emoji}</span>
                                        <span className="gradient-text">{category.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-xs sm:text-sm"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

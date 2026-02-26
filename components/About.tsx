'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const stats = [
    { label: "Projects", value: "10+" },
    { label: "Experience", value: "1+ Yrs" },
    { label: "Tech Stack", value: "15+" },
];

const highlights = [
    "🚀 Full-Stack development with React, FastAPI, Django & Flask",
    "🤖 Python automation & web scraping specialist",
    "💾 Database architecture with PostgreSQL & MySQL",
    "🔐 OAuth, JWT & secure authentication systems",
    "📊 Data extraction with Playwright, Selenium & OCR",
];

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 tracking-tighter"
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">
                    {/* Left — Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 space-y-5"
                    >
                        <Card className="gradient-border">
                            <CardContent className="pt-6 space-y-4">
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                    Hi, I&apos;m <span className="text-foreground font-semibold">Pankaj Verma</span> — a passionate
                                    Full-Stack Developer from Ballia, Uttar Pradesh. I graduated with a
                                    <span className="text-foreground font-semibold"> B.Tech in Computer Science</span> (CGPA: 8.42)
                                    from Government Engineering College Jhalawar.
                                </p>
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                    Currently working as a <span className="gradient-text font-semibold">Full Stack Developer at Codebais</span>,
                                    building enterprise HRMS dashboards with React, FastAPI, and PostgreSQL. Previously, I worked as a freelance
                                    Python & Web Automation developer — building scrapers, dashboards, and RESTful APIs.
                                </p>
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                    I specialize in crafting scalable web applications from the ground up — from
                                    designing responsive UIs with React and Tailwind to architecting robust backends
                                    with FastAPI, Django, and Flask. I also have deep experience in Python-based automation
                                    and data extraction with Playwright, Selenium, and OCR.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="text-center gradient-border hover:scale-105 transition-transform duration-300">
                                        <CardContent className="pt-6 pb-4">
                                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                                            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Highlights & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-5"
                    >
                        <Card className="gradient-border h-fit">
                            <CardContent className="pt-6">
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">What I Do</h3>
                                <div className="space-y-3">
                                    {highlights.map((item, i) => (
                                        <motion.p
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.08 }}
                                            viewport={{ once: true }}
                                            className="text-sm sm:text-base text-muted-foreground"
                                        >
                                            {item}
                                        </motion.p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social CTA */}
                        <Card className="gradient-border">
                            <CardContent className="pt-6">
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Connect With Me</h3>
                                <div className="flex gap-3">
                                    <Button variant="outline" size="lg" className="flex-1 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                        <a href="https://linkedin.com/in/pankaj-verma-b73930273" target="_blank" rel="noopener noreferrer">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                            LinkedIn
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="lg" className="flex-1 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                        <a href="https://github.com/PankajV91505" target="_blank" rel="noopener noreferrer">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            GitHub
                                        </a>
                                    </Button>
                                </div>

                                <Separator className="my-4" />

                                <Button className="w-full gradient-btn rounded-xl cursor-pointer" size="lg" asChild>
                                    <a href="mailto:pankajv91505@gmail.com">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            Say Hello 👋
                                        </span>
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

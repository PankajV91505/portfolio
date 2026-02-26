'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

const projectHighlights = [
    "Hotel Booking System — React + Flask + Razorpay",
    "Social Media App — Django REST + JWT Auth",
    "Election Scraper — Playwright Automation",
    "HRMS Dashboard — FastAPI + React + Vite",
];

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1: Pankaj Verma intro (0 → 0.2)
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -120]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // Section 2: Tagline (0.15 → 0.4)
    const y2 = useTransform(scrollYProgress, [0.15, 0.4], [80, -80]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.22, 0.32, 0.4], [0, 1, 1, 0]);

    // Section 3: Project highlights (0.4 → 0.65)
    const y3 = useTransform(scrollYProgress, [0.4, 0.65], [80, -80]);
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.47, 0.57, 0.65], [0, 1, 1, 0]);

    // Section 4: CTA (0.65 → 0.85)
    const y4 = useTransform(scrollYProgress, [0.65, 0.85], [80, -80]);
    const opacity4 = useTransform(scrollYProgress, [0.65, 0.72, 0.78, 0.85], [0, 1, 1, 0]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none flex flex-col items-center justify-center z-10 text-white mix-blend-difference">
            {/* Section 1 — Name & Title */}
            <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute text-center px-4">
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                    <span className="gradient-text">Pankaj</span>{' '}
                    <span className="gradient-text-secondary">Verma</span>
                </h1>
                <p className="text-base sm:text-xl md:text-2xl mt-3 sm:mt-4 font-light tracking-[0.3em] uppercase opacity-80">
                    Full-Stack Developer
                </p>
            </motion.div>

            {/* Section 2 — Tagline */}
            <motion.div style={{ y: y2, opacity: opacity2 }} className="absolute left-4 sm:left-10 md:left-24 max-w-xl px-4">
                <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                    I build digital <br />
                    <span className="gradient-text-secondary">experiences.</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg mt-3 opacity-60 font-light max-w-md">
                    From scalable backends to beautiful frontends — crafting full-stack solutions.
                </p>
            </motion.div>

            {/* Section 3 — Project Highlights */}
            <motion.div style={{ y: y3, opacity: opacity3 }} className="absolute right-4 sm:right-10 md:right-24 max-w-lg text-right px-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] opacity-50 mb-3 sm:mb-4">Featured Projects</p>
                <div className="space-y-2 sm:space-y-3">
                    {projectHighlights.map((project, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium opacity-80"
                        >
                            {project}
                        </motion.p>
                    ))}
                </div>
            </motion.div>

            {/* Section 4 — CTA */}
            <motion.div style={{ y: y4, opacity: opacity4 }} className="absolute text-center px-4">
                <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                    Let&apos;s build <br />
                    <span className="gradient-text">something great.</span>
                </h2>
            </motion.div>
        </div>
    );
}

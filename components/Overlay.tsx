'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const y2 = useTransform(scrollYProgress, [0.15, 0.45], [100, -100]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);

    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [100, -100]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none flex flex-col items-center justify-center z-10 text-white mix-blend-difference">
            {/* Section 1 */}
            <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute text-center px-4">
                <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold tracking-tighter">
                    <span className="gradient-text">PANKAJ</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mt-4 font-light tracking-widest uppercase opacity-80">
                    Python Developer
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div style={{ y: y2, opacity: opacity2 }} className="absolute left-4 sm:left-10 md:left-32 max-w-lg px-4">
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight">
                    I build digital <br />
                    <span className="gradient-text-secondary">experiences.</span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div style={{ y: y3, opacity: opacity3 }} className="absolute right-4 sm:right-10 md:right-32 bottom-32 max-w-lg text-right px-4">
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight">
                    Bridging design <br />
                    <span className="gradient-text">& engineering.</span>
                </h2>
            </motion.div>
        </div>
    );
}

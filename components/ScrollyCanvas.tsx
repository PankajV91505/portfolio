'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Overlay from './Overlay';

const FRAME_COUNT = 119;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 0; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const threeDigitIndex = i.toString().padStart(3, '0');
                    img.src = `/sequence/${threeDigitIndex}.png`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image ${i}`);
                        resolve();
                    }
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            FRAME_COUNT,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    useEffect(() => {
        if (!isLoaded) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const currentProgress = scrollYProgress.get();
            const frameIndex = Math.min(FRAME_COUNT, Math.floor(currentProgress * FRAME_COUNT));
            renderFrame(frameIndex);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener('resize', resizeCanvas);
    }, [isLoaded, scrollYProgress, images]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                <Overlay scrollYProgress={scrollYProgress} />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-background">
                        <span className="font-mono text-sm animate-pulse gradient-text">LOADING SEQUENCE...</span>
                    </div>
                )}
            </div>
        </div>
    );
}

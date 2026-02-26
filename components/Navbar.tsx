'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full cursor-pointer"
                    aria-label="Toggle theme"
                >
                    <AnimatePresence mode="wait">
                        {theme === 'dark' ? (
                            <motion.svg
                                key="sun"
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-5 text-yellow-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                key="moon"
                                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-5 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </motion.svg>
                        )}
                    </AnimatePresence>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Switch to {theme === 'dark' ? 'light' : 'dark'} mode</p>
            </TooltipContent>
        </Tooltip>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2.5 backdrop-blur-xl' : 'py-4'}`}
            style={{
                background: isScrolled ? 'var(--navbar-bg)' : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--navbar-border)' : 'none',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="text-xl sm:text-2xl font-bold tracking-tighter">
                    <span className="gradient-text">PANKAJ</span>
                    <span className="text-muted-foreground">.</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Button
                            key={link.name}
                            variant="ghost"
                            size="sm"
                            asChild
                            className="text-muted-foreground hover:text-foreground relative group"
                        >
                            <a href={link.href}>
                                {link.name}
                                <span
                                    className="absolute -bottom-0.5 left-2 right-2 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                                    style={{ background: 'var(--gradient-primary)' }}
                                />
                            </a>
                        </Button>
                    ))}
                    <Separator orientation="vertical" className="mx-2 h-6" />
                    <ThemeToggle />
                </nav>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden backdrop-blur-xl border-t border-border"
                        style={{ background: 'var(--navbar-bg)' }}
                    >
                        <nav className="flex flex-col p-4 gap-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-muted-foreground hover:text-foreground"
                                        asChild
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <a href={link.href}>{link.name}</a>
                                    </Button>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

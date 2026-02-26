'use client';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Footer() {
    return (
        <footer className="py-10 sm:py-12 px-4 sm:px-6 md:px-12 bg-card border-t border-border">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-3">
                        <span className="gradient-text">PANKAJ VERMA</span>
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        Bridging design and engineering to build digital experiences.
                    </p>
                </div>

                <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3">Contact</h4>
                    <ul className="space-y-2">
                        <li>
                            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-sm sm:text-base" asChild>
                                <a href="mailto:pankajv91505@gmail.com">
                                    <svg className="w-4 h-4 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    pankajv91505@gmail.com
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-sm sm:text-base" asChild>
                                <a href="tel:+918107716619">
                                    <svg className="w-4 h-4 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    +91-8107716619
                                </a>
                            </Button>
                        </li>
                        <li className="text-muted-foreground text-sm sm:text-base flex items-center gap-2">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Ballia, Uttar Pradesh
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3">Social</h4>
                    <div className="flex gap-3">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                    <a href="https://linkedin.com/in/pankaj-verma-b73930273" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </a>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent><p>LinkedIn</p></TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                    <a href="https://github.com/PankajV91505" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent><p>GitHub</p></TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <Separator className="my-6 sm:my-8 max-w-7xl mx-auto" />

            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4 text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Pankaj Verma. All rights reserved.</p>
                <div className="flex gap-4">
                    <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-xs sm:text-sm" asChild>
                        <a href="#">Privacy Policy</a>
                    </Button>
                    <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-xs sm:text-sm" asChild>
                        <a href="#">Terms of Service</a>
                    </Button>
                </div>
            </div>
        </footer>
    );
}

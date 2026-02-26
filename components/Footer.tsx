'use client';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

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
                                <a href="mailto:pankajv91505@gmail.com">pankajv91505@gmail.com</a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-sm sm:text-base" asChild>
                                <a href="tel:+918107716619">+91-8107716619</a>
                            </Button>
                        </li>
                        <li className="text-muted-foreground text-sm sm:text-base">Ballia, Uttar Pradesh</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3">Social</h4>
                    <ul className="space-y-2">
                        <li>
                            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-sm sm:text-base" asChild>
                                <a href="https://linkedin.com/in/pankaj-verma-b73930273" target="_blank" rel="noopener noreferrer">
                                    LinkedIn ↗
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-sm sm:text-base" asChild>
                                <a href="https://github.com/PankajV91505" target="_blank" rel="noopener noreferrer">
                                    GitHub ↗
                                </a>
                            </Button>
                        </li>
                    </ul>
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

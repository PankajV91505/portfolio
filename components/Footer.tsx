'use client';

export default function Footer() {
    return (
        <footer id="contact" className="bg-neutral-900 text-white py-12 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold tracking-tighter mb-4">PANKAJ VERMA</h3>
                    <p className="text-gray-400">
                        Bridging design and engineering to build digital experiences.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <a href="mailto:pankajv91505@gmail.com" className="hover:text-white transition-colors">
                                pankajv91505@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+918107716619" className="hover:text-white transition-colors">
                                +91-8107716619
                            </a>
                        </li>
                        <li>Ballia, Uttar Pradesh</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Social</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <a
                                href="https://linkedin.com/in/PankajVerma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/PankajV91505"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Pankaj Verma. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

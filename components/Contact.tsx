'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-muted/30 border-t border-border">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg">
                        Have a project in mind? Let&apos;s build something together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="gradient-border">
                        <CardHeader>
                            <CardTitle className="gradient-text text-lg">Send a Message</CardTitle>
                            <CardDescription>Fill in the form below and I&apos;ll get back to you.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                        <Input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your Name"
                                            className="focus-visible:ring-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                        <Input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="pankaj@example.com"
                                            className="focus-visible:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <Textarea
                                        id="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about your project..."
                                        className="resize-none focus-visible:ring-primary"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`w-full gradient-btn rounded-lg text-base sm:text-lg py-5 sm:py-6 cursor-pointer font-bold ${status === 'loading' ? 'opacity-60 cursor-wait' : 'hover:scale-[1.01]'
                                        }`}
                                    size="lg"
                                >
                                    <span>{status === 'loading' ? 'Sending...' : 'Send Message ✨'}</span>
                                </Button>

                                {status === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
                                        <Badge variant="outline" className="text-green-500 border-green-500/30 px-4 py-2 text-sm">
                                            ✅ Message sent successfully!
                                        </Badge>
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
                                        <Badge variant="outline" className="text-red-500 border-red-500/30 px-4 py-2 text-sm">
                                            ❌ Something went wrong. Please try again.
                                        </Badge>
                                    </motion.div>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

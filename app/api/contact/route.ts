import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check Gmail credentials
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error('Gmail credentials not configured');
            return NextResponse.json(
                { success: false, error: 'Email service not configured' },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Send email to you
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: 'pankajv91505@gmail.com',
            replyTo: email,
            subject: `🚀 New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #ffffff; border-radius: 16px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #a855f7, #06b6d4); padding: 24px 32px;">
                        <h1 style="margin: 0; font-size: 24px; color: #ffffff;">📬 New Portfolio Message</h1>
                    </div>
                    <div style="padding: 32px;">
                        <div style="margin-bottom: 20px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
                            <p style="margin: 0 0 8px 0; font-size: 14px; color: #a1a1aa;">From</p>
                            <p style="margin: 0; font-size: 18px; font-weight: 600;">${name}</p>
                        </div>
                        <div style="margin-bottom: 20px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
                            <p style="margin: 0 0 8px 0; font-size: 14px; color: #a1a1aa;">Email</p>
                            <a href="mailto:${email}" style="color: #a855f7; font-size: 16px; text-decoration: none;">${email}</a>
                        </div>
                        <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
                            <p style="margin: 0 0 8px 0; font-size: 14px; color: #a1a1aa;">Message</p>
                            <p style="margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
                        </div>
                        <p style="margin-top: 24px; font-size: 12px; color: #71717a; text-align: center;">
                            Sent from your Portfolio website • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                        </p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}

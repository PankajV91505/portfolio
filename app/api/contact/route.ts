import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Save to Database
        let savedMessage;
        try {
            savedMessage = await prisma.contactMessage.create({
                data: {
                    name,
                    email,
                    message,
                },
            });
        } catch (dbError) {
            console.error('Database Error:', dbError);
            return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
        }

        // 2. Send Email (only if env vars are present)
        if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_APP_PASSWORD,
                    },
                });

                await transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: 'pankajv91505@gmail.com',
                    subject: `New Portfolio Contact: ${name}`,
                    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
                });
            } catch (emailError) {
                console.error('Email Error:', emailError);
                // We don't fail the request if email fails, but we log it
                // You might want to return a warning or just proceed since DB save worked
            }
        }

        return NextResponse.json({ success: true, data: savedMessage });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

# Portfolio Website

A professional portfolio website built with Next.js, React, Tailwind CSS, Framer Motion, and Prisma (SQLite).

## Features

- **Responsive Design**: Fully responsive layout for all devices.
- **Scroll Animations**: Smooth scroll animations using Framer Motion.
- **Dynamic Content**: Experience, Skills, and Projects sections.
- **Contact Form**: Functional contact form with email notifications and database storage.
- **Theme**: Dark mode aesthetic with premium UI components.

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS v4, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: SQLite (via Prisma ORM)
- **Email**: Nodemailer (Gmail SMTP)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/PankajV91505/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your Gmail credentials for the contact form:
    ```env
    GMAIL_USER=pankajv91505@gmail.com
    GMAIL_APP_PASSWORD=your_app_password_here
    ```
    > **Note:** You must generate an App Password from your Google Account settings (Security > App Passwords). Do not use your regular login password.

4.  **Database Setup:**
    Initialize the SQLite database:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `app/`: Next.js app router and API routes.
- `components/`: Reusable UI components (Navbar, Footer, Projects, etc.).
- `prisma/`: Database schema and SQLite file.
- `public/`: Static assets (images, icons).

## Database Management

To view the database contents (contact form submissions), run:
```bash
npx prisma studio
```
This opens a web interface at http://localhost:5555.

## Deployment

This project can be easily deployed on Vercel or Netlify.
**Note:** Since this uses SQLite, Vercel deployment requires specific configuration (or switching to a cloud database like PostgreSQL on Neon/Supabase) as SQLite files are not persistent on serverless functions.

## Author

**Pankaj Verma**
- [LinkedIn](https://linkedin.com/in/PankajVerma)
- [GitHub](https://github.com/PankajV91505)

# Pype AI Landing Page Clone
This repository contains a clone of the [Pype AI landing page](https://www.pypeai.com) built with **Next.js** (App Router) and integrated with **Strapi Headless CMS**. The project is designed to demonstrate responsive design, server-side rendering (SSR) for SEO optimization, and dynamic content rendering with a focus on performance and modern development practices.

## Demo
- **Deployed Application**: [Deployed URL](https://pypeai-frontend.vercel.app)
- **GitHub Repository**: [Repository URL](https://github.com/Jarvis-3000/pypeai-frontend)

## Table of Contents
- [Objective](#objective)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [CMS Integration](#cms-integration)
- [Setup Instructions](#setup-instructions)
- [Dynamic Routes](#dynamic-routes)
- [Performance Optimization](#performance-optimization)

## Objective
The goal of this project is to clone the Pype AI landing page using **Next.js** with the **App Router**, integrating with a headless CMS (Strapi), and ensuring:
- Responsive design
- Performance optimization
- Dynamic routes
- Light/Dark theme toggle
- CMS-driven content rendering

## Tech Stack
- **Next.js 14** (with App Router)
- **Tailwind CSS** for styling
- **Strapi** as the Headless CMS (hosted on Render)
- **Cloudinary** for image and icon management
- **PostgreSQL** database for CMS data
- **Vercel** for deployment

## Features
- **Dark/Light Theme**: A theme toggle is implemented, allowing users to switch between dark and light modes.
- **Dynamic Routes**: Feature details are accessible via dynamic routes (e.g., `/feature/[id]`).
- **SSR for SEO**: The app leverages SSR to fetch and render data from Strapi, ensuring optimal SEO performance.
- **Responsive Design**: The landing page is fully responsive, optimized for desktop and mobile screens.
- **CMS-Driven Content**: Content such as features and company data is stored in Strapi and fetched dynamically using API routes.

## CMS Integration
- **Strapi Headless CMS**: Integrated Strapi to manage landing page data (features, images, etc.).
- **Cloudinary**: Used Cloudinary for image storage, allowing efficient media management and optimization.
- **API Routes**: Implemented Next.js API routes to fetch dynamic content from Strapi.

  ## Example Pictures
  ![image](https://github.com/user-attachments/assets/243ed3c6-e076-4875-864d-1699d68a3986)

  ![image](https://github.com/user-attachments/assets/b695af13-e827-4715-9dda-e8c1d1cee893)

  ![image](https://github.com/user-attachments/assets/eec002bc-2562-43b4-8aeb-3b7141f6eb0b)

  ![image](https://github.com/user-attachments/assets/2915da44-42f1-4824-8f4c-34d0f0174630)




## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pype-ai-landing-page.git
   cd pype-ai-landing-page
   ```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

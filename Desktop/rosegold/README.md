# ELAN BUSINESS COMMUNITY - Landing Page

A modern, responsive landing page for ELAN BUSINESS COMMUNITY built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Custom gold + dark color theme
- 📱 Fully responsive design (mobile-first)
- ⚡ Built with Vite for fast development
- 🎯 Modern UI with smooth animations and hover effects
- ♿ Accessible with proper focus states

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

This project is configured for easy deployment on Vercel.

#### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

#### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite framework and use the `vercel.json` configuration
6. Click "Deploy"

The project is already configured with:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ SPA routing support (all routes redirect to index.html)
- ✅ Optimized caching for static assets

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite

## Color Theme

- Background Dark: `#19171b`
- Gold Accent: `#9e8123`
- Brown Dark: `#2f2921`
- Brown Warm: `#563a17`
- Text Main: `#f5f5f5`
- Text Subtitle: `#d1c7a3`


# TypeScript SPA Template

## Note

This project was generated with help from Claude (Anthropic's AI). I'm currently reviewing and understanding how everything connects together. What you see here is a template that I've modified to create "vincespa". If you've stumbled upon this, please note that this is my first attempt at creating a React SPA with the intent of hooking up to GitHub pages, and I'm still learning about Vite and its configurations.

## Setup

1. Configure repository name:
   - In `src/js/config.ts`: Update `repoName`
   - In `public/404.html`: Update redirect path

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

## Requirements

- Node.js (version 18+ or 20+ recommended)
- npm (comes with Node.js)

## Project Structure

```
src/
├── types/       # TypeScript types
├── js/          # Utils and config
├── components/  # React components
├── pages/       # Route components
├── Router.tsx   # App routing
└── main.tsx     # Entry point
```

Built with Vite, TypeScript, and React. Configured for automatic deployment to GitHub Pages.

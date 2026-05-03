# Terminal Portfolio

React, TypeScript, Vite, and Tailwind CSS implementation of the terminal-style
portfolio reference.

## Run

```bash
npm install
npm run dev
```

## Project Structure

- `src/data/portfolio.ts` - placeholder portfolio content
- `src/types/portfolio.ts` - shared TypeScript types
- `src/components/layout` - terminal shell, sidebar, title bar, status bar
- `src/components/sections` - About, Experience, Education, Projects, Skills, Contact
- `src/components/ui` - reusable UI primitives used by the sections
- `src/index.css` - Tailwind entrypoint and terminal theme styles

## Edit Content

Most placeholder portfolio data lives in `src/data/portfolio.ts`:

- `profile`
- `portfolioMeta`
- `aboutIntro`
- `aboutInfo`
- `experience`
- `education`
- `projects`
- `skills`
- `contactLinks`

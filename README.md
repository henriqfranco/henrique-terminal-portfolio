# Terminal Portfolio

React, TypeScript, Vite, and Tailwind CSS implementation of a terminal-style
portfolio.

## Run

```bash
npm install
npm run dev
```

## Run With Docker

Build the production image and run it in a container:

```bash
docker compose up -d --build
```

Open the app at `http://localhost:8080`.

View logs:

```bash
docker compose logs -f
```

Stop and remove the container:

```bash
docker compose down
```

This Docker setup builds the Vite app inside a Node container, then serves the
generated `dist/` files with nginx.

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

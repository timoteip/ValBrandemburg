# Val Brandemburg Inc.

Marketing site for Val Brandemburg Inc., a kitchen, bathroom, and whole-home remodeling contractor. The site's purpose is to generate consultation requests.

## Requirements

- Node.js 20 or 22 (LTS)
- npm 10+

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Script                 | Purpose                    |
| ---------------------- | -------------------------- |
| `npm run dev`          | Development server         |
| `npm run build`        | Production build           |
| `npm start`            | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run typecheck`    | TypeScript, no emit        |
| `npm run format`       | Prettier, write            |
| `npm run format:check` | Prettier, check only       |

## Environment

See `.env.example` for the full list. `.env.local` holds real values and is never committed.

## Stack

Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion.

Pages are Server Components and statically rendered. The contact form's route handler is the only server-side runtime. See `conventions.md` for the rules this project is built under, and `docs/decisions.md` for the reasoning behind architectural choices.

## Content

Copy, services, and gallery items live in typed modules under `src/content/`. There is no CMS: content updates ship as commits.

Images live in `public/images/`, grouped by usage, and are declared with their alt text in `src/content/images.ts`.

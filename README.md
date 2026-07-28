# Val Brandemburg Inc.

A website for a remodeling contractor who does kitchens, bathrooms, and whole-home renovations. Its main job is to get visitors to request a free consultation.

## What it does

- Explains the remodeling services offered
- Shows a photo gallery of finished projects
- Has a contact form so visitors can request a consultation
- Loads fast, because the pages are built ahead of time instead of being assembled on every visit
- All the text and photos live in the code, so updates go out the same way code changes do — there's no separate editor to log into

## Built with

- **Next.js** – Builds the website.
- **TypeScript** – Helps catch coding mistakes.
- **Tailwind CSS** – Styles the website.
- **shadcn/ui** – Ready-made pieces like buttons and form fields, so they don't have to be built from scratch.
- **Framer Motion** – Adds the animations and smooth transitions.

## Getting started

You'll need Node.js 20 or 22 installed first. Node.js is the program that runs the website on your computer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open http://localhost:3000 in your browser.

Fill in the values in `.env.local` before starting — `.env.example` lists what's needed. That file holds passwords and keys, so it never gets uploaded to GitHub.

# Adith M D — Personal Portfolio

A responsive Next.js portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Production

Set `NEXT_PUBLIC_SITE_URL` to your deployed canonical domain (see `.env.example`), then run:

```bash
npm run build
npm run start
```

## Design system

The global design tokens live at the top of `app/globals.css`. Update the `:root` values for dark mode and `:root[data-theme="light"]` for light mode. The theme toggle is in `components/ThemeToggle.tsx` and remembers the visitor's choice.

## Existing functionality

The existing page order, section IDs, project filtering, CV button, navigation interactions, contact actions, social links, and personal data source are retained.

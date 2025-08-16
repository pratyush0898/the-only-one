# The Only One

A modern, responsive portfolio website built with **Next.js** and **TypeScript**. This README expands on the short version you dropped in — installation, development tips, deployment guidance, recommended environment variables, contribution notes, and troubleshooting.

---

## Table of contents

* [About](#about)
* [Features](#features)
* [Why this project](#why-this-project)
* [Tech stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Getting started](#getting-started)
* [Environment variables](#environment-variables)
* [Development](#development)
* [Build and production](#build-and-production)
* [Deployment (Vercel)](#deployment-vercel)
* [Project structure](#project-structure)
* [Design and accessibility notes](#design-and-accessibility-notes)
* [Testing and linting](#testing-and-linting)
* [Contributing](#contributing)
* [Troubleshooting](#troubleshooting)
* [Roadmap](#roadmap)
* [Credits and acknowledgements](#credits-and-acknowledgements)
* [License](#license)
* [Contact](#contact)

---

## About

This repository hosts a personal portfolio called **The Only One**. It aims to be fast, accessible, and easy to maintain. It showcases projects, skills, collaboration opportunities, and a playful "Mischief" section for experiments and side projects.

## Features

* Modern, responsive layout for desktop and mobile
* Light and dark theme support with system preference fallback
* Mobile-friendly navigation and accessible keyboard focus states
* Sections: Hero, About, Projects, Skills, Collaboration, Contact form, Mischief
* Clean, modular React components using TypeScript
* Tailwind CSS based styling for rapid iteration

## Why this project

This is a focused portfolio template that balances performance with personality. It is built so you can:

* Ship a portfolio quickly
* Reuse components across other projects
* Showcase both polished projects and wild experiments

## Tech stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Node.js for local development
* Optional: Web3Forms for contact form handling

## Prerequisites

* Node.js 18 or later
* npm (or yarn / pnpm) installed
* Git for version control

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/pratyush0898/the-only-one.git
cd the-only-one
npm install
```

Copy the example environment file and add any keys you need:

```bash
cp .env.example .env
# Edit .env with your preferred editor
```

Run the dev server:

```bash
npm run dev
# Open http://localhost:3000
```

## Environment variables

Add these to your `.env` file if you use the related features. Keep secrets out of source control.

```env
NEXT_PUBLIC_WEB3FORMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_SITE_TITLE="The Only One"
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX # optional
```

The contact form in this project is wired to Web3Forms by default. You can swap it for Netlify Forms, Formspree, or a custom endpoint.

## Development

Recommended commands:

* `npm run dev` — start development server
* `npm run build` — build for production
* `npm start` — start the production server (after build)
* `npm run lint` — run linter (if configured)

Tips:

* Keep components small and focused. One UI responsibility per file.
* Centralize theme logic so it is consistent across server and client renders.
* Use incremental static rendering for project pages to balance freshness and performance.

## Build and production

Build the site:

```bash
npm run build
```

Then run it locally as a production server:

```bash
npm start
```

For static export you can use `next export` if your app only uses static features. Otherwise prefer Vercel or a Node hosting provider.

## Deployment (Vercel)

Vercel is the recommended host for Next.js projects.

1. Push your repo to GitHub.
2. Import the project in Vercel and set environment variables (the same ones in `.env`).
3. Set the build command to `npm run build` and the output directory to `.next`.

If you want a custom domain such as `yourname.com`:

* Add the domain in Vercel dashboard.
* Point DNS A or CNAME records according to Vercel instructions.

## Project structure

```
├── app/              # Next.js app directory (routes, layouts, pages)
├── components/       # Reusable React components
│   └── ui/           # Small UI primitives (Button, Card, etc.)
├── context/          # Theme and other providers
├── lib/              # Utilities and small helpers
├── public/           # Static assets and icons
├── styles/           # Global styles and Tailwind config
└── util/             # Scripts and additional utilities
```

## Design and accessibility notes

* Follow semantic HTML structure for screen readers
* Provide alt text for images and icons
* Ensure color contrast meets WCAG AA where possible
* Keep focus styles visible and predictable for keyboard users

## Testing and linting

If you add tests, prefer lightweight frameworks like Vitest or Jest for unit tests and Playwright for end-to-end checks. Add lint rules and pre-commit hooks to keep code quality steady.

Example scripts (optional):

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Contributing

Contributions are welcome. Keep changes small and focused. If you submit a PR:

1. Open an issue describing the problem or feature.
2. Fork and branch from `main`.
3. Keep commits tidy and add a short description in the PR.

Consider adding a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` if you expect outside contributors.

## Troubleshooting

* **`npm run dev` fails**: delete `node_modules` and `package-lock.json`, then `npm install` again.
* **Contact form not sending**: check `NEXT_PUBLIC_WEB3FORMS_API_KEY` and the Web3Forms dashboard for errors.
* **Hydration mismatch**: confirm code that differs between server and client (theme is a common offender).

If the issue persists, include the error output and node version when opening an issue.

## Roadmap

Ideas for improvements:

* Add SEO structured data and Open Graph tags per project page
* Unit and integration tests
* CI pipeline for linting and tests
* Analytics toggle and privacy-friendly tracking
* A small admin UI to manage showcased projects without redeploying

## Credits and acknowledgements

Built with Next.js and Tailwind CSS. Inspired by modern creator portfolios and clean UI patterns.

## License

This project is released under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## Contact

If something breaks or you want to collab, open an issue or contact at [pratyush.devloper@proton.me](mailto:pratyush.devloper@proton.me).

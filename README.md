# Sultan Shah Portfolio

A modern, responsive personal portfolio for Sultan Shah, a BS Software Engineering student at FAST NUCES. The site presents frontend engineering, full-stack development, 3D design interests, selected projects, education, and a validated contact flow in an editorial visual system.

## Technologies used

- React 18
- Vite
- Framer Motion
- Lucide React
- Modern CSS with responsive layout, CSS variables, and prefers-reduced-motion support
- Unsplash image CDN for optimized project imagery

## Features

- Responsive desktop, tablet, and mobile layouts
- Sticky-style responsive navigation with mobile menu
- Smooth section navigation and scroll-reveal animations
- Light/dark theme toggle
- Filterable project portfolio by category
- Three project case-study cards with source links to [Sultan Shah&apos;s GitHub repository](https://github.com/sultan101004/Personal-Porfolio) and technology tags
- Skills, toolset, education, and experience timeline
- Contact form with required-field and email validation states
- Social links and downloadable-CV-ready navigation area

## Installation and setup

Requirements: Node.js 18+ and npm.

Place the supplied profile photo at `public/sultan-shah.jpg`. The interface uses that local image first and falls back to a neutral remote portrait if the file is not present.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Deployment

This project is ready for Vercel, Netlify, or GitHub Pages. For Vercel, import the GitHub repository and use:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The form is currently client-side validated. Connect it to Formspree, Netlify Forms, or a serverless endpoint before production use.

## Screenshots

Add screenshots of the completed responsive website here before submission. Recommended captures:

- Desktop home/hero and selected work
- Mobile navigation and project filters
- Contact validation success state

Example Markdown:

```md
![Desktop homepage](./screenshots/desktop-home.png)
![Mobile layout](./screenshots/mobile-home.png)
```

## Submission checklist

- Push the complete source to a public GitHub repository.
- Add the instructor as a repository collaborator.
- Deploy the production build and add the live URL to the submission form.
- Use meaningful commits such as `feat: build portfolio hero and navigation` and `feat: add project filtering and contact validation`.

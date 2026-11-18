# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers, recruiters, and engineering or design leads who are filling full-time front-end developer or UX roles. They usually arrive from a resume, LinkedIn, or GitHub link and spend a few minutes deciding whether Demi is worth an interview. They need to answer four questions fast: what can Demi build, how good is the work, what is the stack, and how do they get in touch or get the resume.

Secondary: freelance clients and people who want to talk shop. The contact copy stays open to them, but they come after hiring audiences.

## Product Purpose

This is the personal portfolio of Demi Sokoya, a front-end developer and UX designer based in Lagos. It exists to turn a hiring visitor into an interview: shipped projects with live and repo links as proof, a downloadable resume, and a direct way to reach out.

Success means a hiring visitor leaves knowing Demi both designs and builds, has looked at at least one live project, and has the resume or a contact route in hand.

## Positioning

Demi is a dev + UX hybrid. Demi designs interfaces (Figma, Illustrator) and builds them (React, TypeScript), so nothing is lost between design intent and the shipped product. The site itself should prove this: it is a designed and hand-built artifact as well as a container for work.

## Operating Context

- Visitors come from job applications, LinkedIn, and GitHub, often on a laptop between other tasks and sometimes on a phone.
- It is a single-page site with anchored sections: Hero, Work, Resume, Playlist ("Currently listening"), and Contact.
- The resume is a PDF download at `/demi_sokoya_resume.pdf`.
- The site is deployed on Vercel at `https://personal-website-inky-beta.vercel.app/`. No custom domain is recorded yet.

## Capabilities and Constraints

- Stack: React 19, TypeScript, Vite, Chakra UI v3, Font Awesome, and Vitest/Testing Library in devDependencies.
- Project content lives in `src/data/index.ts` (`projects`, `skills`). Unfinished slots show as ghost cards ("In progress").
- `illustrations` in `src/data/index.ts` holds placeholder entries (colour swatches and no artwork) and nothing renders it. Whether illustration work appears on the site is undecided.
- Location is Lagos.
- Contact channels: email (`hello@demisokoya.dev`), GitHub (`demi-sokoya`), LinkedIn (`dsokoya`).

## Brand Commitments

- Name: Demi Sokoya. "Demi" is the wordmark in the header.
- Title: "Front-end developer & UX designer."
- Voice: warm, plain, a little wry and personal (for example "It works. I don't question it."), never corporate. Current core line: "Building things for the web, that feel good to use." Craft promise: "fast, accessible, and considered."

## Evidence on Hand

- Projects: **Weatherly** (featured; React weather app with Wikipedia city photos; live and repo links; `src/images/weatherly.png`) and **Little Lemon** (React SPA with routing, form validation, and a Jest suite; live and repo links; `src/images/little-lemon.png`).
- Resume PDF: `public/demi_sokoya_resume.pdf` (labelled "updated Sep 2026").
- Skills list in `src/data/index.ts`.
- Spotify playlist embed (a personality signal).
- OG image: `public/og-image.png`.
- None of these exist: testimonials, client logos, employer names on the site, metrics, case-study write-ups, or real illustration artwork. Do not invent any of them.

## Product Principles

1. **Hiring signal first.** Every section should help a hiring manager judge Demi's ability fast. Personality supports that judgement and does not replace it.
2. **Show the hybrid.** Make the design-and-build pairing visible in the work and in the site's own craft. Saying "UX designer" is not enough.
3. **Real proof only.** Live links, repos, and the resume carry the claims. Leave honest gaps ("In progress") rather than filler.
4. **Practise the promise.** The site has to be fast, accessible, and considered itself, because a hiring visitor will judge the claim by the container.

## Accessibility & Inclusion

Accessibility is a listed skill and a stated craft promise, so the site should meet WCAG 2.2 AA: keyboard-navigable, respects user font size (the root already inherits the browser default), and honours reduced-motion preferences.

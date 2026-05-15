# Total Detail Center Fryslân — Premium Website

## Original Problem Statement
Build a pixel-perfect, Porsche-level premium replica of the car detailing website "Total Detail Center Fryslân" (Robert Visser, sinds 2011). Heavy animations, alternating dark/light section rhythm, real business info, dynamic pricing quiz (-5%/+20% range), specific Sun-Tech & Madico window tinting pricing, OpenStreetMap with exact coordinates (53.2435650, 6.0369206), real customer reviews, WhatsApp lead capture.

User language: **Dutch (Nederlands)**.

## Tech Stack
- React + Tailwind CSS + Framer Motion + Lucide-react
- Frontend-only (no backend yet)
- OpenStreetMap via iframe, WhatsApp via wa.me links

## What's Implemented (current state)
- Premium dark/light alternating section rhythm
- Hero: red card with BMW koplamp + 4.5 reviews badge + 9H ceramic coating badge
- Floating glassmorphism Header with auto theme inversion (dark/light) + scroll-spy active indicator + scroll progress bar
- Dynamic Pricing Quiz (4-stap calculator with -5%/+20% range, replaces flat pricing tables)
- Window Tinting section — fully redesigned (Feb 2026):
  - Single hero BMW image with 70/50/35/20/5% percentages baked in
  - 5-column percentage scale below image (Licht/Medium/Donker/Privacy/Limo)
  - Brand chips: Sun-Tech, Madico, Eigen tint-meter, Dot-Matrix
  - Premium price list card with all 7 tint prices
- Real reviews (Sjoukje, Aron, Antsje) — no AI fluff
- 15+ years history, OpenStreetMap with exact coords
- WhatsApp pre-filled message integration

## Files of Reference
- /app/frontend/src/components/site/Header.jsx — dynamic theme inversion + scroll-spy
- /app/frontend/src/components/site/Tinting.jsx — redesigned around single hero image
- /app/frontend/src/components/site/Hero.jsx — red card BMW design
- /app/frontend/src/components/site/PricingQuiz.jsx — dynamic calculator
- /app/frontend/src/pages/Home.jsx — section assembly
- /app/frontend/src/data/mock.js — all user-uploaded images + company data

## Backlog (P1 — pending user decision)
- Backend integration: store quiz submissions + contact form in MongoDB
- Email notifications on new lead (e.g., Resend)
- Admin dashboard for lead overview
- Additional UI polish per user feedback

## Changelog
- 2026-02: Floating header with dynamic color inversion + scroll-spy verified working
- 2026-02: Tinting section fully redesigned using only the new BMW tint hero image

# ScholarBridge AI — Showcase Landing Page

Official landing page showcase for **ScholarBridge AI** ("Find. Apply. Track. Succeed.") — an AI-assisted scholarship platform designed to simplify scholarship discovery, application, document readiness, and tracking for Scheduled Tribe students.

---

## 🚀 Features

- **Hero Showcase**: Features the brand headline, mission description, "Watch Demo" & "Explore" CTAs, and a large **9:16 vertical smartphone frame** playing the local demo video with dedicated controls and fallbacks.
- **Problem Section**: 3 core challenge cards:
  - *Find the Right Scholarship*
  - *Understand Required Documents*
  - *Track Your Application*
- **Solution Section**: 4 unified platform cards:
  - *AI Scholarship Matching*
  - *Voice Assistance (English, Tamil, Telugu, Hindi)*
  - *Document Intelligence (Pre-flight OCR & readiness checks)*
  - *Application Tracking (Milestone transparency)*
- **How It Works**: 7-stage visual lifecycle pipeline (`Profile → Match → Apply → Documents → AI-Assisted Checks → Officer Review → Official Decision`) highlighting that AI assists the workflow while authorized officials retain final decisions.
- **Product Gallery**: Interactive interface previews for *Dashboard*, *Scholarship Matching*, and *Officer Portal* with click-to-enlarge modal inspection.
- **Final CTA**: High-impact quote, brand sign-off, and quick action buttons.
- **Responsive & Modern Design**: Tailored deep navy palette (`#070d1e`), subtle cyan accents, glassmorphic surfaces, and zero bulky animations.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel ready (`vercel.json` included)

---

## 🏃 Getting Started

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The optimized static bundle will be generated in `dist/`.

---

## 📦 Project Structure

```
ScholarBridge AI landing page/
├── public/
│   ├── assets/
│   │   ├── scholarbridge-demo.mp4  # 9:16 Vertical demo video
│   │   ├── dashboard.png           # Student Dashboard screenshot
│   │   ├── find-scholarships.png   # AI Matching screenshot
│   │   └── officer-portal.png      # Officer Portal screenshot
│   └── favicon.svg                 # Brand SVG icon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky header with navigation
│   │   ├── Hero.tsx                # Hero with 9:16 smartphone player
│   │   ├── Problem.tsx             # 3 Challenge cards
│   │   ├── Solution.tsx            # 4 Platform capability cards
│   │   ├── HowItWorks.tsx          # 7-step pipeline & governance note
│   │   ├── Product.tsx             # 3 UI preview cards with modal triggers
│   │   ├── FinalCTA.tsx            # Closing quote & CTA
│   │   ├── Footer.tsx              # Brand footer & top navigation
│   │   ├── VideoModal.tsx          # Dedicated theater mode video modal
│   │   └── ImageModal.tsx          # High-resolution screenshot zoom modal
│   ├── App.tsx                     # Main layout assembly
│   ├── index.css                   # Tailwind imports & custom utilities
│   └── main.tsx                    # React DOM entry point
├── vercel.json                     # Vercel deployment config
└── package.json
```

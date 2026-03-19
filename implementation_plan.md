# Cosmonet AI — React.js Landing Page: V5 / V6 / V7 Full Planning

## 1. Project Foundation (Shared Across All Versions)

### Tech Stack
| Layer | Technology |
|---|---|
| Framework | React 18+ (via Vite) |
| Styling | Vanilla CSS Modules (per-component `.module.css`) |
| Animations | GSAP + AOS (scroll-triggered) |
| Icons | React Icons (Lucide) |
| Fonts | Google Fonts — Inter (body), Outfit (headings), JetBrains Mono (tech labels) |
| Routing | React Router v6 (single-page with anchor sections) |
| SEO | React Helmet Async (meta tags, Open Graph, structured data) |
| Build | Vite 5+ |
| Deployment | Vercel / Netlify |

### Project Structure
```
d:\cosmonet-ai\
├── public/
│   └── logo.png              ← User will place logo here
├── src/
│   ├── assets/                ← Images, icons
│   ├── components/
│   │   ├── Navbar/            ← MegaMenu nav
│   │   ├── Hero/
│   │   ├── Stats/
│   │   ├── Expertise/
│   │   ├── Services/
│   │   ├── Industries/
│   │   ├── WhyChoose/
│   │   ├── Partnership/
│   │   ├── Offerings/
│   │   ├── Blog/
│   │   ├── Careers/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ui/                ← Shared: Button, Card, SectionLabel, Counter
│   ├── data/                  ← Static content JSON (services, industries, etc.)
│   ├── hooks/                 ← useScrollAnimation, useCountUp
│   ├── styles/
│   │   ├── global.css         ← CSS reset, tokens, typography
│   │   └── variables.css      ← Design tokens (version-specific)
│   ├── App.jsx
│   ├── main.jsx
│   └── seo.js                ← SEO config with all keywords
├── index.html                 ← SEO meta in <head>
├── package.json
└── vite.config.js
```

### Git Branch Strategy
| Branch | Version | Purpose |
|---|---|---|
| `main` | — | Base project skeleton |
| `v5` | V5 Dark Elegance | Andersen-inspired dark nav + Cosmonet navy theme |
| `v6` | V6 Light Corporate | White primary + dark accent sections |
| `v7` | V7 Vivid Gradient | Purple/teal gradient + colorful modern |

---

## 2. Navigation (Primary Reference: Andersen Lab)

All 3 versions share the **same navigation structure**, only colors differ.

### Navbar Layout
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] COSMONET AI    Home | Services ▾ | Tech Stack ▾ |   │
│                       Industries ▾ | Insights | Careers |   │
│                       Contact          [Get Started] CTA    │
└─────────────────────────────────────────────────────────────┘
```

### Mega-Menu: Services Dropdown (Andersen-style)
```
┌──────────────────────────────────────────────────────────────┐
│  AI & Data              │  Application Dev  │  Cyber Security│
│  ────────               │  ────────────     │  ──────────    │
│  Artificial Intelligence│  Web Apps         │  Threat Defense│
│  Machine Learning       │  Mobile Apps      │  Compliance    │
│  Data Engineering       │  Enterprise Apps  │  Pen Testing   │
│  Generative AI / LLM    │  SaaS Products    │  SOC Services  │
│                         │                   │                │
│  Digital Transformation │  Software Eng.    │  Support       │
│  ────────────────       │  ─────────────    │  ───────────   │
│  Cloud Migration        │  API & Micro      │  DevOps / CI/CD│
│  Process Automation     │  Full-stack Dev   │  Maintenance   │
│─────────────────────────│───────────────────│────────────────│
│  MVP Services           │  Staff Augment.   │                │
│  ────────────           │  ──────────────   │                │
│  Rapid Prototyping      │  Hire Engineers   │                │
│  PoC Development        │  Dedicated Teams  │                │
└──────────────────────────────────────────────────────────────┘
```

### Mega-Menu: Tech Stack Dropdown
```
┌──────────────────────────────────────────────────────────────┐
│  AI & ML                │  Cloud            │  DevOps        │
│  ──────                 │  ─────            │  ──────        │
│  TensorFlow / PyTorch   │  AWS              │  Docker        │
│  Hugging Face           │  Azure            │  Kubernetes    │
│  OpenAI API             │  GCP              │  Jenkins       │
│  LangChain              │  Vercel           │  GitHub Actions│
│                         │                   │                │
│  Frontend               │  Backend          │  Data          │
│  ────────               │  ───────          │  ────          │
│  React / Next.js        │  Node.js          │  PostgreSQL    │
│  Angular                │  Python / FastAPI  │  MongoDB       │
│  Vue.js                 │  Java / Spring    │  Redis         │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Landing Page Sections (All 13 — Same Content, Different Skin)

| # | Section | Content Summary |
|---|---|---|
| 1 | **Hero Banner** | "Engineering the Future with AI" + tagline + 2 CTAs |
| 2 | **H1 Intro** | About Cosmonet AI full paragraph |
| 3 | **H2 Stats** | 50+ years, 150+ projects, 25+ specialists, 100% commitment |
| 4 | **H3 Expertise** | Core Technology Stack (9 items) |
| 5 | **H4 Services** | 8 service categories with cards |
| 6 | **H5 Industries** | 5+ industry verticals |
| 7 | **H6 Why Choose** | 5 differentiators |
| 8 | **H7 Partnership** | Strategic partner section + CTA |
| 9 | **H8 Blog** | Blog carousel (recent posts) |
| 10 | **H9 Careers** | Join the team + View Openings CTA |
| 11 | **H10 Contact** | Contact form + email/phone |
| 12 | **Footer** | Links, services, social icons, copyright |
| 13 | **Navbar** | Sticky nav with mega-menu dropdowns |

---

## 4. Version V5 — "Dark Elegance"

### Design Philosophy
> Andersen Lab's clean dark hero + Cosmonet AI's existing dark navy brand. Premium, corporate, authoritative.

### Color System
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0A1628` | Hero, Partnership, Contact, Footer |
| `--bg-secondary` | `#0F1E36` | Alternate dark sections |
| `--bg-light` | `#F5F7FA` | Stats, Services, Industries (light sections) |
| `--bg-white` | `#FFFFFF` | About, Why Choose, Careers |
| `--text-primary` | `#FFFFFF` | Headings on dark |
| `--text-dark` | `#0A1628` | Headings on light |
| `--text-body` | `#94A3B8` | Body text on dark |
| `--text-body-dark` | `#475569` | Body text on light |
| `--accent-teal` | `#1A9B9E` | Primary CTA, links, icons |
| `--accent-orange` | `#E8622B` | Secondary CTA, highlights |
| `--nav-bg` | `#0A1628` | Dark sticky navbar |
| `--card-dark` | `#111D32` | Cards on dark backgrounds |
| `--card-light` | `#FFFFFF` | Cards on light backgrounds |

### Section Background Flow
```
Hero ──────────────── DARK NAVY
H1 Intro ──────────── WHITE
H2 Stats ──────────── LIGHT GRAY (#F5F7FA)
H3 Expertise ──────── DARK NAVY
H4 Services ────────── WHITE
H5 Industries ──────── LIGHT GRAY
H6 Why Choose ──────── WHITE
H7 Partnership ────── DARK NAVY
H8 Blog ────────────── LIGHT GRAY
H9 Careers ─────────── WHITE
H10 Contact ────────── DARK NAVY
Footer ──────────────── DARKEST NAVY (#060D18)
```

### V5 Key Visual Features
- Dark hero with large bold headline, logo orbits animation (matching existing Cosmonet design)
- Andersen-style mega-menu nav with white text on dark background
- Animated count-up stats on light gray
- Service cards: white cards with teal icons on white bg
- Industries: horizontal scrollable pills or icon cards
- Contact: dark form with teal submit button
- Footer: 4-column dark layout matching existing Cosmonet footer

---

## 5. Version V6 — "Light Corporate"

### Design Philosophy
> Clean, white-dominant, editorial. Trust-building corporate aesthetic. Sections alternate between pure white and very light gray.

### Color System
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#FFFFFF` | Most sections |
| `--bg-secondary` | `#F5F7FA` | Alternating light gray |
| `--bg-accent` | `#0A1628` | Hero only (dark contrast intro) |
| `--bg-cta-band` | `#1A9B9E` | Full-width CTA strips |
| `--text-primary` | `#0F172A` | All headings on white |
| `--text-body` | `#475569` | Body text |
| `--accent-teal` | `#0D8F92` | Links, icons, buttons (slightly deeper) |
| `--accent-orange` | `#E8622B` | Secondary CTAs, badge pills |
| `--nav-bg` | `#FFFFFF` | White sticky navbar |
| `--nav-text` | `#0F172A` | Dark nav text |
| `--nav-border` | `#E2E8F0` | Subtle bottom border |
| `--card-bg` | `#FFFFFF` | All cards |
| `--card-shadow` | `0 2px 12px rgba(0,0,0,0.06)` | Subtle card shadow |

### Section Background Flow
```
Hero ──────────────── DARK NAVY (only dark section)
H1 Intro ──────────── WHITE
H2 Stats ──────────── TEAL GRADIENT BAND (white text)
H3 Expertise ──────── WHITE
H4 Services ────────── LIGHT GRAY
H5 Industries ──────── WHITE
H6 Why Choose ──────── LIGHT GRAY
H7 Partnership ────── WHITE
H8 Blog ────────────── LIGHT GRAY
H9 Careers ─────────── WHITE
H10 Contact ────────── WHITE (clean form)
Footer ──────────────── DARK NAVY
```

### V6 Key Visual Features
- White navbar with dark text, light bottom border (corporate feel)
- Only hero stays dark navy for contrast; everything else is light
- Stats on a full-width teal gradient band (stunning contrast)
- Service cards on light gray with very subtle drop shadows
- Clean contact form on white with thin gray borders
- Footer is the only other dark section (bookend effect)
- Micro-shadows and hover lifts instead of glassmorphism

---

## 6. Version V7 — "Vivid Gradient"

### Design Philosophy
> Inspired by the South End Capital purple/green design. Bold gradients, colorful accent blocks, vibrant CTAs. Modern, playful, startup-energy.

### Color System
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#FFFFFF` | Main white sections |
| `--bg-gradient-hero` | `linear-gradient(135deg, #1A0B3E 0%, #2D1B69 50%, #0A1628 100%)` | Hero background |
| `--bg-gradient-cta` | `linear-gradient(135deg, #1A9B9E, #2D1B69)` | CTA bands |
| `--bg-light` | `#F8F6FF` | Light lavender tint sections |
| `--text-primary` | `#0F172A` | Headings on white |
| `--text-hero` | `#FFFFFF` | Hero text |
| `--accent-purple` | `#6C3AED` | Primary accent (buttons, icons) |
| `--accent-teal` | `#1A9B9E` | Secondary accent |
| `--accent-orange` | `#E8622B` | Warm CTAs |
| `--accent-green` | `#10B981` | Success/check icons |
| `--gradient-text` | `linear-gradient(135deg, #1A9B9E, #6C3AED)` | Gradient headings |
| `--nav-bg` | `#1A0B3E` | Dark purple navbar |
| `--card-bg` | `#FFFFFF` | White cards |
| `--card-accent-border` | `2px solid #6C3AED` | Hover border accent |

### Section Background Flow
```
Hero ──────────────── PURPLE GRADIENT (bold, vibrant)
H1 Intro ──────────── WHITE
H2 Stats ──────────── DARK PURPLE BAND (gradient numbers)
H3 Expertise ──────── LIGHT LAVENDER (#F8F6FF)
H4 Services ────────── WHITE
H5 Industries ──────── TEAL-TO-PURPLE GRADIENT BAND
H6 Why Choose ──────── WHITE
H7 Partnership ────── LIGHT LAVENDER
H8 Blog ────────────── WHITE
H9 Careers ─────────── LIGHT LAVENDER
H10 Contact ────────── PURPLE GRADIENT (dark)
Footer ──────────────── DEEP PURPLE-NAVY (#0F0525)
```

### V7 Key Visual Features
- Hero: bold purple gradient with animated confetti/particles, large white text, green checkmarks
- Gradient text headings (teal → purple) on white sections
- Stats on dark purple band with large glowing gradient numbers
- Service cards with purple left-border accent on hover
- Industries on a stunning teal-to-purple gradient strip  
- Contact form on purple gradient background
- Playful illustrated elements, rounded pill buttons
- Footer: deep purple-navy, colorful social icons

---

## 7. Component Architecture

### Shared UI Components (used by all versions)
| Component | Purpose |
|---|---|
| `<Navbar />` | Sticky nav with mega-menu, mobile hamburger |
| `<MegaMenu />` | Full-width dropdown (Services, Tech Stack) |
| `<Button />` | Primary/secondary/outlined variants |
| `<SectionLabel />` | Small uppercase label above headings |
| `<SectionHeading />` | H2/H3 headings with optional accent word |
| `<StatCounter />` | Animated count-up number + label |
| `<ServiceCard />` | Icon + title + description + link |
| `<IndustryCard />` | Icon/image + industry name |
| `<BlogCard />` | Thumbnail + tag + title + excerpt + date |
| `<JobCard />` | Title + location + apply button |
| `<ContactForm />` | Name, email, subject, message + submit |
| `<Footer />` | 4-column links + social + copyright |
| `<ScrollToTop />` | Floating scroll-to-top button |

### Composite Sections (one per section)
Each section: `SectionName/index.jsx` + `SectionName/SectionName.module.css`

---

## 8. SEO Strategy

### index.html `<head>` Meta
```html
<title>Cosmonet AI — Intelligent AI Solutions | AI Development Company</title>
<meta name="description" content="Cosmonet AI delivers Artificial Intelligence Solutions, AI Product Development, Machine Learning Solutions, Custom Software Development, and Enterprise AI Solutions for next-generation digital enterprises." />
<meta name="keywords" content="Artificial Intelligence Solutions, AI Development Company, AI Product Development, Machine Learning Solutions, Custom Software Development, AI Software Development Services, Generative AI Development, Enterprise AI Solutions" />
```

### Heading Hierarchy (Keyword Placement)
| Element | Content | Target Keyword |
|---|---|---|
| `<title>` | Cosmonet AI — Intelligent AI Solutions... | AI Development Company |
| `<h1>` | Engineering the Future with AI | Artificial Intelligence Solutions |
| `<h2>` id="about" | Intelligent Technology Solutions... | AI Product Development |
| `<h2>` id="stats" | Successfully working with... | Enterprise AI Solutions |
| `<h2>` id="expertise" | What's our Expertise | Machine Learning Solutions |
| `<h2>` id="services" | Our Services | Custom Software Development |
| `<h2>` id="industries" | Industries We Serve | Intelligent Automation Solutions |
| `<h2>` id="why-us" | Why Choose Cosmonet AI | AI Software Development Services |
| `<h2>` id="partnership" | Partnering with Cosmonet AI | Generative AI Development |
| `<h2>` id="blog" | Insights | AI & Data Engineering Services |
| `<h2>` id="careers" | Build the Future | — |
| `<h2>` id="contact" | Let's Build Something Intelligent | — |

### Body Copy Keyword Density
Every section body paragraph naturally weaves in 2–3 secondary keywords. For example the Services paragraph includes: "AI Product Development", "Machine Learning Solutions", "Custom Software Development", "Generative AI Development", and "Enterprise AI Solutions".

### Technical SEO
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- JSON-LD structured data (Organization schema)
- Open Graph + Twitter Card meta tags
- All images use descriptive `alt` attributes with keywords
- Internal anchor links for all sections (`#services`, `#about`, etc.)
- Fast Vite bundle + lazy-loaded images below the fold

---

## 9. Animation Plan

| Element | Animation | Library |
|---|---|---|
| Stats numbers | Count-up on scroll into view | Custom hook |
| Section headings | Fade-in-up on scroll | AOS |
| Service cards | Staggered fade-in-up | AOS |
| Industry cards | Slide-in-left | AOS |
| Blog carousel | Horizontal swipe/scroll | CSS scroll-snap |
| Hero background | Subtle parallax | CSS / GSAP |
| Navbar | Shrink + shadow on scroll | CSS transition |
| CTA buttons | Scale + shadow on hover | CSS transition |
| Mega-menu | Fade-down with height animation | CSS transition |
| Cards | Lift + shadow deepen on hover | CSS transition |

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|---|---|---|
| XL Desktop | ≥1440px | Max-width container, full mega-menu |
| Desktop | 1024–1439px | Standard layout |
| Tablet | 768–1023px | 2-column grids, condensed nav |
| Mobile | <768px | Single column, hamburger menu, stacked cards |

---

## 11. Verification Plan

### Automated / Developer Checks
1. **Build check**: `npm run build` — must complete with zero errors
2. **Dev server**: `npm run dev` — verify all sections render correctly at `http://localhost:5173`
3. **Lighthouse audit**: Run in Chrome DevTools on built preview → target 90+ on Performance, SEO, Accessibility
4. **Responsive**: Use Chrome DevTools device toolbar to test at 375px (mobile), 768px (tablet), 1440px (desktop)

### Visual / Browser Verification
1. Open the dev server in Chrome
2. Scroll through all 13 sections — verify correct content, spacing, and background colors
3. Test mega-menu: hover over "Services" and "Tech Stack" nav items → dropdown should appear smoothly
4. Test mobile: resize to 375px → verify hamburger menu, stacked layout, no overflow
5. Test all CTA buttons link to correct anchor sections
6. Verify stats counter animates on scroll into view
7. Verify blog section has horizontal carousel

### Manual Testing (User)
1. Place `logo.png` in `public/` folder
2. Run `npm run dev` and review the full landing page
3. Confirm branding, colors, and content match the design specifications
4. Deploy to Vercel for production URL testing

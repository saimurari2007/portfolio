# PRD — Murari K Portfolio Website

**Owner:** Sai Murari Kotrike ("Murari K")
**Doc status:** v1.0 — ready for build
**Companion files:** `context.md` (background/content reference), `versions.md` (release phasing)

---

## 1. Summary

A single-page, highly interactive portfolio website with a **dual-persona mode switch**: one identity as an **AI/ML Engineer & Developer**, the other as a **Freelance Graphic Designer**. Switching modes triggers a full visual "face change" — theme, layout, content, and motion language all shift — rather than just scrolling to a different section.

The site must feel **futuristic**, motion-rich, and dual-toned (distinct color language per mode), while staying performant and legible.

---

## 2. Goals

- Present Murari as a hybrid builder — not "developer who also designs," but someone who operates fluently in both worlds.
- Make the mode-switch itself the memorable interaction of the site — this is the single most important UX moment.
- Showcase 4 real web projects (AICA, Patient Monitoring Dashboard, GOTH, Sri Sai Sathya Ayurvedhalaya), 5 hackathons, and a live Google Gemini Student Ambassador role on the Engineer side.
- Showcase graphic design services (poster, apparel, logo/brand identity, product redesign) and 100+ sorted portfolio images on the Designer side.
- Be usable as a live link in resumes, LinkedIn, hackathon applications, and freelance client outreach.

## 3. Non-goals

- Not a CMS or admin panel — content is static/hardcoded at this stage (see `versions.md` for future CMS phase).
- Not e-commerce — no checkout flow for the GOTH project's shop-style UI; it's a design showcase, not a live store.
- Not a blog — no article/writing system in v1.

---

## 4. Users & use cases

| User | Use case |
|---|---|
| Hackathon judges / recruiters | Skim Engineer mode fast — projects, GSA role, hackathon results |
| Freelance design clients | Land in or switch to Designer mode — browse services, see portfolio depth, get contact info |
| Peers / hackathon teammates | Explore both sides, understand the "why" behind combining AI + design |
| Murari himself | Single link to send anywhere instead of juggling GitHub + old bit.ly portfolio + LinkedIn |

---

## 5. Information architecture

```
/ (landing — mode selector, defaults to Engineer mode)
 ├── Engineer mode
 │    ├── Hero (name, tagline, GSA credential)
 │    ├── Projects (ScrollStack: AICA, Patient Dashboard, GOTH, Ayurvedhalaya)
 │    ├── Hackathons (timeline/stack: Xcelerate, St. Joseph, ULTRON, amBITion, Nova Spark)
 │    ├── AI & Community involvement (GSA activities, meetups, conferences)
 │    ├── Skills
 │    └── Contact
 │
 └── Designer mode
      ├── Hero (name, tagline, "Freelance Graphic Designer")
      ├── Services (Poster, Apparel Mockups, Logo & Brand Identity, Product Redesigns)
      ├── Gallery (InfiniteMenu — 100+ sorted images from portfolio folders)
      ├── Featured case study ("Behind the Banner" — Sponsorsprism campaign, if assets available)
      ├── Skills & expertise
      └── Contact
```

Both modes share: nav (BubbleMenu), footer, contact method. Everything else re-themes.

---

## 6. Core interaction: the mode switch

- A persistent toggle (housed in or near the BubbleMenu nav) swaps the entire site state.
- On switch: a glitch/scan-line transition (~400–600ms) plays, then the new mode's theme, layout, and content resolve.
- Mode preference should persist for the session (in-memory state; no localStorage per environment constraints if built as a Claude-hosted artifact — real localStorage is fine if built via Claude Code as a standalone deployed site).
- URL state (optional, nice-to-have): `?mode=engineer` / `?mode=designer` so links can deep-link into a specific mode.

---

## 7. Required components (source: React Bits)

All three have already been sourced and pasted into project context — use as provided, do not re-fetch.

| Component | Dependency | Used for |
|---|---|---|
| **BubbleMenu** | `gsap` | Primary site navigation. Central bubble = logo/mode toggle. Pill items re-theme per mode via `hoverStyles`. |
| **ScrollStack** | `lenis` | Engineer-mode project case studies — scroll-driven stacked cards for AICA, Patient Dashboard, GOTH, Ayurvedhalaya. |
| **InfiniteMenu** | `gl-matrix` (WebGL2) | Designer-mode gallery — draggable 3D sphere of portfolio images sourced from the sorted image folders. |

**Integration notes:**
- InfiniteMenu requires WebGL2 — confirm fallback behavior (static grid) for unsupported browsers/devices.
- ScrollStack's `useWindowScroll` prop should likely be `true` for a full-page scroll experience rather than a contained scroll box.
- BubbleMenu's `items` array should be re-instantiated (not just re-styled) on mode switch so labels/links match the active mode's sections.

---

## 8. Design requirements

- **Dual-tone theme:**
  - Engineer mode — cool tone (electric blue/cyan accent on near-black base), monospace accents, grid/circuit motifs.
  - Designer mode — warm tone (magenta/violet accent on near-black base), editorial type, image-forward layout.
- **Futuristic motion language:** cursor-reactive glow, scroll-triggered reveals (blur-to-focus), magnetic buttons on CTAs, glitch/RGB-split transition on mode switch.
- **Typography:** one display face for headers per mode (can differ between modes for character), one clean sans for body across both.
- **Responsive:** must work on mobile — WebGL-heavy InfiniteMenu needs a tested fallback or simplified mobile interaction (drag still expected to work per component's pointer event handling).
- **Performance:** lazy-load images for the InfiniteMenu atlas; don't block first paint on 100+ image loads.

---

## 9. Content requirements

All source content lives in `context.md`. Do not fabricate project details, metrics, or dates — everything must trace back to that file or explicit input from Murari.

Content still needed before full launch (flagged in `context.md` as open items):
- Final sorted image set from `E:\Portfolio` (with subfolder structure preserved as category signal)
- Assets for the "Behind the Banner" / Sponsorsprism case study, if it's going to be featured
- Contact method to surface on-site (email already known: saimurarikotrike.business@gmail.com — confirm if this is the one to publish, or if a contact form is preferred)
- Confirm whether full name (Sai Murari Kotrike) or short form (Murari K) is the primary on-site brand name

---

## 10. Technical requirements

- **Stack:** React (component library already assumes JSX/React Bits conventions)
- **Dependencies to install:** `gsap`, `lenis`, `gl-matrix`
- **Build target:** Recommend Claude Code / standalone deployable project (Vite or Next.js) rather than a single-file chat artifact, given image volume, multi-page-feeling architecture, and WebGL requirement.
- **Image handling:** source directly from `E:\Portfolio` subfolders during local build; optimize (compress/resize) before bundling — 100+ raw images should not ship unoptimized.
- **Hosting:** not yet decided — flag as open decision (Vercel/Netlify are typical fits for a Vite/Next React site).

---

## 11. Success criteria

- Mode switch works smoothly on both desktop and mobile with no layout break.
- All 4 engineer projects and all 5 hackathons are represented with accurate details from `context.md`.
- Designer mode gallery loads and is navigable with 50+ images without perceptible lag.
- Site is deployable to a public URL Murari can share immediately in applications/outreach.

---

## 12. Open questions

1. Is the "Behind the Banner" campaign going to be a launch-day case study, or added later once assets are gathered?
2. Primary contact method on-site — direct email display, or a contact form?
3. Full name vs. short name as the primary displayed brand?
4. Any preference on hosting platform, or should that be decided at build time?

See `versions.md` for how launch is phased against these open items.

# versions.md — Release phasing

Tracks how the site is planned to roll out, and what's changed at each stage. Update this file after each meaningful build session so context isn't lost between sessions.

---

## v0.1 — Planning (current)
**Status:** Done
**Date:** July 2026

- Defined dual-mode concept (Engineer / Designer persona switch)
- Selected and sourced 3 React Bits components: BubbleMenu (nav), ScrollStack (project case studies), InfiniteMenu (design gallery)
- Collected real content: bio, 4 engineer projects, 5 hackathons, Google GSA role, designer services/skills, one named case study (Behind the Banner)
- Produced `PRD.md` and `context.md` as build references
- **Not yet done:** image asset collection from `E:\Portfolio`, final content decisions (contact method, brand name), hosting decision

---

## v1.0 — MVP launch (target: next build phase)
**Goal:** A live, shareable link with both modes fully functional, using real content and a representative (not necessarily complete) image set.

Scope:
- Mode toggle with glitch transition, working on desktop + mobile
- Engineer mode: hero, ScrollStack project case studies (all 4 projects), hackathon section (all 5), GSA/community section, skills, contact
- Designer mode: hero, services, InfiniteMenu gallery (partial image set acceptable if full set isn't ready), skills, contact
- BubbleMenu nav wired to both modes' sections
- Responsive layout, WebGL2 fallback for InfiniteMenu on unsupported devices
- Deployed to a public URL

Exit criteria: Murari can send this link in a job/freelance/hackathon application without embarrassment gaps.

---

## v1.1 — Full content pass
**Goal:** Replace placeholder/partial content with everything finalized.

Scope:
- Full 100+ image set from `E:\Portfolio`, properly categorized by subfolder
- "Behind the Banner" case study fully built out (if assets confirmed available)
- amBITion 2025 project detail filled in
- Final contact method implemented (form or direct email, per decision)
- Performance pass — image optimization/lazy loading tuned for full image volume

---

## v1.2 — Polish
**Goal:** Tighten the experience once real content is in and initial feedback (from Murari, peers, or early visitors) has come in.

Scope candidates:
- Refine glitch transition timing/feel based on real-device testing
- Add cursor-reactive glow / magnetic button interactions if not fully done in v1.0
- SEO basics (meta tags, social preview image, page title per mode)
- Analytics (if desired) to see which mode gets more traffic

---

## Future / backlog (not scheduled)

- CMS or structured data layer so projects/hackathons/gallery images can be updated without code changes
- Blog/writing section
- Deep-linkable mode state via URL query param
- Additional case studies as new freelance/client work comes in
- Localization (if ever needed) — not currently in scope

---

## Change log

| Date | Change |
|---|---|
| July 2026 | Initial PRD, context, and versions docs created from planning conversation |
| July 2026 | v1.0 MVP build — all sections, components, data files, ~30 portfolio images, theme system, glitch transition |
| July 2026 | Design polish pass — scroll-triggered reveal animations (useReveal hook), Space Grotesk display font, cursor-reactive glow, magnetic buttons, engineer hero grid motif, InfiniteMenu overlay restyled per theme, section title font integration, responsive refinements |
| July 2026 | Added FaultyTerminal (WebGL glitch/scanline shader, dep: ogl) as persistent ambient background with mode-reactive tint and GSAP-animated glitch/chromatic-aberration/flicker ramp on mode switch |

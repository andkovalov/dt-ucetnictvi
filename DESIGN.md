---
name: DT účetnictví Praha
description: Conversion landing for a Prague accounting firm — cool porcelain + deep forest green
colors:
  porcelain: "#EEF0EE"
  porcelain-mist: "#F5F7F5"
  white: "#FFFFFF"
  pine-ink: "#1B2A22"
  forest-green: "#235943"
  deep-bottle: "#16382A"
  green-rich: "#1F4A37"
  green-darkest: "#0F2A20"
  sage: "#DDE7DD"
  sage-soft: "#EBF1E8"
  hairline: "#1B2A221F"
typography:
  display:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  sm: "14px"
  md: "20px"
  lg: "28px"
  pill: "999px"
spacing:
  section: "clamp(72px, 9vw, 120px)"
  card: "28px 24px"
  btn: "16px 30px"
components:
  button-primary:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.deep-bottle}"
  button-primary-on-dark:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.deep-bottle}"
    rounded: "{rounded.pill}"
    padding: "16px 30px"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.pine-ink}"
    rounded: "{rounded.pill}"
    padding: "16px 30px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.pine-ink}"
    rounded: "{rounded.md}"
    padding: "28px 24px"
  card-featured:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.pine-ink}"
    rounded: "{rounded.md}"
    padding: "28px 24px"
  card-pricing-featured:
    backgroundColor: "{colors.deep-bottle}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "32px 28px"
  cta-banner:
    backgroundColor: "{colors.deep-bottle}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
  eyebrow-chip:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.deep-bottle}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
---

# Design System: DT účetnictví Praha

## 1. Overview

**Creative North Star: "The Quiet Ledger"**

This is a one-page conversion site for a Prague accounting firm, and it must read the way a good set of books reads: ordered, calm, and unmistakably trustworthy. The personality is *serious without being cold* — a small practice with a personal touch, not a faceless call-centre. Density is restrained: generous whitespace, one idea per fold, large confident headings, and copy that gets out of the way. Every CTA points to the same destination (online booking), so the design's job is to build quiet confidence and remove friction, never to dazzle.

It explicitly rejects the warm-cream "AI editorial" default, bright SaaS accents, and template scaffolding. There is no warm beige body, no bright blue or orange, no gradient text, no eyebrow kicker stamped over every section, and no wall of identical icon-cards. Warmth comes from the green and the typography, not from a tinted paper background.

**Key Characteristics:**
- Cool porcelain canvas, deep forest-green identity — finance, money, trust.
- One typeface (Manrope), hierarchy carried by weight and size, not by pairing.
- Flat at rest; soft green-tinted lift on interactive surfaces only.
- Hierarchy by emphasis (one featured item), never by endless repetition.
- Quiet, crisp motion: instant press feedback, fast custom ease-out, no bounce.

## 2. Colors

A cool, almost-clinical porcelain base lets a committed forest green carry the entire brand; the only warmth is the green's own depth.

### Primary
- **Forest Ledger Green** (`#235943`): the brand workhorse. Primary buttons, the marquee band, animated stat numbers, in-heading accent words, icon glyphs, list checkmarks, and focus rings. This is the one voice of the palette.
- **Deep Bottle** (`#16382A`): the dark register. Full-bleed dark blocks — the CTA banner, the featured pricing tier, the footer — plus hover state of primary buttons and the eyebrow/icon foreground.

### Secondary
- **Green Rich** (`#1F4A37`) → **Green Darkest** (`#0F2A20`): the two extra stops of the CTA banner's diagonal gradient, lifted by a **Mint Sheen** glow (`rgba(110,184,148,.30)`) in the top-right corner.

### Neutral
- **Cool Porcelain** (`#EEF0EE`): the body canvas. A true cool off-white, never warm cream.
- **Porcelain Mist** (`#F5F7F5`): alternating section surface (services, about, contact) — one step lighter than the body for quiet layering.
- **White** (`#FFFFFF`): cards, the invoice mock, floating chips — they read as lifted because they're brighter than the porcelain around them.
- **Pine Ink** (`#1B2A22`): all body text and headings — a near-black tinted toward the brand green, never pure black. Used at full strength for headings, `.76` alpha for body, `.68` alpha for muted captions (≥4.5:1 on every surface).
- **Sage** (`#DDE7DD`) / **Sage Soft** (`#EBF1E8`): the soft green tints for icon chips, the hero eyebrow chip, and the featured service card.
- **Hairline** (`rgba(27,42,34,.12)`): borders and dividers — the brand green at low alpha, never a neutral gray.

### Named Rules
**The Porcelain-and-Pine Rule.** The body is cool porcelain and the ink is pine-tinted near-black. Never a warm cream/sand/beige body, and never pure `#000` text. Warmth lives in the green and the words, not the background.

**The No-Bright-Accent Rule.** Accents stay deep and muted (forest, bottle, sage). Bright blue and bright orange are forbidden — they read as either generic-SaaS or un-serious for an accounting brand.

**The One-Voice Rule.** Forest Ledger Green is the single accent. Don't introduce a second hue family; emphasis comes from the dark-green register and weight, not from new colors.

## 3. Typography

**Display / Body / Label Font:** Manrope (self-hosted `.woff2`, with `system-ui, -apple-system, sans-serif` fallback).

**Character:** One geometric-humanist sans doing all the work. It's contemporary and legible without costume; authority comes from heavy display weights (800) set tight against airy body text (500). No serif, no mono, no second family — the restraint is the point for a finance brand.

### Hierarchy
- **Display / h1** (800, `clamp(2.5rem, 5vw, 4rem)`, lh 1.08, ls -0.025em): hero headline only, revealed line-by-line on load.
- **Headline / h2** (800, `clamp(1.9rem, 3.6vw, 2.9rem)`, lh 1.08): section titles. They stand alone — no kicker above them.
- **Title / h3** (800, `1.25rem`, lh 1.3): card and item headings.
- **Body** (500, `17px`, lh 1.6): paragraphs; muted variants at `.76`/`.68` ink alpha. Keep measure ≤ ~70ch.
- **Label / eyebrow** (700, `0.82rem`, uppercase, ls 0.12em): the deep-green-on-sage chip — used **once**, in the hero.

### Named Rules
**The One-Family Rule.** Manrope only. Contrast is created by weight (800 vs 500) and size, never by pairing a second typeface.

**The Hero-Only Eyebrow Rule.** The uppercase tracked label appears exactly once — the hero's category chip. Section headings carry themselves; an eyebrow over every section is forbidden AI scaffolding.

## 4. Elevation

Flat by default. Surfaces sit on tonal layering (porcelain → mist → white) and 1px hairline borders, not on shadows. Shadows are reserved for two jobs: a soft resting lift on key cards, and a deeper pop under the primary CTA. Both are tinted toward the brand green, never neutral black.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 2px 6px rgba(22,56,42,.06), 0 18px 44px -18px rgba(22,56,42,.22)`): contact CTA card, floating hero chips, and the hover state of service/price cards.
- **CTA pop** (`box-shadow: 0 24px 60px -20px rgba(11,33,24,.34)`): primary buttons and the booking card — the firmest shadow on the page, signalling "this is the action".

### Named Rules
**The Soft-Lift Rule.** Cards are flat at rest with a hairline border. The lift (`translateY(-6px)` + card-lift shadow) appears only on hover, and only on pointer devices (`@media (hover: hover) and (pointer: fine)`) so it never sticks after a tap.

## 5. Components

### Buttons
- **Shape:** full pill (`999px`).
- **Primary:** Forest Green bg, white text, CTA-pop shadow, padding `16px 30px`. Hover → Deep Bottle + `translateY(-2px)`. **On dark blocks** (CTA banner) it inverts: porcelain bg, deep-bottle text, for contrast.
- **Secondary:** white bg, pine-ink text, 1.5px hairline border; hover darkens the border.
- **Press:** every button scales to `0.97` on `:active` — instant, tactile feedback. Transitions use `--ease-out: cubic-bezier(.23,1,.32,1)` at ~180ms. No bounce.

### Cards / Containers
- **Corner Style:** `20px` (md) for content cards, `28px` (lg) for pricing and the CTA banner.
- **Background:** white on porcelain; **sage** for the one featured service; **deep bottle** for the featured pricing tier and CTA banner.
- **Shadow Strategy:** flat at rest, card-lift on hover (see Elevation, Soft-Lift Rule).
- **Border:** 1px hairline; transparent on filled (sage/dark) cards.
- **Internal Padding:** `28px 24px` content, `32px 28px` pricing.

### Eyebrow chip
- **Style:** sage bg, deep-bottle uppercase tracked label, pill shape. Hero only.

### Navigation
- **Style:** fixed transparent header that gains a blurred porcelain background + hairline on scroll. Nav links are pine-ink at `.76`, full pine-ink on hover with a faint tinted pill. Collapses to a full-screen mobile menu behind a 44×44 burger; a sticky bottom CTA bar replaces it on phones.

### Stat strip (signature)
- Four facts (price / guarantee / time / 100% online) as a borderless row: large Forest-Green numbers (count up on scroll) over muted labels, separated by hairline vertical rules on desktop. Not boxed cards.

### Cookie consent (signature)
- Bottom dialog with granular toggles (Necessary always-on, Analytics, Marketing) as green pill switches; equal-weight Reject / Save / Accept. Slides up with the iOS-style drawer curve (`cubic-bezier(.32,.72,0,1)`), exits faster than it enters.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body **Cool Porcelain** (`#EEF0EE`) and ink **Pine** (`#1B2A22`); carry warmth through green + type.
- **Do** let **Forest Green** (`#235943`) be the single accent; go **Deep Bottle** (`#16382A`) for dark blocks.
- **Do** give every pressable element `:active { transform: scale(.97) }` and gate hover lifts behind `@media (hover: hover) and (pointer: fine)`.
- **Do** create emphasis with one featured item (sage service card, dark pricing tier), not by repeating identical cards.
- **Do** keep body/muted text ≥ 4.5:1; muted captions use ink at `.68` alpha, never lighter.
- **Do** keep CTA labels to ≤ 2 words and point every CTA at the Reservio booking.

### Don't:
- **Don't** use a warm cream/sand/beige body, or pure black text. (The Porcelain-and-Pine Rule.)
- **Don't** introduce bright blue or bright orange, or any second accent hue. (The No-Bright-Accent Rule.)
- **Don't** stamp an uppercase eyebrow kicker above every section — hero only. (The Hero-Only Eyebrow Rule.)
- **Don't** build walls of identical icon-cards; vary by hierarchy.
- **Don't** use gradient text, decorative glassmorphism, side-stripe borders, or bounce/elastic easing.
- **Don't** pair a second typeface; Manrope weight contrast only.
- **Don't** mention the Ukrainian language in the Czech hero value-prop; language belongs in FAQ/About.

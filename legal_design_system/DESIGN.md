---
name: Tantara Legal Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#454555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#767587'
  outline-variant: '#c6c5d8'
  surface-tint: '#4448e0'
  primary: '#1e1dc2'
  on-primary: '#ffffff'
  primary-container: '#3b3fd8'
  on-primary-container: '#c7c8ff'
  inverse-primary: '#c0c1ff'
  secondary: '#545c83'
  on-secondary: '#ffffff'
  secondary-container: '#cad2ff'
  on-secondary-container: '#515980'
  tertiary: '#00455b'
  on-tertiary: '#ffffff'
  tertiary-container: '#005e7b'
  on-tertiary-container: '#81d7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#03006d'
  on-primary-fixed-variant: '#2829c8'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#bcc4f1'
  on-secondary-fixed: '#10193c'
  on-secondary-fixed-variant: '#3d456a'
  tertiary-fixed: '#bfe9ff'
  tertiary-fixed-dim: '#6ed2fe'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#004d65'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  brand-display-xl:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: 0.02em
  brand-quote-lg:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Arimo
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Arimo
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Chivo
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-default:
    fontFamily: Arimo
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  body-medium:
    fontFamily: Arimo
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
  body-strong:
    fontFamily: Arimo
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 20px
  body-secondary:
    fontFamily: Arimo
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Chivo
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  badge-sm:
    fontFamily: Chivo
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  table-cell:
    fontFamily: Arimo
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 1.75rem
---

## Brand & Style

This design system embodies high-trust, elite legal precision tailored for arbitration practitioners, international counsel, and arbitration tribunals. The visual demeanor balances authoritative gravitas with crisp, modern efficiency. It rejects decorative clutter in favor of structured data clarity, deliberate contrast, and calculated typographic cadence.

### Brand Personality & Tone
- **Authoritative & Legally Sound:** Grounded, unshakeable, and compliant. The interface feels as reliable and binding as an international arbitral award.
- **Intelligent & Efficient:** AI interventions are framed not as speculative gimmicks, but as precise analytical assistants that reduce clerical friction in filing bundles, statement drafting, and precedent retrieval.
- **Calm Cognitive Ergonomics:** The dual-canvas structure—a deep obsidian-navy sidebar pairing with an airy, slate-tinted canvas—channels focus toward dense case materials without inducing eye strain.

### Design Movement
**Modern Institutional Corporate & Precision SaaS:** A disciplined blend of structural grid rigor, deep contrast containers, 12px rounded interactive surfaces, and delicate 1px boundary lines that delineate high-density legal facts, dates, citations, and procedural actions.

## Colors

The palette is engineered to separate persistent global hierarchy from ephemeral workspace content.

- **Primary Action (`#3B3FD8`):** Vivid royal indigo used for key call-to-actions, active tab segments, primary prompt submit triggers, and selected document pills.
- **Secondary Shell (`#0B1437`):** Deep commanding navy reserved for the global navigation rail, header action accents, and deep-toned AI prompt containers (`#111C44` to `#1B255A`).
- **Tertiary Accent (`#1191ba`):** Crisp cyan-teal used for specialized operational callouts, active indicators, and highlighting specific legal data nodes.
- **Canvas & Surface Architecture:**
  - Workspace Canvas: `#F4F6FB` (cool slate-grey, providing optimal contrast against white containers).
  - Surface Containers: Pure `#FFFFFF` for working cards, document tables, and data lists.
  - Borders & Dividers: `#E2E8F0` for crisp, non-distracting visual boundaries.
- **Status & Legal Lifecycle Accents:**
  - Active / Proceeding: `#10B981` with `#ECFDF5` background tint and `#059669` text.
  - Pending / Awaiting Tribunal: `#F59E0B` with `#FFFBEB` background tint and `#D97706` text.
  - Closed / Rejected / Alert: `#EF4444` with `#FEF2F2` background tint and `#DC2626` text.
  - Informational / In-Review: `#3B82F6` with `#EFF6FF` background tint.

## Typography

Typography governs speed of comprehension and institutional gravitas:

1. **Serif Discipline (`Playfair Display`):** Reserved exclusively for brand anchors—such as the header wordmark, strategic doctrine callouts ("Clear Strategy. Stronger Arguments. Better Outcomes."), and ceremonial legal certificates. It brings timeless tradition into a modern software ecosystem.
2. **Sans-Serif Execution (`Arimo` & `Chivo`):** Deployed for all operational layers: dense claim matrices, case titles, procedural tags, forum disclosures (SIAC, ICC, LCIA), hearing schedules, and AI prompt feedback. `Arimo` drives readable body text while `Chivo` handles structured labels and titles.
3. **Tabular Figures:** All numeric fields (dates, case IDs, page indexes, document progress percentages) must render with tabular figures (`tnum`) to maintain vertical alignment in tables.

## Layout & Spacing

The workspace uses a dense, ergonomic layout model designed for expansive multi-pane legal workflows:

- **Sidebar Anchor:** Fixed width of 260px (`#0B1437`) housing primary module destinations, case repository links, and organizational status.
- **Top Utility Header:** Fixed 64px height with integrated wide search bar, tribunal query shortcut, notifications, and advocate profile badge.
- **Main Workspace Canvas:** Fluid multi-column dashboard spanning a 12-column dynamic CSS grid with 16px (`1rem`) gutters and 24px (`1.5rem`) outer margins.
- **Responsive Adaptations:**
  - *Desktop (>1280px):* Full split-view workspaces (e.g., source document preview on the left alongside extracted arbitration metadata and strategy advisor panels on the right).
  - *Tablet (768px - 1279px):* Grid reflows to 2-column stacked clusters; sidebar collapses to an icon-only 72px rail.
  - *Mobile (<768px):* Single column scroll; tables convert to stacked attribute cards; tab bars scroll horizontally.

## Elevation & Depth

Visual hierarchy is maintained via clean physical stratification rather than heavy shadows:

- **Base Layer (Level 0):** `#F4F6FB` application background canvas.
- **Surface Layer (Level 1):** `#FFFFFF` content cards wrapped in a 1px solid `#E2E8F0` stroke, paired with an ambient shadow: `box-shadow: 0 1px 3px 0 rgba(11, 20, 55, 0.04), 0 1px 2px -1px rgba(11, 20, 55, 0.02)`.
- **Raised Interactive Layer (Level 2):** Active dropdown menus, floating action bars, and hovering table rows: `box-shadow: 0 4px 12px -2px rgba(11, 20, 55, 0.08), 0 2px 6px -2px rgba(11, 20, 55, 0.04)`.
- **Command & AI Focus Layer (Level 3):** Modal overlays, paperbook preview sidebars, and deep navy AI assistant blocks (`#111C44` with a subtle inset radial highlight: `radial-gradient(ellipse at top left, rgba(59, 63, 216, 0.25), transparent 70%)`).
- **Focus Rings:** Accessible 2px ring offset in `#3B3FD8` with a 2px `#FFFFFF` boundary for all keyboard and active form navigations.

## Shapes

The shape system enforces structural precision with friendly operational touchpoints:

- **Surface Cards & Modular Panels:** Exactly `12px` (0.75rem, `rounded-lg`) corner radii to maintain consistent grid rhythm across complex side-by-side modules.
- **Buttons & Pill Segments:** Full capsule pill shapes (`9999px`) or `8px` (`rounded-md`) for standard interactive inputs and table action buttons.
- **Filter Tabs & Status Indicators:** Soft pill contours (`rounded-full`) for case filtering (e.g., "All Cases", "Active", "Pending") and tribunal badges.
- **Form Controls:** `8px` corner radius on inputs, selects, and text areas.

## Components

### Buttons & Interactive Controls
- **Primary Buttons:** High-contrast `#3B3FD8` fill, `#FFFFFF` bold text, 8px radius or pill radius, subtle hover transition to `#2E32B6`.
- **Ghost & Secondary Actions:** White surface with `#E2E8F0` border, dark navy text `#0B1437`, hover states invoking soft `#F8FAFC` backgrounds.
- **AI Action Triggers:** Indigo gradient buttons (`linear-gradient(135deg, #3B3FD8 0%, #6366F1 100%)`) accompanied by sparkling icon indicators.

### Pill Navigation Tabs
- Grouped within an `#EDF2F7` neutral track. Active tab transitions to solid `#0B1437` or `#3B3FD8` with white text and a micro-elevation shadow; inactive items remain neutral `#64748B`.

### Status Badges
- Compact pill tags with 4px vertical, 10px horizontal padding.
- `Active`: `#ECFDF5` background with `#059669` bold text.
- `Pending`: `#FFFBEB` background with `#D97706` bold text.
- `SIAC / ICC / Forum Codes`: Neutral slate `#F1F5F9` background with `#334155` text.

### Legal Data Tables
- Header row styled in `#64748B` uppercase tracking with light divider line (`#E2E8F0`).
- Alternating subtle row hover (`#F8FAFC`). Trailing actions contain the standard three-dot vertical contextual menu.

### Form Fields & Editable Cells
- Input containers feature a 1px `#CBD5E1` border, 8px border-radius, `#0B1437` text value, and a trailing subtle edit pencil icon (`#94A3B8`) indicating inline-editable legal briefs.

### AI Legal Strategy / Prompt Box
- Wrapped in a dark executive shell (`#111C44` to `#0B1437`) featuring an inline single-line query field, a circular or pill action submit button (`#3B3FD8`), and quick-action chips underneath for frequent arbitral tasks (e.g., "Draft statement of claim", "Recent arbitral awards").
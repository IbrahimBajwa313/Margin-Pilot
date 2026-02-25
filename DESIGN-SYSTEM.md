# MarginPilot Design System

**Dark mode only.** No light mode. All tokens and rules are in `app/globals.css` and must be applied consistently.

## CSS custom properties (`:root`)

| Token | Value |
|-------|--------|
| `--mp-bg` | `#0B0F14` |
| `--mp-panel` | `#111826` |
| `--mp-panel-2` | `#0E1624` |
| `--mp-border` | `rgba(255, 255, 255, 0.08)` |
| `--mp-text` | `rgba(255, 255, 255, 0.92)` |
| `--mp-muted` | `rgba(255, 255, 255, 0.52)` |
| `--mp-teal` | `#2FD3C6` |
| `--mp-green` | `#4ADE80` |
| `--mp-purple` | `#A78BFA` |
| `--mp-amber` | `#FBBF24` |
| `--mp-blue` | `#60A5FA` |
| `--mp-red` | `#F87171` |

## Colour semantics (strict)

| Token | Use for | Never use for |
|-------|---------|----------------|
| `--mp-green` | Monthly targets, progress bars, growth indicators | Errors, costs |
| `--mp-purple` | Profit figures, revenue totals | Actions, warnings |
| `--mp-teal` | Primary CTAs, active nav, key highlights, milestones | Costs, warnings |
| `--mp-amber` | Costs, overheads, staff, rent, outgoings | Success, profit |
| `--mp-red` | Delete actions, risk warnings, negative states only | Decorative |
| `--mp-blue` | Secondary data, supporting charts | Primary actions |

Colour must indicate meaning. Do not assign colour arbitrarily.

## Typography

- **Display / headings:** `Syne`, weight 700–800. Use class `font-display` or rely on base `h1–h6` styles.
- **Body / UI:** `DM Sans`, weight 300–500. Default `font-sans`.
- Primary text: `var(--mp-text)`. Secondary/labels: `var(--mp-muted)`.

## Surfaces

- **Page background:** `var(--mp-bg)` only. Page-level glow is applied once on `body` in globals.css.
- **Cards/panels:** `linear-gradient(180deg, var(--mp-panel), var(--mp-panel-2))`, border `1px solid var(--mp-border)`, radius 16px (cards), 12px (inputs/rows), 10px (small buttons).
- **Inputs:** `background: rgba(255,255,255,0.04)` — no bright or white fills.

## Component classes

- **Primary button:** `.mp-btn-primary` (teal tint, no solid fill).
- **Ghost/secondary button:** `.mp-btn-ghost`.
- **Danger button:** `.mp-btn-danger` (delete only).
- **Progress bar track:** `.mp-progress-track`. Fill by meaning: `.mp-progress-fill-targets` (green), `.mp-progress-fill-milestones` (teal), `.mp-progress-fill-costs` (amber).
- **Nav bar:** `.mp-nav` (sticky, blur, border).
- **Status pills:** `.mp-status-pill` with `.mp-status-pill-healthy`, `.mp-status-pill-tight`, or `.mp-status-pill-risk`. Or use `<Badge variant="healthy" />` etc.

## Rules

1. Dark mode only — no light variants.
2. No white or light backgrounds on any surface.
3. Inputs never have bright backgrounds — always `rgba(255,255,255,0.04)`.
4. Colour always reflects semantic meaning per the table above.
5. Glow/shadow use the relevant accent at low opacity (e.g. 22–55 hex).
6. No solid filled buttons; use semi-transparent tinted backgrounds.
7. Card hover: `translateY(-4px)` and slightly brighter border only.

If a component’s meaning is ambiguous (e.g. whether to use green vs teal), flag it rather than guessing.

---
name: Demi Sokoya
description: Portfolio of a front-end developer and UX designer, dyed like adire eleko cloth.
colors:
  indigo-950: "#0f1532"
  indigo-900: "#141b3d"
  indigo-800: "#1c2760"
  indigo-700: "#2c3d8f"
  cloth: "#eef0f5"
  cloth-2: "#e2e6f0"
  on-indigo: "#eef0f5"
  on-indigo-2: "#b4bee0"
  ink: "#141b3d"
  ink-2: "#3d4a7a"
  turmeric: "#f2b437"
  turmeric-hover: "#f7c65e"
  rule-on-indigo: "rgba(238, 240, 245, 0.2)"
  rule-on-cloth: "rgba(20, 27, 61, 0.18)"
typography:
  display:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 4vw, 4.75rem)"
    fontWeight: 780
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.6vw, 3.5rem)"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.4vw, 2.25rem)"
    fontWeight: 760
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  lead:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum'"
  label:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  none: "0px"
spacing:
  page-max: "75rem"
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section-y: "clamp(4.5rem, 10vw, 8rem)"
  column-gap: "2rem"
  ledger-row: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.turmeric}"
    textColor: "{colors.indigo-900}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.turmeric-hover}"
    textColor: "{colors.indigo-900}"
  button-secondary-on-indigo:
    backgroundColor: "transparent"
    textColor: "{colors.on-indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.5rem"
  button-secondary-on-indigo-hover:
    backgroundColor: "{colors.on-indigo}"
    textColor: "{colors.indigo-900}"
  nav-link:
    textColor: "{colors.on-indigo-2}"
    typography: "{typography.body}"
  nav-link-hover:
    textColor: "{colors.on-indigo}"
  figure-plate:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "1rem"
  ledger-row:
    textColor: "{colors.on-indigo}"
    typography: "{typography.body}"
    padding: "0.75rem 0"
---

# Design System: Demi Sokoya

## Overview

**Creative North Star: "The Starch Resist"**

The design is the starch resist, the build is the dye, and the pattern comes through intact. The world is adire eleko, the Yoruba resist-dyed indigo cloth: a deep indigo ground, undyed cool cotton as the second field, and hand-painted white resist lines laid into one strict square panel grid. Everything that is not indigo or cloth has to earn its place, and only one warm thread runs through the whole page.

The page is calm and dense with fact rather than with ornament. Sections are full-bleed bands on one of two fields (indigo or cloth), each holding a centred column on a twelve-column module. Strips of the mirrored adire field mark the seams between sections, the same hand-drawn tile the hero uses. Project facts sit in ruled ledgers, screenshots are shown whole on a strip of cloth and named by their host beneath.

This world replaced an earlier cream ground with an italic serif display face and a rust accent. None of that vocabulary carries over.

**Key Characteristics:**
- Two fields only: indigo dye and undyed cloth.
- One warm thread, turmeric, reserved for primary actions and keyboard wayfinding.
- One mirrored tile behind every pattern surface, at one size.
- Wide, sharp grotesk display over a hyperlegible body face.
- Ruled hairlines carry structure; no cards, no chips, no shadows.
- Hand-drawn irregularity lives in the motifs and resist lines, never in the type or layout.

## Colors

An indigo dye ramp, an undyed cotton white, text tints pulled from the indigo hue, and a single turmeric thread.

### Primary
- **Turmeric Thread** (turmeric): fills primary action buttons ("See the work", "Download resume" on the cloth field, "Email me"). It is also the focus outline on the indigo field and the skip link ground. Its hover lifts to **Turmeric Glint** (turmeric-hover).

### Neutral
- **Vat Indigo** (indigo-900): the page ground, header, and every indigo-field section.
- **Deep Vat** (indigo-950): the footer and the scrollbar track; the darkest dye.
- **Panel Indigo** (indigo-800): the ground inside the mirrored adire field, one step lighter than the page so the pattern reads as cloth laid on the field.
- **Bright Indigo** (indigo-700): text selection, the focus outline on the cloth field, the painted resist rule on cloth, the scrollbar thumb.
- **Undyed Cotton** (cloth): the second field (Resume, Listening), the screenshot plate, and the resist lines of the adire pattern.
- **Cotton Shade** (cloth-2): a quieter cloth tint held in reserve for cloth-on-cloth separation.
- **Resist White** (on-indigo): primary text on indigo.
- **Faded Resist** (on-indigo-2): secondary text on indigo: lead paragraphs, ledger terms, nav links at rest, footer.
- **Dye Ink** (ink) and **Wash Ink** (ink-2): primary and secondary text on cloth.
- **Hairline on Indigo** (rule-on-indigo) and **Hairline on Cloth** (rule-on-cloth): every ruled divider, ledger row, and header underline.

### Named Rules
**The One Warm Thread Rule.** Turmeric appears on primary actions, the focus ring on indigo, and the skip link. Nothing else: no turmeric headings, links, hover states, icons or decoration.

**The Two Fields Rule.** A section sits on indigo or on cloth, set through the section's field. Text colors switch with the field (on-indigo pair on indigo, ink pair on cloth); never mix the pairs.

## Typography

**Display Font:** Archivo Variable (with Arial Narrow, sans-serif), always at font-stretch 112%
**Body Font:** Atkinson Hyperlegible Next Variable (with system-ui, sans-serif)

**Character:** A wide, tightly tracked grotesk does the shouting in heavy weights; a face built for legibility does all the reading. Both are self-hosted.

### Hierarchy
- **Display** (780, clamp 2.5rem to 4.75rem, 0.98): the hero headline and the contact headline (which caps at 4.5rem, line-height 1).
- **Headline** (760, clamp 2.25rem to 3.5rem, 1): section headings such as "Selected work" and "Resume".
- **Title** (760, clamp 1.75rem to 2.25rem; the lead project runs to 2.75rem, 1.05): project names. Smaller h3s ("Skills and tools") sit at 1.5rem, weight 720.
- **Lead** (400, 1.125rem phone to 1.25rem desktop, 1.55): the paragraph under a display or headline, in the secondary text tint, held to about 34rem.
- **Body** (400, 1rem, 1.6): ledgers, captions, nav, footer. Tabular numerals are on page-wide. Project descriptions and list items run at 1.0625rem.
- **Label** (700, 1.0625rem): button text and emphasised link values.

### Named Rules
**The Sixteen Floor Rule.** No running text below 16px (1rem). The root inherits the browser default size so user preferences scale everything.

**The No Eyebrow Rule.** Headings stand on their own. No small uppercase or tracked label sits above a heading to introduce it.

**The Wide Display Rule.** Every heading uses the display face at 112% width with negative tracking (-0.015em to -0.035em) and balanced wrapping. Body paragraphs use pretty wrapping.

## Layout

A centred column (75rem max) with a fluid gutter (1.25rem to 3rem) on full-bleed bands, each band padded top and bottom by the section rhythm (4.5rem to 8rem). Content inside sits on a twelve-column grid from the lg breakpoint with a 2rem column gap; below lg everything stacks to one column.

The hero grid is the exception: it runs twelve columns with no column gap. Text takes columns 1 to 7 and the Mirrored Adire Field takes columns 8 to 13 as an 8 x 8 square; on phones it becomes an 8 x 4 strip below the actions. The pattern bands between sections are strips of the same field, two tiles tall: 20 x 2 across the column on desktop and 8 x 2 on phones.

Project entries alternate the screenshot plate left and right (the lead project takes seven columns for its plate), with the text and ledger in the remaining five.

### Named Rules
**The One Tile Rule.** Every pattern surface is the same mirrored tile at one size. On phones it is 8 tiles across the column, for the hero strip and the bands alike. On desktop the hero's 8 x 8 field spans five twelfths of the column, and the bands run 20 tiles across the whole column, within 4% of the hero's tile. New surfaces change the tile count, and keep the count even so both ends of a row mirror alike; they never redraw the tile or mix in other motifs.

## Elevation & Depth

Flat. There are no elevation shadows. Depth comes from tone: the pattern in Panel Indigo sits on Vat Indigo, the footer drops to Deep Vat, and screenshots sit on a plate of undyed cloth. Field changes and hairline rules do the separating.

### Named Rules
**The Dyed Not Lifted Rule.** Surfaces are separated by dye depth and ruled lines, never by drop shadows or blur.

## Shapes

Square everything. Buttons, plates, pattern fields and tiles have no radius; the only rounding is a 2px softening on the focus outline. The irregularity in this world is drawn, not cut: pattern strokes and the resist rule wobble as if painted with a feather, while every container edge stays straight. Borders are 1px hairlines for structure and 1.5px solid strokes for outline buttons. A dashed hairline pair marks an honest gap (the "Next project" placeholder).

## Components

### Buttons
Blunt, square, heavy-weight label with an optional Font Awesome icon on the leading or trailing side.
- **Shape:** square corners (0px).
- **Primary:** turmeric fill, Vat Indigo text, 700 weight at 1.0625rem, padding 0.9rem by 1.5rem.
- **Hover / Focus:** background eases to turmeric-hover over 0.2s on the ease-out curve. Focus is the global 2px outline offset 3px.
- **Secondary on indigo:** transparent with a 1.5px Resist White border; on hover it inverts to a Resist White fill with Vat Indigo text. The header's "Get in touch" is the compact form (0.4rem by 1rem).

### Links
- **Inline and ledger links:** underlined at 1px with a 0.2em offset; hover thickens the underline to 3px. Contact rows thicken the value's underline when the whole row is hovered.
- **Nav links:** Faded Resist at rest, no underline; hover brightens to Resist White and underlines.

### Ruled Ledger (signature)
Facts as a definition list ruled by hairlines: each row is a two-column grid (7.5rem term, then value), 0.75rem vertical padding, a top hairline per row and a closing bottom hairline. Terms take the secondary tint. Used for project year, stack and links; the same ruled-list form carries the skills list (two columns on cloth) and the contact rows (icon, label, value).

### Screenshot Plate
A figure on Undyed Cotton with 0.625rem to 1rem padding, the screenshot shown whole at full width, and the live host named beneath in a 1rem caption in Wash Ink. No crop, no frame chrome, no shadow.

### Mirrored Adire Field (signature)
One hand-drawn 100 x 100 tile repeated across a grid. Every other tile in a row is flipped left to right, and every other tile in a column top to bottom, so each edge meets its own reflection. The tile is drawn against its edges on purpose: quarter rings at one corner close into full rings, quarter diamonds at the opposite corner into nested diamonds with a solid centre, a half leaf on one edge into whole leaves, half scallops into chains of circles, a half zigzag into a run of small diamonds, and edge ticks into ladders. Two diagonal waves and a few dots in the middle cross into a lattice once mirrored. Each tile is clipped to its square so seams meet cleanly. Resist White lines on a Panel Indigo ground, edged by a 1px hairline. Decorative; it carries an image role and a plain description.
- **Hero:** 8 x 8 in the right five columns; an 8 x 4 strip under the actions on phones.
- **Section bands:** 20 x 2 across the column on desktop, 8 x 2 on phones, marking the seams from work to resume, listening to contact, and contact to footer. Two tiles tall so shapes close across the middle seam.
- **Site icon:** the favicon (`public/favicon.svg`) is a 2 x 2 of the same tile, so the four bottom-right corners meet as a nested diamond at the centre. Lines and dots are about 2.4 times heavier than in the field so they survive at 16 to 32px. `public/apple-touch-icon.png` is the same icon at 180px for iOS home screens.
- **Motion:** none. The field is static.
- **Source:** `src/components/AdirePattern.tsx` (props: `size`, or `columns` and `rows`; `showSeams` for study). A standalone study lives at `/pattern.html` on the dev server.
- **Open, not yet rules:** the mottled indigo dye raster for the ground is not supplied yet, so the ground is flat Panel Indigo for now. A reversed pattern on the cloth field is unexplored.

### Resist Rule
A single hand-painted dividing line (2px, Bright Indigo on cloth) used where two sections share a field and need a seam.

### Navigation
A fixed header on Vat Indigo, 4rem tall, closed by a hairline. Wordmark in the display face at 1.125rem, weight 760. It hides on scroll down and returns on scroll up (0.35s ease-out). Below md a 2.75rem menu button opens a stacked list of hairline-ruled links at 1.125rem.

## Do's and Don'ts

### Do:
- **Do** keep turmeric to primary actions, the focus ring on indigo and the skip link.
- **Do** show hover on links by thickening the underline (1px to 3px), not by changing to turmeric.
- **Do** draw every pattern surface from the one mirrored tile at one size; change the tile count, keep it even.
- **Do** rule facts into ledgers with hairlines.
- **Do** keep all running text at 16px or larger.
- **Do** switch focus outline to Bright Indigo on the cloth field.

### Don't:
- **Don't** use chips, pills or tag badges; use a ruled ledger.
- **Don't** put an eyebrow label above a heading.
- **Don't** round corners or add drop shadows to buttons, plates or panels.
- **Don't** bring back the cream ground, italic serif display or rust accent.
- **Don't** resize the tile or add other motifs to fit a layout; change the tile count instead.

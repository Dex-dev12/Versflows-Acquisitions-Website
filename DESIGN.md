---
name: Versflows Acquisitions
description: A dark, quiet room where one lit pipeline shows how new business gets made.
colors:
  night: "#0A0C11"
  night-2: "#0E1118"
  night-footer: "#07080C"
  field: "#12151C"
  field-focus: "#151924"
  deep: "#0B2247"
  ink: "#F0F2F5"
  white: "#FFFFFF"
  muted: "#A0A6B1"
  faint: "#7D838F"
  signal: "#0060FC"
  sky: "#62BDFF"
  panel-fill: "rgba(255, 255, 255, 0.035)"
  hairline: "rgba(255, 255, 255, 0.08)"
  hairline-soft: "rgba(255, 255, 255, 0.06)"
  pill-border: "rgba(255, 255, 255, 0.15)"
  chrome-scrollbar: "#2A2F3A"
  chrome-scrollbar-hover: "#3A4150"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "2.55rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  display-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  display-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline-cta:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  subhead-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: "-0.02em"
  title-stage:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  lede-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.625
  lede:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  micro:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  field: "12px"
  panel: "18px"
  full: "9999px"
  chrome-focus: "6px"
  chrome-scrollbar: "10px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "40px"
  panel: "28px"
  panel-md: "32px"
  panel-lg: "48px"
  stack: "64px"
  section-compact: "80px"
  section: "112px"
  section-lg: "144px"
components:
  button-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.night}"
    rounded: "{rounded.full}"
    padding: "6px 6px 6px 24px"
  button-pill-hover:
    backgroundColor: "{colors.white}"
  button-dot:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "36px"
  button-pill-compact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.night}"
    rounded: "{rounded.full}"
    padding: "4px 4px 4px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  link-sky:
    textColor: "{colors.sky}"
    typography: "{typography.body}"
  panel:
    backgroundColor: "{colors.panel-fill}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
  input-focus:
    backgroundColor: "{colors.field-focus}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.ink}"
  step-node:
    backgroundColor: "{colors.night}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "52px"
  step-node-terminal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "52px"
---

# Design System: Versflows Acquisitions

## Overview

**Creative North Star: "The Quiet Control Room"**

The site is a near-black room with the lights mostly off. Bone-white Geist headlines sit in generous darkness, one soft navy glow pools behind each page's opening and its closing call to action, and every surface is a translucent pane of 3.5% white edged by an 8% hairline. Nothing glows for decoration. The light that does exist does a job: a sky-blue line travels through a six-station pipeline, reached stations brighten, and the end of every process lands on one solid signal-blue node.

Density is low and the rhythm is slow. Sections breathe on 112 to 144px of vertical space, headings are centred or held in a left five-column rail, and content is carried by hairline-divided lists and panels rather than grids of boxes. Type does the hierarchy with a single weight (Geist 500) and tight negative tracking; colour does almost none of it. The world was modelled on a dark-mode SaaS grammar (leftclick.ai, pinned by the user) and translated so that the process instrument replaces the usual stat row.

The confirmed rejections come from the direction contract and the build agrees with them: no neon glow, no stat row of numbers, no grid of identical icon cards, no hero imagery, no eyebrows or monospace labels.

**Key Characteristics:**
- Near-black ground with tonal steps, never pure black and never a gradient wash.
- One navy radial glow per hero and per closing band; nothing else glows except the pipeline light.
- Translucent panels with hairline borders and an 18px radius; zero box-shadows.
- White pill buttons that carry a round signal-blue arrow; ghost pills for everything secondary.
- Geist 500 headlines with negative tracking, sentence case throughout.
- Sky blue marks travel and reached state; signal blue marks the action and the destination.

## Colors

A cool near-black ground with bone-white type, two grey text tiers and two blues that split the work between light and destination.

### Primary
- **Signal Blue** (signal): the brand mark's blue. It fills the round arrow dot inside every white pill, the terminal node of every stepped process (phase 4 on Home, stage 8 on B2B Lead Generation), the final chip of the local-services flow, and one 12% tint cell closing the B2B deliverables grid. It is a fill, never text on night.

### Secondary
- **Pipeline Sky** (sky): the travelling light. It draws the pipeline progress line, its soft 35% halo and reached station dots, the bullet dots in check lists, inline text links ("See all eight stages", "About our approach"), required-field asterisks, the Markwicks status value, the active item in the mobile menu, the focus ring and the text caret.

### Tertiary
- **Midnight Navy** (deep): exists only inside the radial glow (95% at centre, fading to zero by 72%) behind page heroes and the closing CTA band.

### Neutral
- **Night** (night): the page ground, the inactive pipeline dot fill and the unreached step-node fill.
- **Night Two** (night-2): the alternate band, always at 60% over night, used for the logo strip and the process section.
- **Footer Night** (night-footer): the footer ground, one step darker than the page so the site ends in shade.
- **Field** (field, field-focus): form input fill at rest and on focus.
- **Bone** (ink): headlines, primary text, the white pill fill. Pure white (white) appears only as the pill hover and the text on signal blue.
- **Mist** (muted): body copy, ledes, nav links at rest, footer links.
- **Dusk** (faint): captions, footer column titles, definition-list keys, step numbers, unreached pipeline labels, the logo strip label.
- **Scrollbar** (chrome-scrollbar, chrome-scrollbar-hover): browser chrome only, the scrollbar thumb at rest and on hover over a Night track. Never a surface or text colour.
- **Hairlines** (panel-fill, hairline, hairline-soft, pill-border): white at 3.5% fills panels, 8% borders panels and divides lists, 6% separates sections and the header, 15% outlines ghost pills and unreached step nodes.

### Named Rules
**The Light and Destination Rule.** Sky is light in motion: lines, halos, dots, links, focus. Signal is where things arrive: the arrow you press and the last node of a process. Never swap them, and never set signal blue as text on night.

**The Two Glows Rule.** The navy glow appears behind a page's opening and behind its closing call to action. It never sits behind a mid-page section, a card or a button.

## Typography

**Display Font:** Geist (with system-ui, sans-serif)
**Body Font:** Geist (with system-ui, sans-serif)

**Character:** One grotesk at two weights. Headings are Geist 500 pulled tight with negative tracking, so large type reads dense and engineered; body is Geist 400 at relaxed leading in a cooler grey, so the copy recedes behind the headlines.

### Hierarchy
- **Display** (display, display-sm, display-lg: 500, 1.05, stepping up at sm and lg): one per page, the h1 of each hero and the Contact page title. Centred heroes cap at about 56rem wide so the Home headline breaks over two lines on desktop.
- **Headline** (headline, headline-sm, headline-cta: 500, 1.1): section h2s, stepping up at sm; the closing CTA band uses headline-cta at sm.
- **Title Large** (title-lg, title-stage, subhead-sm: 500, -0.02em): phase titles and mobile menu items (title-lg), B2B stage titles (title-stage), and compact section headings, which step from title-lg to subhead-sm at sm.
- **Title** (title: 500, -0.015em): panel and list-item headings.
- **Lede** (lede, lede-sm: 400, 1.625, Mist): the one paragraph under a display or headline, capped at about 42rem.
- **Body** (body, body-sm: 400, 1.625, Mist): list descriptions, panel text, FAQ answers. FAQ questions use body-lg at 500.
- **Label** (label, caption, micro: 400, Dusk or Mist): nav links and form labels (label, 500 in Bone for forms), captions and footer column titles (caption), and the numerals in the Contact page's small step circles (micro). Sentence case, no added letter-spacing.

### Named Rules
**The Single Weight Rule.** Every heading is Geist 500 and every paragraph is Geist 400. There is no 600 or 700 in the build; hierarchy comes from size and tracking.

**The Sentence Case Rule.** No uppercase, no tracked-out small labels, no monospace. Numbers that count steps use tabular figures, not a different face.

## Layout

A single centred container (76rem max) with 20px, 32px and 40px side gutters at mobile, sm and lg. Sections stack on 112px of vertical padding (144px from sm); a compact band such as the local-services aside uses 80 to 96px. Section headings sit 64px above their content.

Two compositions repeat. The centred column carries heroes, section intros and the closing band, with heading and lede both centred. The split rail puts the heading in the first five of twelve columns and the content in columns seven to twelve, leaving column six empty as a gutter. Sections are separated by a full-bleed 6% hairline or by switching to the Night Two band, never by both colour and imagery.

Process content is shown as a sequence rather than a grid: a horizontal four-node row on desktop that becomes a vertical list on mobile, an eight-stage vertical rail whose last segment warms from 15% white to sky, and the pipeline track that switches from a six-column horizontal track to a vertical one below md. Lists of features are hairline-divided rows, not cards.

The header is fixed at 72px, transparent at the top and becomes 85% night with a medium backdrop blur and a 6% bottom hairline once scrolled or opened. Below lg the nav collapses to a full-height menu of 24px items with a full-width pill pinned to the bottom.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere in the build. Depth comes from three things only: translucent panels (3.5% white) with 8% hairlines sitting on the night ground, tonal steps between Night, Night Two and Footer Night, and the navy radial glow behind each opening and closing. The only other luminous effect is the pipeline's sky halo, a 96px radial gradient (sky at 35% fading out by 65%) that rides with the active station.

### Named Rules
**The No-Shadow Rule.** Surfaces separate by fill and hairline, never by a cast shadow. If a surface needs to stand forward, raise its fill a few percent of white or give it a hairline; do not add a shadow.

## Shapes

Three surface radii. Panels and the pipeline frame use an 18px radius; inputs, the status note and the hover rows inside the Markwicks list use 12px; every button, dot, chip and step node is fully round. There are no square-cornered surfaces and no intermediate radii. Two further radii belong to browser chrome only: the focus ring rounds at 6px and the scrollbar thumb at 10px (Scrollbar fill, Scrollbar Hover on hover, inset by a 2px Night border). Edges are 1px hairlines in white alpha; there are no coloured borders except the sky edge on reached dots and the focused input.

## Components

### Buttons
Quiet and decisive: one bright object per cluster.
- **Shape:** fully round pill.
- **Primary (white pill):** Bone fill, Night text at 15px 500, 24px left padding, with a 36px signal-blue circle holding a 16px arrow tucked 6px inside the right edge. Used for "Discuss Your Growth Goals" and "Let's talk", always pointing to /contact.
- **Hover / Focus:** fill brightens to pure white over 300ms and the arrow dot slides 3px right on the expo ease over 500ms. Focus uses the global sky ring (2px, 3px offset).
- **Compact (header):** the same object at 14px with a 28px dot, shown in the desktop header only.
- **Ghost:** transparent with a 15% white border, Bone text, 12px by 24px padding; on hover the border rises to 40% and a 4% white fill appears. Used for "Explore Our Process" and every secondary route.
- **Text link:** sky, 500, with a trailing 16px arrow; underlines on hover with a 4px offset.

### Chips
- **Style:** used once, in the Additional Services flow: round, 15px 500, 4% white fill with a 12% border, joined by 20px hairlines. The final chip is solid signal blue with white text.

### Cards / Containers
- **Corner Style:** 18px.
- **Background:** 3.5% white over night.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px at 8% white; internal splits use the same hairline as dividers.
- **Internal Padding:** 28px, 32px from sm; large two-pane panels use 32px rising to 48px.

### Inputs / Fields
- **Style:** Field fill, 1px 10% white border, 12px radius, 12px by 16px padding, 16px Bone text, Dusk placeholder at 80%. Labels sit above in 14px 500 Bone; required marks are a sky asterisk, optional ones a muted "(optional)".
- **Focus:** border turns sky and the fill lifts to Field Focus; no glow.

### Navigation
- **Desktop:** logo left, four centred 14px links in Mist that turn Bone on hover and when active, compact white pill right.
- **Mobile:** a 44px menu toggle opens a full-height panel of 24px 500 links separated by 6% hairlines, each with a Dusk arrow; the active link is sky.
- **Footer:** Footer Night ground, a 13px Dusk column title over 15px Mist links that turn Bone on hover.

### Pipeline Track (signature)
The site's proof instrument. A translucent panel holding six stations from Market to Handoff. A 1px 10% rail runs between station centres; a sky line grows along it on the expo ease over one second, a sky halo follows the active station, and each reached dot fills sky while its label moves from Dusk to Bone and its description from Dusk to Mist. The cycle advances every 1.5s and holds two beats on Handoff; under reduced motion it renders fully reached and still. A 6% hairline footer carries the "Illustrative workflow" caption.

### Step Rail
Numbered round nodes (52px on Home, 40 to 48px on B2B) in night with a 15% border and Bone tabular numerals, linked by 15% white hairlines; the final segment warms from 15% white to sky. The last node is solid signal blue with a sky edge.

### Check List
15px Mist items led by a 6px sky dot aligned to the first line.

### FAQ
Hairline-divided rows; the question is 17px 500 with a 32px round outlined toggle whose plus rotates 45 degrees on the expo ease when open. One item is open by default.

## Do's and Don'ts

### Do:
- **Do** set every page on Night and separate sections with a 6% full-bleed hairline or the Night Two band.
- **Do** build containers as 3.5% white panels with an 8% hairline and an 18px radius.
- **Do** use exactly one white pill with its signal-blue arrow dot per action cluster, paired with ghost pills for secondary routes.
- **Do** keep headings in Geist 500 with negative tracking (-0.035em display, -0.03em headline, -0.015em to -0.02em titles).
- **Do** show process as a sequence (rail, track or numbered list); stepped rails end on one signal-blue node.
- **Do** animate state with the expo ease (cubic-bezier(0.16, 1, 0.3, 1)) and render the final state still under prefers-reduced-motion.

### Don't:
- **Don't** add box-shadows, neon glows or coloured glows; the navy hero glow and the pipeline halo are the only light sources.
- **Don't** add eyebrows, kickers, uppercase labels or monospace text above headings.
- **Don't** set signal blue as text on night; use sky for coloured text.
- **Don't** build grids of identical icon cards or a row of statistics.
- **Don't** put imagery in the hero.
- **Don't** introduce weights above 500, or surface radii other than 12px, 18px and fully round.

# Bucco — A Scientific Field Guide to His First Year

A full scientific reference on Border Collie puppyhood, applied specifically to Bucco. Built around an existing first-year training plan, anchored in peer-reviewed research, organized for re-reading.

**[→ Open the live dashboard](https://smatty-ice.github.io/bucco-first-year/)** (once GitHub Pages is enabled — see below)

---

## What's in here

| What | Where | Time to read |
|---|---|---|
| **Interactive dashboard** | [`index.html`](index.html) (live on Pages) | 5 min — current week, feeding calc, training games |
| **Modular chapters** | [`docs/`](docs/) | 30–90 min — pick a topic |
| **62-page textbook PDF** | `pdf/bucco-first-year-deep-dive.pdf` (see binaries note) | An evening |
| **15-slide highlights deck** | `deck/bucco-highlights.pptx` (see binaries note) | 10 min |
| **Build sources** | [`pdf/master.md`](pdf/master.md), [`deck/build-deck.js`](deck/build-deck.js) | for editing/regenerating |

---

## The seven chapters

1. **[Week-by-week atlas](docs/01-week-by-week.md)** — the cornerstone. Week 12 through week 52. Each week: expected weight, calorie target, training goals, socialization checkpoints, vet milestones, watchouts.
2. **[Neuroscience of puppyhood](docs/02-neuroscience.md)** — critical periods (Scott & Fuller), fear windows, sleep architecture (Iotchev), myelination, classical and operant conditioning at the neural level, the gut-brain axis, the 72-hour cortisol rule.
3. **[Feeding science](docs/03-nutrition-science.md)** — RER math, macros, the calcium/phosphorus story (Hazewinkel), grain-free/DCM FDA work, treat hierarchy, BCS scoring, supplements.
4. **[Learning theory](docs/04-learning-theory.md)** — the science under Susan Garrett's method. Operant quadrants, reinforcement schedules, shaping, markers, Premack, classical counterconditioning, the Distraction Intensity Index.
5. **[BC genetics & behavior](docs/05-bc-genetics-behavior.md)** — Coppinger's predatory motor pattern, the four genetic diseases (CEA, TNS, NCL, MDR1), compulsive disorder neurobiology, Chaser the 1,022-word dog, BC adolescence.
6. **[Fun facts & research](docs/06-fun-facts-and-research.md)** — canine cognition, sensory neuroscience, BC trivia, domestication science.
7. **[Warnings & red flags](docs/07-warnings-red-flags.md)** — BC-specific NEVER list (lasers, dog parks), universal NEVER list, behavioral red flags, medical emergencies, vaccine reaction guide, the "right person for help" decision tree.

---

## Enabling GitHub Pages (one-time, 2 clicks)

1. Open [Settings → Pages](https://github.com/smatty-ice/bucco-first-year/settings/pages)
2. Under **Source**, choose **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

The site comes up at `https://smatty-ice.github.io/bucco-first-year/` within a minute or two. The dashboard becomes the landing page. The markdown chapters render automatically via Jekyll.

---

## Binary files (PDF + PPTX)

The compiled PDF and PPTX may be uploaded as a separate step (see commit history) or rebuilt from source.

**Rebuild from source:**

```bash
# PDF
cd pdf/
pandoc master.md -o bucco-first-year-deep-dive.pdf \
  --pdf-engine=xelatex --toc --toc-depth=2 \
  -V geometry:margin=1in -V mainfont="Lato" -V monofont="DejaVu Sans Mono" \
  -V fontsize=11pt -V colorlinks=true --highlight-style=tango

# Deck (requires pptxgenjs installed: npm i pptxgenjs)
cd deck/
node build-deck.js
```

---

## How the pieces relate

```
          bucco-first-year-deep-dive.pdf (textbook)
                        ↑
                [compiled from]
                        ↑
                  docs/ (chapters)
                        ↑
                [highlights pulled out]
                    ↓                ↓
        bucco-highlights.pptx    index.html / dashboard
        (Nina / re-skim)         (daily reference, live on Pages)
```

The docs are the source of truth. The PDF is them, bound. The deck is the 15-slide essence. The dashboard is the live, browser-based interactive view.

---

## The one-line summary

> Be more interesting than the environment, reinforce the behavior you want, manage the environment to prevent rehearsal of what you don't want, and remember that what you grow is what you get.
>
> Everything else is detail.

---

*Compiled May 12, 2026. Bucco is 12 weeks, 2 days old. 39 weeks of his first year remain.*

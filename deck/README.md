# Slide Deck

The 15-slide highlights deck (`bucco-highlights.pptx`) is the visual essence of the textbook — good for sharing with Nina, quick re-skimming, or printing as handouts.

## Files

- `build-deck.js` — pptxgenjs source (rebuild here)
- `bucco-highlights.pptx` — the deck itself (upload manually; see below)

## To rebuild the deck

```bash
npm install pptxgenjs
node build-deck.js
```

Output: `bucco-highlights.pptx` in this directory.

## To add the prebuilt deck to the repo

The deck is a binary file. Two ways to get it into the repo:

**Web UI (easiest):**
1. Visit https://github.com/smatty-ice/bucco-first-year/upload/main/deck
2. Drag `bucco-highlights.pptx` from your computer
3. Commit

**Or rebuild it locally:**
Run the command above; commit the result.

## Palette

- Primary deep teal: `#1F4E5F`
- Sand: `#F4E8D8`
- Cream: `#FAF6F0`
- Accent burnt orange: `#D97842`
- Warn red: `#B33A2A`
- Good green: `#5A8F6B`

Built with [pptxgenjs](https://gitbrent.github.io/PptxGenJS/).

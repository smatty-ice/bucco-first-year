// Bucco's First Year — Highlights Deck
// Built with pptxgenjs
// Usage: npm install pptxgenjs && node build-deck.js

const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.author = "Compiled for Scott Smathers";
pres.title = "Bucco's First Year — Highlights";

// PALETTE
const P = {
  deep: "1F4E5F",       // primary deep teal
  deepDark: "143540",
  sand: "F4E8D8",
  cream: "FAF6F0",
  accent: "D97842",     // warm burnt orange (warnings)
  accent2: "5C8B8E",    // dusty teal (secondary)
  text: "1E1E1E",
  textMute: "5A6670",
  good: "5A8F6B",
  warn: "B33A2A",
};

const SLIDE_W = 13.333;
const SLIDE_H = 7.5;

// === REUSABLE HELPERS ===
function addFooter(slide, pageNum) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: SLIDE_H - 0.3, w: SLIDE_W, h: 0.3,
    fill: { color: P.deepDark }, line: { color: P.deepDark }
  });
  slide.addText("Bucco's First Year · Scientific Highlights", {
    x: 0.5, y: SLIDE_H - 0.3, w: 8, h: 0.3,
    fontSize: 9, color: P.cream, valign: "middle", fontFace: "Calibri", margin: 0
  });
  slide.addText(String(pageNum), {
    x: SLIDE_W - 0.8, y: SLIDE_H - 0.3, w: 0.3, h: 0.3,
    fontSize: 9, color: P.cream, valign: "middle", align: "right", margin: 0
  });
}

function addTitle(slide, title, subtitle) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.2, h: SLIDE_H, fill: { color: P.deep }, line: { color: P.deep }
  });
  slide.addText(title, {
    x: 0.6, y: 0.35, w: SLIDE_W - 1.2, h: 0.7,
    fontSize: 30, bold: true, color: P.text, fontFace: "Georgia", margin: 0
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.6, y: 1.0, w: SLIDE_W - 1.2, h: 0.5,
      fontSize: 14, italic: true, color: P.textMute, fontFace: "Calibri", margin: 0
    });
  }
}

// === SLIDE 1 — TITLE ===
{
  const s = pres.addSlide();
  s.background = { color: P.deep };

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: SLIDE_W, h: 0.15, fill: { color: P.accent }, line: { color: P.accent }
  });

  s.addText("BUCCO", {
    x: 0.8, y: 1.8, w: SLIDE_W - 1.6, h: 1.4,
    fontSize: 110, bold: true, color: P.cream, fontFace: "Georgia",
    align: "left", charSpacing: 12, margin: 0
  });
  s.addText("A scientific field guide to his first year", {
    x: 0.8, y: 3.3, w: SLIDE_W - 1.6, h: 0.6,
    fontSize: 24, italic: true, color: P.sand, fontFace: "Calibri", align: "left", margin: 0
  });
  s.addText("Border Collie · Born Feb 18, 2026 · Home since Apr 27, 2026 · North Hills Pittsburgh", {
    x: 0.8, y: 4.0, w: SLIDE_W - 1.6, h: 0.4,
    fontSize: 14, color: P.sand, fontFace: "Calibri", align: "left", margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 5.5, w: 1.8, h: 0.04, fill: { color: P.accent }, line: { color: P.accent }
  });
  s.addText("Compiled for Scott Smathers", {
    x: 0.8, y: 5.65, w: 8, h: 0.4,
    fontSize: 14, color: P.cream, fontFace: "Calibri", margin: 0
  });
  s.addText("Spirit of Susan Garrett · Anchored in peer-reviewed science · May 2026", {
    x: 0.8, y: 6.05, w: 11, h: 0.4,
    fontSize: 12, color: P.sand, fontFace: "Calibri", italic: true, margin: 0
  });
}

// === SLIDE 2 — WHERE BUCCO IS NOW ===
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "Where Bucco is right now", "Week 12 · The cornerstone of the next year");

  const cards = [
    { num: "12-18", label: "lb", sub: "expected weight range" },
    { num: "~880", label: "kcal/day", sub: "4 meals · ~80% via training" },
    { num: "18-20", label: "hr sleep", sub: "REM ≈ 30% of total" },
    { num: "16w", label: "window closes", sub: "primary socialization" }
  ];

  const startY = 2.2, cardW = 2.85, gap = 0.3;
  const totalW = 4 * cardW + 3 * gap;
  let startX = (SLIDE_W - totalW) / 2;

  cards.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: startY, w: cardW, h: 2.4,
      fill: { color: "FFFFFF" }, line: { color: "E0DACD", width: 1 },
      shadow: { type: "outer", color: "000000", blur: 12, offset: 3, angle: 90, opacity: 0.08 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: startY, w: cardW, h: 0.12, fill: { color: P.deep }, line: { color: P.deep }
    });
    s.addText(c.num, {
      x: x + 0.1, y: startY + 0.35, w: cardW - 0.2, h: 0.9,
      fontSize: 48, bold: true, color: P.deep, fontFace: "Georgia", align: "center", margin: 0
    });
    s.addText(c.label, {
      x: x + 0.1, y: startY + 1.25, w: cardW - 0.2, h: 0.4,
      fontSize: 14, color: P.accent, fontFace: "Calibri", align: "center", bold: true, margin: 0
    });
    s.addText(c.sub, {
      x: x + 0.15, y: startY + 1.75, w: cardW - 0.3, h: 0.5,
      fontSize: 12, color: P.textMute, fontFace: "Calibri", align: "center", margin: 0
    });
  });

  s.addText("The 12-week brain runs different software than the 12-month brain.", {
    x: 0.8, y: 5.2, w: SLIDE_W - 1.6, h: 0.5,
    fontSize: 16, italic: true, color: P.text, fontFace: "Georgia", align: "center", margin: 0
  });
  s.addText("Everything in the next 4 weeks compounds for the next 12 months.", {
    x: 0.8, y: 5.65, w: SLIDE_W - 1.6, h: 0.4,
    fontSize: 14, color: P.textMute, fontFace: "Calibri", align: "center", margin: 0
  });
  addFooter(s, 2);
}

// (Slides 3-15 omitted from this committed source for brevity; the full build script is on disk in the workspace.
// To rebuild the deck locally: take the original build-deck.js, ensure `require("pptxgenjs")` is used, then `node build-deck.js`.)

pres.writeFile({ fileName: "bucco-highlights.pptx" })
  .then(name => console.log("WROTE", name))
  .catch(err => console.error("ERR", err));

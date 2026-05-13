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
  deep: "1F4E5F",
  deepDark: "143540",
  sand: "F4E8D8",
  cream: "FAF6F0",
  accent: "D97842",
  accent2: "5C8B8E",
  text: "1E1E1E",
  textMute: "5A6670",
  good: "5A8F6B",
  warn: "B33A2A",
};

const SLIDE_W = 13.333;
const SLIDE_H = 7.5;

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

// SLIDE 1 — TITLE
{
  const s = pres.addSlide();
  s.background = { color: P.deep };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: SLIDE_W, h: 0.15, fill: { color: P.accent }, line: { color: P.accent } });
  s.addText("BUCCO", { x: 0.8, y: 1.8, w: SLIDE_W - 1.6, h: 1.4, fontSize: 110, bold: true, color: P.cream, fontFace: "Georgia", align: "left", charSpacing: 12, margin: 0 });
  s.addText("A scientific field guide to his first year", { x: 0.8, y: 3.3, w: SLIDE_W - 1.6, h: 0.6, fontSize: 24, italic: true, color: P.sand, fontFace: "Calibri", align: "left", margin: 0 });
  s.addText("Border Collie · Born Feb 18, 2026 · Home since Apr 27, 2026 · North Hills Pittsburgh", { x: 0.8, y: 4.0, w: SLIDE_W - 1.6, h: 0.4, fontSize: 14, color: P.sand, fontFace: "Calibri", align: "left", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 5.5, w: 1.8, h: 0.04, fill: { color: P.accent }, line: { color: P.accent } });
  s.addText("Compiled for Scott Smathers", { x: 0.8, y: 5.65, w: 8, h: 0.4, fontSize: 14, color: P.cream, fontFace: "Calibri", margin: 0 });
  s.addText("Spirit of Susan Garrett · Anchored in peer-reviewed science · May 2026", { x: 0.8, y: 6.05, w: 11, h: 0.4, fontSize: 12, color: P.sand, fontFace: "Calibri", italic: true, margin: 0 });
}

// SLIDE 2 — WHERE BUCCO IS NOW
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
    s.addShape(pres.shapes.RECTANGLE, { x, y: startY, w: cardW, h: 2.4, fill: { color: "FFFFFF" }, line: { color: "E0DACD", width: 1 }, shadow: { type: "outer", color: "000000", blur: 12, offset: 3, angle: 90, opacity: 0.08 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: startY, w: cardW, h: 0.12, fill: { color: P.deep }, line: { color: P.deep } });
    s.addText(c.num, { x: x + 0.1, y: startY + 0.35, w: cardW - 0.2, h: 0.9, fontSize: 48, bold: true, color: P.deep, fontFace: "Georgia", align: "center", margin: 0 });
    s.addText(c.label, { x: x + 0.1, y: startY + 1.25, w: cardW - 0.2, h: 0.4, fontSize: 14, color: P.accent, fontFace: "Calibri", align: "center", bold: true, margin: 0 });
    s.addText(c.sub, { x: x + 0.15, y: startY + 1.75, w: cardW - 0.3, h: 0.5, fontSize: 12, color: P.textMute, fontFace: "Calibri", align: "center", margin: 0 });
  });
  s.addText("The 12-week brain runs different software than the 12-month brain.", { x: 0.8, y: 5.2, w: SLIDE_W - 1.6, h: 0.5, fontSize: 16, italic: true, color: P.text, fontFace: "Georgia", align: "center", margin: 0 });
  s.addText("Everything in the next 4 weeks compounds for the next 12 months.", { x: 0.8, y: 5.65, w: SLIDE_W - 1.6, h: 0.4, fontSize: 14, color: P.textMute, fontFace: "Calibri", align: "center", margin: 0 });
  addFooter(s, 2);
}

// SLIDE 3 — THE FOUR R's
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "The Four R's", "Susan Garrett's foundation priorities · the lens for every decision");
  const items = [
    { letter: "R", word: "Relationship", desc: "You are the most reinforcing thing in his world. Built daily, never commanded." },
    { letter: "R", word: "Recall", desc: "Comes when called, every time, regardless of distraction. Built in layers, never tested before it's ready." },
    { letter: "R", word: "Retrieve", desc: "Brings value back to the handler. The neurochemistry of engagement, not a circus trick." },
    { letter: "R", word: "Reinforcement Zone", desc: "The physical pocket at your chosen side. Food delivered there. Loose-leash, heel, recall — all built on top." }
  ];
  const startY = 1.9;
  items.forEach((it, i) => {
    const y = startY + i * 1.25;
    s.addShape(pres.shapes.OVAL, { x: 1.0, y: y, w: 0.95, h: 0.95, fill: { color: P.deep }, line: { color: P.deep } });
    s.addText(it.letter, { x: 1.0, y: y, w: 0.95, h: 0.95, fontSize: 38, bold: true, color: P.cream, align: "center", valign: "middle", fontFace: "Georgia", margin: 0 });
    s.addText(it.word, { x: 2.2, y: y, w: 4, h: 0.5, fontSize: 22, bold: true, color: P.text, fontFace: "Georgia", margin: 0 });
    s.addText(it.desc, { x: 2.2, y: y + 0.5, w: SLIDE_W - 3.0, h: 0.55, fontSize: 13, color: P.textMute, fontFace: "Calibri", margin: 0 });
  });
  addFooter(s, 3);
}

// SLIDE 4 — CRITICAL PERIOD
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "The socialization window", "Scott & Fuller, 1965 · Modern review 2022");
  const tlY = 3.0, tlX = 1.0, tlW = SLIDE_W - 2.0;
  s.addShape(pres.shapes.LINE, { x: tlX, y: tlY, w: tlW, h: 0, line: { color: P.textMute, width: 2 } });
  const w3_12_x = tlX;
  const w3_12_w = tlW * (12 - 3) / (52 - 3);
  s.addShape(pres.shapes.RECTANGLE, { x: w3_12_x, y: tlY - 0.35, w: w3_12_w, h: 0.7, fill: { color: P.deep, transparency: 15 }, line: { color: P.deep } });
  s.addText("WEEKS 3–12\nPrimary socialization window", { x: w3_12_x, y: tlY - 0.35, w: w3_12_w, h: 0.7, fontSize: 11, bold: true, color: P.cream, align: "center", valign: "middle", fontFace: "Calibri", margin: 0 });
  const w12_16_w = tlW * (16 - 12) / (52 - 3);
  s.addShape(pres.shapes.RECTANGLE, { x: w3_12_x + w3_12_w, y: tlY - 0.35, w: w12_16_w, h: 0.7, fill: { color: P.accent, transparency: 25 }, line: { color: P.accent } });
  s.addText("12–16\nclosing", { x: w3_12_x + w3_12_w, y: tlY - 0.35, w: w12_16_w, h: 0.7, fontSize: 10, bold: true, color: P.cream, align: "center", valign: "middle", fontFace: "Calibri", margin: 0 });
  const hereX = tlX + tlW * (12 - 3) / (52 - 3);
  s.addShape(pres.shapes.OVAL, { x: hereX - 0.1, y: tlY - 0.1, w: 0.2, h: 0.2, fill: { color: P.accent }, line: { color: P.cream, width: 2 } });
  s.addText("BUCCO IS HERE\nWeek 12", { x: hereX - 1, y: tlY + 0.3, w: 2, h: 0.7, fontSize: 11, bold: true, color: P.accent, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("WEEK 3", { x: tlX - 0.7, y: tlY - 1.05, w: 1.4, h: 0.3, fontSize: 10, color: P.textMute, align: "center", margin: 0 });
  s.addText("WEEK 52", { x: tlX + tlW - 0.7, y: tlY - 1.05, w: 1.4, h: 0.3, fontSize: 10, color: P.textMute, align: "center", margin: 0 });
  const factsY = 4.5;
  const facts = [
    { stat: "65%", lbl: "of adult behavior is environment, not genetics", attr: "Scott & Fuller, 1965" },
    { stat: "100", lbl: "positive new exposures recommended by week 16", attr: "AVMA consensus" },
    { stat: "4 wks", lbl: "Bucco has left in the primary window", attr: "Today: May 12, 2026" }
  ];
  const factW = 3.8, factGap = 0.3;
  const factTotalW = 3 * factW + 2 * factGap;
  let factStartX = (SLIDE_W - factTotalW) / 2;
  facts.forEach((f, i) => {
    const x = factStartX + i * (factW + factGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: factsY, w: factW, h: 2.2, fill: { color: "FFFFFF" }, line: { color: "E0DACD" } });
    s.addText(f.stat, { x: x + 0.1, y: factsY + 0.2, w: factW - 0.2, h: 0.9, fontSize: 44, bold: true, color: P.deep, align: "center", fontFace: "Georgia", margin: 0 });
    s.addText(f.lbl, { x: x + 0.2, y: factsY + 1.1, w: factW - 0.4, h: 0.6, fontSize: 12, color: P.text, align: "center", fontFace: "Calibri", margin: 0 });
    s.addText(f.attr, { x: x + 0.2, y: factsY + 1.75, w: factW - 0.4, h: 0.4, fontSize: 10, italic: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  });
  addFooter(s, 4);
}

// SLIDE 5 — SLEEP & THE BRAIN
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "Sleep is when learning happens", "Puppies don't need exercise. They need rest.");
  s.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 2.1, w: 5.5, h: 4.4, fill: { color: P.deep }, line: { color: P.deep } });
  s.addText("18-20", { x: 0.8, y: 2.4, w: 5.5, h: 1.6, fontSize: 90, bold: true, color: P.cream, align: "center", valign: "middle", fontFace: "Georgia", margin: 0 });
  s.addText("hours per day, at 12 weeks", { x: 0.8, y: 4.1, w: 5.5, h: 0.4, fontSize: 16, italic: true, color: P.sand, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("REM sleep ≈ 30% of total", { x: 0.8, y: 4.7, w: 5.5, h: 0.5, fontSize: 22, bold: true, color: P.accent, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("— vs. ~10% in adult dogs.\nIotchev et al., Nature Sci Reports 2021", { x: 0.8, y: 5.3, w: 5.5, h: 0.9, fontSize: 11, color: P.sand, align: "center", fontFace: "Calibri", margin: 0 });
  const rx = 6.8, rw = 5.7;
  s.addText("What this means", { x: rx, y: 2.1, w: rw, h: 0.5, fontSize: 22, bold: true, color: P.text, fontFace: "Georgia", margin: 0 });
  s.addText([
    { text: "Hyperactive puppy = under-slept puppy.", options: { bullet: true, breakLine: true, bold: true } },
    { text: "Cure is more crate time, not more walks.", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "REM = memory consolidation.", options: { bullet: true, breakLine: true, bold: true } },
    { text: "Your 5 min of Crate Games gets filed away while he sleeps.", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "Brain doubles in weight wk 3–12.", options: { bullet: true, breakLine: true, bold: true } },
    { text: "Synaptic density peaks then prunes through year 1.", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "Pre-frontal cortex isn't done myelinating until 18–24 months.", options: { bullet: true, bold: true } },
  ], { x: rx, y: 2.7, w: rw, h: 3.8, fontSize: 13, color: P.text, fontFace: "Calibri", paraSpaceAfter: 6, valign: "top" });
  addFooter(s, 5);
}

// SLIDE 6 — THE FEEDING MATH
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "Feeding · the real math", "RER × life-stage multiplier · adjust by body condition every 2 weeks");
  s.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 2.0, w: SLIDE_W - 2.0, h: 1.3, fill: { color: P.deep }, line: { color: P.deep } });
  s.addText("Daily kcal  =  70 × (kg)^0.75  ×  life-stage multiplier", { x: 1.0, y: 2.05, w: SLIDE_W - 2.0, h: 0.7, fontSize: 22, bold: true, color: P.cream, align: "center", valign: "middle", fontFace: "Georgia", margin: 0 });
  s.addText("0–4 mo: ×3.0    ·    4–12 mo: ×2.0    ·    Adult: ×1.4–1.6", { x: 1.0, y: 2.75, w: SLIDE_W - 2.0, h: 0.5, fontSize: 16, italic: true, color: P.sand, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("At Bucco's current age (12 weeks):", { x: 1.0, y: 3.7, w: SLIDE_W - 2.0, h: 0.4, fontSize: 16, bold: true, color: P.text, fontFace: "Calibri", margin: 0 });
  const tableData = [
    [
      { text: "WEIGHT", options: { bold: true, color: "FFFFFF", fill: { color: P.deep } } },
      { text: "RER", options: { bold: true, color: "FFFFFF", fill: { color: P.deep } } },
      { text: "DAILY (×3)", options: { bold: true, color: "FFFFFF", fill: { color: P.deep } } },
      { text: "MEALS", options: { bold: true, color: "FFFFFF", fill: { color: P.deep } } },
    ],
    ["12 lb (5.4 kg)", "248", "745 kcal", "4 ×/day"],
    ["15 lb (6.8 kg)", "294", "880 kcal", "4 ×/day"],
    ["18 lb (8.2 kg)", "338", "1015 kcal", "4 ×/day"],
  ];
  s.addTable(tableData, { x: 1.0, y: 4.2, w: SLIDE_W - 2.0, fontSize: 14, fontFace: "Calibri", color: P.text, align: "center", border: { pt: 1, color: "D5CDB5" }, rowH: 0.45 });
  s.addText("~80% delivered through training, not from a bowl. Body condition matters more than the scale.", { x: 1.0, y: 6.4, w: SLIDE_W - 2.0, h: 0.5, fontSize: 13, italic: true, color: P.accent, align: "center", fontFace: "Calibri", margin: 0 });
  addFooter(s, 6);
}

// SLIDE 7 — CALCIUM WARNING
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "The single most important number on the bag", "Hazewinkel et al., Utrecht 1985–1991 · still the standard");
  s.addText("Calcium : Phosphorus", { x: 1.0, y: 2.0, w: SLIDE_W - 2.0, h: 0.6, fontSize: 22, italic: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("1.1 : 1   to   1.3 : 1", { x: 1.0, y: 2.7, w: SLIDE_W - 2.0, h: 1.6, fontSize: 56, bold: true, color: P.deep, align: "center", valign: "middle", fontFace: "Georgia", margin: 0 });
  s.addText("for medium and large breed growth", { x: 1.0, y: 4.35, w: SLIDE_W - 2.0, h: 0.4, fontSize: 14, italic: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  const colW = 5.5, colY = 5.0, colH = 1.7;
  s.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: colY, w: colW, h: colH, fill: { color: "FFFFFF" }, line: { color: P.warn, width: 2 } });
  s.addText("NEVER", { x: 1.15, y: colY + 0.1, w: colW - 0.3, h: 0.4, fontSize: 14, bold: true, color: P.warn, fontFace: "Calibri", margin: 0 });
  s.addText([
    { text: "Supplement calcium 'for stronger bones'", options: { bullet: true, breakLine: true } },
    { text: "Feed adult food during growth", options: { bullet: true, breakLine: true } },
    { text: "Switch foods every month", options: { bullet: true } }
  ], { x: 1.15, y: colY + 0.55, w: colW - 0.3, h: colH - 0.7, fontSize: 12, color: P.text, fontFace: "Calibri" });
  s.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: colY, w: colW, h: colH, fill: { color: "FFFFFF" }, line: { color: P.good, width: 2 } });
  s.addText("ALWAYS", { x: 6.95, y: colY + 0.1, w: colW - 0.3, h: 0.4, fontSize: 14, bold: true, color: P.good, fontFace: "Calibri", margin: 0 });
  s.addText([
    { text: "Check Ca:P on the bag for ratio + values", options: { bullet: true, breakLine: true } },
    { text: "AAFCO 'complete & balanced for growth' statement", options: { bullet: true, breakLine: true } },
    { text: "Transition new foods over 7–10 days", options: { bullet: true } }
  ], { x: 6.95, y: colY + 0.55, w: colW - 0.3, h: colH - 0.7, fontSize: 12, color: P.text, fontFace: "Calibri" });
  addFooter(s, 7);
}

// SLIDE 8 — OPERANT QUADRANTS
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "Why we only use the green quadrant", "B.F. Skinner 1938 · Modern animal learning science");
  const gridX = 1.5, gridY = 2.2, cellW = 4.5, cellH = 2.0;
  s.addText("ADD STIMULUS", { x: gridX + 0.5, y: gridY - 0.4, w: cellW, h: 0.3, fontSize: 12, bold: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("REMOVE STIMULUS", { x: gridX + cellW + 0.7, y: gridY - 0.4, w: cellW, h: 0.3, fontSize: 12, bold: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("BEHAVIOR\nINCREASES", { x: gridX - 1.4, y: gridY + 0.2, w: 1.2, h: 1.4, fontSize: 12, bold: true, color: P.textMute, align: "right", valign: "middle", fontFace: "Calibri", margin: 0 });
  s.addText("BEHAVIOR\nDECREASES", { x: gridX - 1.4, y: gridY + cellH + 0.4, w: 1.2, h: 1.4, fontSize: 12, bold: true, color: P.textMute, align: "right", valign: "middle", fontFace: "Calibri", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: gridX, y: gridY, w: cellW, h: cellH, fill: { color: P.good }, line: { color: P.good, width: 2 } });
  s.addText("+R", { x: gridX, y: gridY + 0.1, w: cellW, h: 0.7, fontSize: 32, bold: true, color: P.cream, align: "center", fontFace: "Georgia", margin: 0 });
  s.addText("Treat after sit  →  more sit", { x: gridX, y: gridY + 0.85, w: cellW, h: 0.5, fontSize: 14, color: P.cream, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("Dopamine · learning · relationship", { x: gridX, y: gridY + 1.35, w: cellW, h: 0.5, fontSize: 12, italic: true, color: P.sand, align: "center", fontFace: "Calibri", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: gridX + cellW + 0.2, y: gridY, w: cellW, h: cellH, fill: { color: P.sand }, line: { color: "D5CDB5" } });
  s.addText("-R", { x: gridX + cellW + 0.2, y: gridY + 0.1, w: cellW, h: 0.7, fontSize: 32, bold: true, color: P.textMute, align: "center", fontFace: "Georgia", margin: 0 });
  s.addText("Stop ear pinch when dog retrieves", { x: gridX + cellW + 0.2, y: gridY + 0.85, w: cellW, h: 0.5, fontSize: 13, color: P.text, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("Cruel · unnecessary", { x: gridX + cellW + 0.2, y: gridY + 1.35, w: cellW, h: 0.5, fontSize: 12, italic: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: gridX, y: gridY + cellH + 0.2, w: cellW, h: cellH, fill: { color: P.sand }, line: { color: "D5CDB5" } });
  s.addText("+P", { x: gridX, y: gridY + cellH + 0.3, w: cellW, h: 0.7, fontSize: 32, bold: true, color: P.warn, align: "center", fontFace: "Georgia", margin: 0 });
  s.addText("Leash pop for pulling", { x: gridX, y: gridY + cellH + 1.05, w: cellW, h: 0.5, fontSize: 13, color: P.text, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("Cortisol · damages relationship", { x: gridX, y: gridY + cellH + 1.55, w: cellW, h: 0.5, fontSize: 12, italic: true, color: P.warn, align: "center", fontFace: "Calibri", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: gridX + cellW + 0.2, y: gridY + cellH + 0.2, w: cellW, h: cellH, fill: { color: P.sand }, line: { color: "D5CDB5" } });
  s.addText("-P", { x: gridX + cellW + 0.2, y: gridY + cellH + 0.3, w: cellW, h: 0.7, fontSize: 32, bold: true, color: P.textMute, align: "center", fontFace: "Georgia", margin: 0 });
  s.addText("Turn away when puppy jumps", { x: gridX + cellW + 0.2, y: gridY + cellH + 1.05, w: cellW, h: 0.5, fontSize: 13, color: P.text, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("Useful adjunct · not primary", { x: gridX + cellW + 0.2, y: gridY + cellH + 1.55, w: cellW, h: 0.5, fontSize: 12, italic: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  addFooter(s, 8);
}

// SLIDE 9 — PREDATORY MOTOR PATTERN
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "What makes a Border Collie a Border Collie", "Coppinger & Coppinger · the predatory motor pattern, modified");
  const seqY = 2.4;
  const stages = [
    { name: "ORIENT", on: true },
    { name: "EYE", on: true, big: true },
    { name: "STALK", on: true, big: true },
    { name: "CHASE", on: true, big: true },
    { name: "GRAB", on: false },
    { name: "KILL", on: false },
    { name: "CONSUME", on: false }
  ];
  const itemW = 1.5, gap = 0.3;
  const totalW = stages.length * itemW + (stages.length - 1) * gap;
  const startX = (SLIDE_W - totalW) / 2;
  stages.forEach((st, i) => {
    const x = startX + i * (itemW + gap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: seqY, w: itemW, h: 1.1, fill: { color: st.on ? P.deep : "C9C2B0" }, line: { color: st.on ? P.deep : "C9C2B0" } });
    s.addText(st.name, { x, y: seqY, w: itemW, h: 0.6, fontSize: st.big ? 16 : 13, bold: true, color: st.on ? P.cream : P.textMute, align: "center", valign: "middle", fontFace: "Calibri", margin: 0 });
    s.addText(st.on ? (st.big ? "AMPLIFIED" : "kept") : "INHIBITED", { x, y: seqY + 0.6, w: itemW, h: 0.5, fontSize: 9, color: st.on ? P.sand : P.textMute, align: "center", italic: true, fontFace: "Calibri", margin: 0 });
    if (i < stages.length - 1) {
      s.addShape(pres.shapes.LINE, { x: x + itemW, y: seqY + 0.55, w: gap, h: 0, line: { color: P.textMute, width: 1 } });
    }
  });
  s.addText("The neural reward sits in the eye-stalk-chase. Not the kill.", { x: 1.0, y: 4.1, w: SLIDE_W - 2.0, h: 0.5, fontSize: 20, bold: true, color: P.accent, align: "center", fontFace: "Georgia", margin: 0 });
  s.addText("Every staring, freezing, slow-stalking moment is its own dopamine pulse. Bucco's brain runs this circuit constantly. Give him legitimate outlets (disc, agility, treibball, nosework) or it invents illegitimate ones.", { x: 2.0, y: 4.8, w: SLIDE_W - 4.0, h: 1.2, fontSize: 14, italic: true, color: P.text, align: "center", fontFace: "Calibri", margin: 0 });
  addFooter(s, 9);
}

// SLIDE 10 — THE NEVER LIST
{
  const s = pres.addSlide();
  s.background = { color: P.warn };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.2, h: SLIDE_H, fill: { color: "7A1F14" }, line: { color: "7A1F14" } });
  s.addText("THE NEVER LIST", { x: 0.6, y: 0.4, w: SLIDE_W - 1.2, h: 0.7, fontSize: 30, bold: true, color: "FFFFFF", fontFace: "Georgia", margin: 0 });
  s.addText("Things that, once done, are hard or impossible to undo", { x: 0.6, y: 1.0, w: SLIDE_W - 1.2, h: 0.4, fontSize: 14, italic: true, color: "FFE5DC", fontFace: "Calibri", margin: 0 });
  const items = [
    { title: "Laser pointers", body: "Not once. The BC brain is the most vulnerable canine brain to light fixation. Single sessions have produced lifetime compulsions." },
    { title: "Dog parks", body: "BCs get bullied or develop herding/control problems toward other dogs. Most BC reactivity stories start at a dog park." },
    { title: "Adult food during growth", body: "Wrong calcium/phosphorus profile for medium-breed bones. Orthopedic problems at year 3." },
    { title: "Calcium / vitamin D / vitamin A supplements", body: "All three cause harm in excess. The food has what he needs; more is not better." },
    { title: "Cooked bones", body: "They splinter. Perforate the esophagus, stomach, or intestine." },
    { title: "Sudden food changes", body: "Always transition over 7–10 days. The microbiome needs time." }
  ];
  const startY = 1.7, rowH = 0.78;
  items.forEach((it, i) => {
    const y = startY + i * rowH;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: y, w: SLIDE_W - 1.6, h: rowH - 0.1, fill: { color: "FFFFFF" }, line: { color: "FFFFFF" } });
    s.addText(it.title, { x: 1.0, y: y + 0.05, w: 4.5, h: rowH - 0.2, fontSize: 14, bold: true, color: P.warn, valign: "middle", fontFace: "Calibri", margin: 0 });
    s.addText(it.body, { x: 5.5, y: y + 0.05, w: SLIDE_W - 6.5, h: rowH - 0.2, fontSize: 12, color: P.text, valign: "middle", fontFace: "Calibri", margin: 0 });
  });
  addFooter(s, 10);
}

// SLIDE 11 — ADOLESCENCE
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "The 8-month trough is real", "Asher et al., Royal Society Biology Letters 2020");
  const gx = 1.0, gy = 2.2, gw = 6.5, gh = 4.0;
  s.addShape(pres.shapes.RECTANGLE, { x: gx, y: gy, w: gw, h: gh, fill: { color: "FFFFFF" }, line: { color: "D5CDB5" } });
  s.addText("Trainability (relative)", { x: gx, y: gy + 0.1, w: gw, h: 0.4, fontSize: 12, italic: true, color: P.textMute, align: "center", margin: 0 });
  const data = [
    { age: "5 mo", val: 0.85 }, { age: "6 mo", val: 0.80 }, { age: "7 mo", val: 0.60 },
    { age: "8 mo", val: 0.45 }, { age: "9 mo", val: 0.55 }, { age: "12 mo", val: 0.80 },
  ];
  const dataAreaX = gx + 0.6, dataAreaY = gy + 0.7, dataAreaW = gw - 1.0, dataAreaH = gh - 1.5;
  data.forEach((d, i) => {
    const bw = dataAreaW / data.length;
    const x = dataAreaX + i * bw + 0.05;
    const h = d.val * dataAreaH;
    const y = dataAreaY + dataAreaH - h;
    const col = (i === 3) ? P.warn : P.deep;
    s.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: bw - 0.1, h: h, fill: { color: col }, line: { color: col } });
    s.addText(d.age, { x: x, y: dataAreaY + dataAreaH + 0.05, w: bw - 0.1, h: 0.4, fontSize: 11, color: P.textMute, align: "center", margin: 0 });
  });
  const peakDipX = dataAreaX + (dataAreaW / data.length) * 3 + 0.05;
  s.addText("PEAK DIP\n(adolescent)", { x: peakDipX - 0.4, y: dataAreaY + 0.05, w: (dataAreaW / data.length) + 0.7, h: 0.6, fontSize: 10, italic: true, bold: true, color: P.warn, align: "center", fontFace: "Calibri", margin: 0 });
  const rx = 7.9, rw = 4.5;
  s.addText("What this looks like", { x: rx, y: 2.2, w: rw, h: 0.4, fontSize: 20, bold: true, color: P.text, fontFace: "Georgia", margin: 0 });
  s.addText([
    { text: "Trainability dips with YOU, not strangers", options: { bullet: true, breakLine: true, bold: true } },
    { text: "Socially specific — he's testing the relationship", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "Hormones + asymmetric brain development", options: { bullet: true, breakLine: true, bold: true } },
    { text: "Amygdala fully online; prefrontal still wiring", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "Second fear period may overlap", options: { bullet: true, breakLine: true, bold: true } },
    { text: "Maintain, don't expand", options: { bullet: true, breakLine: true, bold: true } },
    { text: "Hold ground on what works. New skills wait.", options: { bullet: true, indentLevel: 1 } }
  ], { x: rx, y: 2.75, w: rw, h: 3.8, fontSize: 12, color: P.text, fontFace: "Calibri", paraSpaceAfter: 4, valign: "top" });
  addFooter(s, 11);
}

// SLIDE 12 — THE 30-DAY PLAN
{
  const s = pres.addSlide();
  s.background = { color: P.deep };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: SLIDE_W, h: 0.15, fill: { color: P.accent }, line: { color: P.accent } });
  s.addText("The 30-day plan", { x: 0.8, y: 0.5, w: SLIDE_W - 1.6, h: 0.7, fontSize: 36, bold: true, color: P.cream, fontFace: "Georgia", margin: 0 });
  s.addText("May 11 — June 11 · Three skills, deep work", { x: 0.8, y: 1.2, w: SLIDE_W - 1.6, h: 0.5, fontSize: 16, italic: true, color: P.sand, fontFace: "Calibri", margin: 0 });
  const items = [
    { num: "1", title: "Crate Games", body: "The crate is the best place in the world. Door opens = stay. Release cue = freedom. The foundation of every cued behavior." },
    { num: "2", title: "Reinforcement Zone", body: "Pick a side and commit. Food delivered into the zone, not from your hand to his face. Foundation of loose-leash, heel, recall." },
    { num: "3", title: "Restrained Recall", body: "Nina holds. Scott runs and calls. Nina releases. Massive party at the finish. The emotional engine that powers recall later." }
  ];
  const sx = 0.8, sy = 2.2, cardH = 1.3;
  items.forEach((it, i) => {
    const y = sy + i * (cardH + 0.15);
    s.addShape(pres.shapes.RECTANGLE, { x: sx, y: y, w: SLIDE_W - 1.6, h: cardH, fill: { color: "FFFFFF" }, line: { color: "FFFFFF" } });
    s.addShape(pres.shapes.OVAL, { x: sx + 0.25, y: y + 0.23, w: 0.85, h: 0.85, fill: { color: P.accent }, line: { color: P.accent } });
    s.addText(it.num, { x: sx + 0.25, y: y + 0.23, w: 0.85, h: 0.85, fontSize: 38, bold: true, color: P.cream, align: "center", valign: "middle", fontFace: "Georgia", margin: 0 });
    s.addText(it.title, { x: sx + 1.35, y: y + 0.15, w: SLIDE_W - 3.0, h: 0.5, fontSize: 22, bold: true, color: P.deep, fontFace: "Georgia", margin: 0 });
    s.addText(it.body, { x: sx + 1.35, y: y + 0.65, w: SLIDE_W - 3.0, h: 0.65, fontSize: 13, color: P.text, fontFace: "Calibri", margin: 0 });
  });
  s.addText("Plus: name recognition · It's Yer Choice · cooperative-care pairing for the June 11 vet visit.", { x: 0.8, y: 6.65, w: SLIDE_W - 1.6, h: 0.3, fontSize: 12, italic: true, color: P.sand, align: "center", fontFace: "Calibri", margin: 0 });
}

// SLIDE 13 — WHEN TO GET HELP
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "When to get professional help", "Early intervention works. Late intervention is hard.");
  const rows = [
    { problem: "Medical / sudden behavior change", who: "VETERINARIAN", color: P.deep },
    { problem: "Mild, recent behavioral issue", who: "KPA-CTP or CPDT-KA trainer (+R only)", color: P.accent2 },
    { problem: "Resource guarding, reactivity", who: "Certified trainer NOW — don't wait", color: P.accent },
    { problem: "Compulsion (light, shadow, tail)", who: "VETERINARY BEHAVIORIST (DACVB) immediately", color: P.warn },
    { problem: "Bite incident with intent", who: "VETERINARY BEHAVIORIST + document everything", color: P.warn },
    { problem: "Severe noise phobia", who: "Vet for meds + DACVB or trainer for desensitization", color: P.accent }
  ];
  const startY = 2.0, rowH = 0.65;
  rows.forEach((r, i) => {
    const y = startY + i * (rowH + 0.1);
    s.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: y, w: SLIDE_W - 2.0, h: rowH, fill: { color: "FFFFFF" }, line: { color: "E0DACD" } });
    s.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: y, w: 0.12, h: rowH, fill: { color: r.color }, line: { color: r.color } });
    s.addText(r.problem, { x: 1.3, y: y, w: 5.5, h: rowH, fontSize: 14, bold: true, color: P.text, valign: "middle", fontFace: "Calibri", margin: 0 });
    s.addText(r.who, { x: 7.0, y: y, w: SLIDE_W - 8.0, h: rowH, fontSize: 13, color: r.color, valign: "middle", bold: true, fontFace: "Calibri", margin: 0 });
  });
  s.addText("Cheap on the front end. Expensive on the back end. The math is unambiguous.", { x: 1.0, y: 6.4, w: SLIDE_W - 2.0, h: 0.5, fontSize: 14, italic: true, color: P.textMute, align: "center", fontFace: "Calibri", margin: 0 });
  addFooter(s, 13);
}

// SLIDE 14 — CHASER
{
  const s = pres.addSlide();
  s.background = { color: P.cream };
  addTitle(s, "What Bucco's capable of", "Chaser, the Border Collie who knew 1,022 nouns");
  s.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 2.2, w: 6.0, h: 4.4, fill: { color: P.deep }, line: { color: P.deep } });
  s.addText("1,022", { x: 1.0, y: 2.4, w: 6.0, h: 1.8, fontSize: 84, bold: true, color: P.cream, align: "center", valign: "middle", fontFace: "Georgia", margin: 0 });
  s.addText("proper nouns learned", { x: 1.0, y: 4.3, w: 6.0, h: 0.4, fontSize: 18, italic: true, color: P.sand, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("Pilley & Reid, Behavioural Processes 2011", { x: 1.0, y: 4.75, w: 6.0, h: 0.35, fontSize: 12, color: P.sand, align: "center", italic: true, fontFace: "Calibri", margin: 0 });
  s.addText("Training stopped at 1,022 because Pilley ran out of time. Not because Chaser did.", { x: 1.2, y: 5.3, w: 5.6, h: 1.0, fontSize: 13, color: P.cream, align: "center", italic: true, fontFace: "Calibri", margin: 0 });
  const rx = 7.5, rw = 5.0;
  s.addText("What this means for Bucco", { x: rx, y: 2.2, w: rw, h: 0.5, fontSize: 22, bold: true, color: P.text, fontFace: "Georgia", margin: 0 });
  s.addText([
    { text: "The ceiling on what he can learn isn't brain limit — it's your teaching-time limit.", options: { bullet: true, breakLine: true } },
    { text: "Words are real cues. He's tracking them whether you mean to teach them or not.", options: { bullet: true, breakLine: true } },
    { text: "Trick training, named objects, scent work — these aren't extras. They're his sustainable enrichment.", options: { bullet: true, breakLine: true } },
    { text: "20 min of mental work ≈ 2 hr of walking, for tiredness and behavior.", options: { bullet: true } }
  ], { x: rx, y: 2.85, w: rw, h: 3.8, fontSize: 13, color: P.text, fontFace: "Calibri", paraSpaceAfter: 6, valign: "top" });
  addFooter(s, 14);
}

// SLIDE 15 — CLOSING
{
  const s = pres.addSlide();
  s.background = { color: P.deep };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: SLIDE_W, h: 0.15, fill: { color: P.accent }, line: { color: P.accent } });
  s.addText("The one sentence", { x: 0.8, y: 1.5, w: SLIDE_W - 1.6, h: 0.6, fontSize: 18, italic: true, color: P.sand, fontFace: "Calibri", align: "center", margin: 0 });
  s.addText([
    { text: "Be more interesting than the environment.", options: { breakLine: true, color: "FFFFFF", bold: true } },
    { text: "Reinforce the behavior you want.", options: { breakLine: true, color: "FFFFFF", bold: true } },
    { text: "Manage the environment to prevent rehearsal of what you don't.", options: { breakLine: true, color: "FFFFFF", bold: true } },
    { text: "Remember that what you grow is what you get.", options: { color: "FFFFFF", bold: true } }
  ], { x: 1.0, y: 2.4, w: SLIDE_W - 2.0, h: 3.0, fontSize: 28, fontFace: "Georgia", align: "center", paraSpaceAfter: 12 });
  s.addShape(pres.shapes.RECTANGLE, { x: SLIDE_W / 2 - 1.0, y: 5.8, w: 2.0, h: 0.04, fill: { color: P.accent }, line: { color: P.accent } });
  s.addText("Everything else is detail.", { x: 0.8, y: 6.0, w: SLIDE_W - 1.6, h: 0.5, fontSize: 16, italic: true, color: P.sand, fontFace: "Georgia", align: "center", margin: 0 });
  s.addText("Bucco · first year · spring 2026 — winter 2027", { x: 0.8, y: 7.0, w: SLIDE_W - 1.6, h: 0.3, fontSize: 11, color: P.sand, fontFace: "Calibri", align: "center", margin: 0 });
}

pres.writeFile({ fileName: "bucco-highlights.pptx" })
  .then(name => console.log("WROTE", name))
  .catch(err => console.error("ERR", err));

# PDF Textbook

The 62-page printable scientific deep-dive (`bucco-first-year-deep-dive.pdf`) is compiled from the 7 chapters in [`../docs/`](../docs/).

## To rebuild the PDF

```bash
# Concatenate the chapters into a single master.md
cat > master.md << 'EOF'
---
title: "Bucco — A Scientific Field Guide to His First Year"
author: "Compiled for Scott Smathers"
date: "May 2026"
---
EOF

for f in ../docs/0[1-7]-*.md; do
  echo "" >> master.md
  echo '\newpage' >> master.md
  echo "" >> master.md
  cat "$f" >> master.md
done

# Render with pandoc + xelatex
pandoc master.md -o bucco-first-year-deep-dive.pdf \
  --pdf-engine=xelatex \
  --toc --toc-depth=2 \
  -V geometry:margin=1in \
  -V mainfont="Lato" \
  -V monofont="DejaVu Sans Mono" \
  -V fontsize=11pt \
  -V colorlinks=true \
  --highlight-style=tango
```

Requires: `pandoc`, `xelatex` (TeX Live), and Lato/DejaVu fonts.

## To add the prebuilt PDF to the repo

The PDF is a binary file. To get it into the repo:

**Web UI (easiest):**
1. Visit https://github.com/smatty-ice/bucco-first-year/upload/main/pdf
2. Drag `bucco-first-year-deep-dive.pdf` from your computer
3. Commit

**Or rebuild it locally** using the commands above.

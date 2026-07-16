
# The Product Dossier

A premium, evidence-first static publication. Edition 001 investigates Delta Exchange.

## Fastest upload from a phone

1. Open the `Product-Dossier` repository on GitHub.
2. Choose **Add file → Upload files**.
3. Upload the **contents inside this folder**, not the outer ZIP itself.
4. Commit the upload to the `main` branch.
5. In Vercel, choose **Add New → Project** and import `Product-Dossier`.
6. Framework preset: **Other**.
7. Build command: leave empty.
8. Output directory: leave empty.
9. Deploy.

The homepage is `index.html`.

## Main files

- `index.html` — publication homepage
- `edition.html` — Delta Exchange edition
- `evidence.html` — searchable evidence library
- `methodology.html` — research method
- `about.html` — publication framing and contact placeholder
- `assets/css/styles.css` — design tokens and all styles
- `data/evidence.js` — evidence cards and source links
- `downloads/` — report, deck, spreadsheet and supporting files
- `vercel.json` — static Vercel configuration

## Where to make UI changes

Open `assets/css/styles.css`.

The first block contains CSS variables:

- `--paper`
- `--ink`
- `--accent`
- `--teal`
- `--radius-lg`
- `--content`
- `--serif`
- `--sans`

Changing these updates the visual system without rewriting the pages.

## Where to change evidence

Open `data/evidence.js`.

Each evidence record includes:

- claim
- summary
- confidence
- status
- source
- URL
- limitation or counter-evidence
- decision implication

## Before publishing publicly

- Replace the contact placeholder in `about.html`.
- Read every claim and source link.
- Confirm the downloadable files open.
- Review the site on mobile.
- Add a custom domain only after the Vercel preview looks right.

## Important

This is independent public-source research. It is not affiliated with Delta Exchange and is not financial, legal, tax or investment advice.

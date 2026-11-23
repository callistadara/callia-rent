# Callia Rents

Landing page for Callia Rents, a kebaya and dress rental business in Jakarta, Indonesia.

## How to view it

Double-click `index.html` to open it in your browser.

## How to update it

Everything you normally change is in **`dresses.js`**:

- `WHATSAPP_NUMBER`: your WhatsApp number (country code first, digits only, e.g. `628120000000`)
- `DRESSES`: the catalog. Copy a `{ ... }` block to add a dress, delete one to remove it.

### Adding photos

1. Put the photo in the `images` folder (e.g. `images/kebaya-kartini.jpg`).
2. In `dresses.js`, set that dress's `image` to `"images/kebaya-kartini.jpg"`.

Portrait photos (3:4, e.g. 900×1200) look best.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and text |
| `style.css` | Colors, fonts, layout |
| `dresses.js` | WhatsApp number + dress catalog (edit this one) |
| `script.js` | Builds the catalog and WhatsApp links |

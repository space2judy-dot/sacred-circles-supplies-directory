# Circle Supply — Build Prompt (Week 2, course format)

**High-level description:**
Build me a directory web app called **Circle Supply** — a beautifully curated directory of shops and makers selling women's circle supplies: altar goods, oracle decks, talking pieces, floor seating, ceremony textiles, ceremonial cacao, and sacred pantry items. The vibe is warm, feminine, and sacred — rose gold, soft neutrals, elegant serif headings — not corporate. The whole point is curation: a trusted guide written in one woman's voice, not a crowded marketplace.

**User does not need to log in or sign up.**

**Full user flow (step by step):**
1. User lands on the home page and sees: a headline, a search bar, 7 category tiles, a "Featured this moon" strip of 3–4 highlighted shops, and an email signup field ("Get new finds each new moon").
2. User either (a) taps a category tile, or (b) types what they're looking for into the search bar (e.g. "rose water" — search matches shop names, taglines, tags, and signature products).
3. User arrives on the browse page: a grid of shop cards, with filters across the top — Category, Price feel ($ / $$ / $$$), Women-owned toggle, Indigenous-owned toggle, Ships-from region. Filters update the grid instantly, no "apply" button.
4. Each shop card shows: photo, shop name, tagline, category chip, price feel, badges (Women-owned / Indigenous-owned), ships-from region.
5. User taps a card and lands on the shop's entry page showing: large photo, shop name + badges, a "Why we love it" curator note, quick facts (price feel · ships from · ships to · shop type), a signature product suggestion, a big "Visit shop →" button (opens the shop's site in a new tab, using the affiliate link when one exists), and a "More like this" row of 3 related shops.
6. User clicks "Visit shop →" — that's the success moment.
7. A small disclosure line appears in the site footer: "Some links are affiliate links — if you buy, the shop pays us a small thank-you at no cost to you."

**Data structure — each shop has the following data:**
- name
- tagline (one line, ~8 words)
- category (one of: Altar Goods · Oracle & Affirmation Decks · Talking Pieces · Floor Seating & Cushions · Ceremony Textiles & Blankets · Ceremonial Cacao & Sacred Pantry · Circle Extras)
- extra_categories (up to 2 more, optional)
- why_we_love_it (2–3 sentences, curator's voice)
- photo
- url (shop website)
- affiliate_link (optional — used for the Visit Shop button when present)
- has_affiliate (yes / no / unknown)
- price_feel ($ / $$ / $$$)
- women_owned (yes / no / unknown)
- indigenous_owned (yes / no / unknown — only "yes" if the shop self-identifies)
- ships_from (North America / Europe / UK / Australia-NZ)
- ships_to (worldwide / region-only)
- tags (3–6 actual products or materials, e.g. "rose water, ritual oils, flower essences" — powers search)
- signature_product (name + rough price)
- shop_type (Etsy / own website / wholesale-available)
- featured (yes / no — powers the "Featured this moon" strip)
- date_added

**Please set up the app with 10 example shops (spread across the categories, with at least 2 in Ceremonial Cacao & Sacred Pantry), then I will add more later.** Make adding/editing entries easy for a non-technical person — a simple data file I can edit, not code.

# Circle Supplies & Altar Shop Directory — Build Spec

**What it is:** A curated directory of shops and makers selling women's circle supplies — altar goods, oracle decks, talking pieces, floor seating, ceremony textiles.

**One rule that keeps this simple:** Every entry is a **shop/maker**, not an individual product. Products sell out and change price constantly; shops stay stable. Each shop entry highlights one "signature product" so the page still feels shoppable. This means your 30–50 entries stay accurate for months with almost no maintenance.

---

## USER FLOW (4 screens, max 3 clicks to any shop)

### Screen 1 — Landing Page
The promise + instant ways in.

What's on it, top to bottom:
1. **Headline** — e.g. "Everything you need to hold a beautiful circle — curated in one place."
2. **Subline** — "Handpicked shops & makers for altar goods, oracle decks, talking pieces & more. No more Etsy rabbit holes."
3. **Search bar** — free-text search for the exact thing someone wants (e.g. "rose water", "palo santo", "linen cloth"). It searches shop names + taglines + tags + signature products — which is why every entry's `tags` field must list the actual products the shop sells, not just vibes.
4. **8 category tiles** (big, visual, tappable):
   - Altar Goods (cloths, candles, holders)
   - Oracle & Affirmation Decks
   - Talking Pieces
   - Floor Seating & Cushions
   - Ceremony Textiles & Blankets
   - Ceremonial Cacao & Sacred Pantry (cacao, rose water, teas, herbal smoke blends, oils)
   - Sacred Sound & Instruments (ceremony drums, rattles, singing bowls, gongs, chimes)
   - Circle Extras (bells, journals, soaps, finishing touches)
5. **"Featured this moon" strip** — 3–4 featured shop cards (gives the page life, gives you a reason to update monthly)
6. **Email capture** — "Get new finds each new moon" (your list-builder!)

User action: taps a category tile, searches, or taps a featured card.

### Screen 2 — Browse / Results Page
The grid. One category pre-selected (or all, if they searched).

What's on it:
1. **Category title** + 1-line description
2. **Filter bar** (keep to exactly these 4):
   - Category (switch without going back)
   - Price feel: $ / $$ / $$$
   - Badges (toggles): Women-owned · Indigenous-owned · Indigenous-made
   - Ships from: North America / Europe / UK / Australia-NZ / Worldwide

**Terminology note:** use **"Indigenous-owned"** for the badge — it means the business is majority owned and operated by Indigenous people (the standard designation, e.g. Indigenous Tourism BC requires ≥51% ownership). "Indigenous-made" refers to the products' authenticity instead (made by Indigenous artists, not just "Native-inspired"). For a shop directory, *owned* is the right word. Only badge shops that publicly self-identify as Indigenous-owned on their own site — never guess. In the US, falsely marketing goods as Native American–made is actually illegal (Indian Arts and Crafts Act), so this "they said it themselves" rule protects you and honors the makers.
3. **Grid of shop cards.** Each card shows: photo, shop name, 1-line tagline, category chip, price feel, badges (♀ women-owned · Indigenous-owned), ships-from flag.

User action: taps a card → entry page. (Filters update the grid instantly — no "apply" button.)

### Screen 3 — Entry Page (one shop)
The decision page. Everything needed to click through confidently.

What's on it, top to bottom:
1. **Photo** (big, warm)
2. **Shop name** + badges + category chips
3. **"Why we love it"** — 2–3 sentences in YOUR voice. This is the entire value of the directory — the curation. Never skip it.
4. **Quick facts row:** price feel · ships from · ships to · Etsy/own website/wholesale
5. **Signature product** — "Start with: their hand-dyed moon-phase altar cloth (~$45)"
6. **Big button:** "Visit shop →" (opens their site in a new tab)
7. **"More like this"** — 3 cards from the same category (keeps people browsing)

User action: clicks Visit Shop (success!) or taps a related card.

### Screen 4 — (optional, later) About/Submit Page
"Suggest a shop" form + who you are + why you curate this. Skip for week-one launch; add when people start DMing you suggestions.

**Flow summary:**
Landing → (tap category) → Browse grid → (tap card) → Entry page → (click) → Shop's website
That's 3 taps, well under 2 minutes. ✅

---

## ENTRY DATA — what every shop entry needs

### Must-have (launch can't happen without these 10)
| Field | Type | Example |
|---|---|---|
| `name` | text | "Luna Thread Studio" |
| `tagline` | text, ~8 words | "Hand-dyed altar cloths from a one-woman studio" |
| `category` | pick ONE main | Ceremony Textiles |
| `why_we_love_it` | 2–3 sentences, your voice | "Her moon-phase cloths are the ones I use in my own circles…" |
| `photo` | 1 image (square works best) | product or shop photo |
| `url` | link | the shop link (Etsy or own site) |
| `price_feel` | $ / $$ / $$$ | $$ |
| `women_owned` | yes / no / unknown | yes |
| `indigenous_owned` | yes / no / unknown (only "yes" if the shop says so itself) | no |
| `indigenous_made` | yes / no / unknown — the *products* are made by Indigenous artisans (per the shop's own claim); independent of who owns the shop | yes |
| `ships_from` | pick one region | Europe |
| `ships_to` | pick: region-only / worldwide | Worldwide |
| `tags` | 3–6 actual products/materials, powers the search box | "rose water, flower essences, ritual oils" |

### Nice-to-have (add as you go)
| Field | Type | Example |
|---|---|---|
| `signature_product` | text + rough price | "Moon-phase altar cloth, ~$45" |
| `extra_categories` | up to 2 more | Altar Goods |
| `shop_type` | Etsy / own website / wholesale-available | Etsy |
| `featured` | yes/no | yes (powers the landing strip) |
| `date_added` | date | 2026-10-01 |
| `instagram` | handle | @lunathreadstudio |

### Monetization fields (affiliate links)
| Field | Type | Example |
|---|---|---|
| `has_affiliate` | yes / no / unknown | yes |
| `affiliate_link` | link (used as the "Visit shop →" URL when present; otherwise use plain `url`) | your tracked link |
| `affiliate_notes` | private note to self | "10% via ShareASale, applied 2026-10-01" |

How this works: the "Visit shop →" button always uses `affiliate_link` if you have one, plain `url` if not. Visitors see no difference; you earn a commission on sales you send. Where to find programs:
- **Ceremonial cacao brands** are the best starters — several (e.g. Ora Cacao, Soul Lift Cacao, Firefly Chocolate) run their own ambassador/affiliate programs at ~10–20%. Check each brand's site footer for "Affiliate" or "Ambassador."
- **Etsy** has an affiliate program via Awin — one approval covers *every* Etsy shop in your directory.
- **Independent shops**: look for "Affiliates" in the site footer, or check networks (ShareASale, Awin, GoAffPro/UpPromote on Shopify stores). No program? Email them — small makers often say yes to a curator with an audience.
- **Required:** one visible disclosure line on the site, e.g. "Some links are affiliate links — if you buy, the shop pays us a small thank-you at no cost to you." (FTC requires this, and it builds trust anyway.) Mark `has_affiliate` honestly so the disclosure stays accurate.

### Deliberately left OUT (resist the urge)
- Exact prices (go stale in weeks)
- Star ratings/reviews (you're a curator, not Yelp — "why we love it" IS the review)
- Stock status, shipping costs, coupon codes (maintenance traps)

---

## Seeding the first 30–50 entries
1. Ask Claude for 10–12 candidate shops per category (name + URL + what they sell).
2. YOU visit each link for 60 seconds: still active? feels aligned? → keep or cut.
3. Write the `why_we_love_it` yourself for every keeper — this is the un-copyable part.
4. Launch at 30 good entries (5 per category). 30 curated beats 50 padded.

## Content-flywheel bonus
Every entry is a reel: "5 women-owned shops for your altar" = screen-record your own directory. The app feeds the Instagram, the Instagram feeds the app.

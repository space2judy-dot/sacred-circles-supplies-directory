/* Sacred Circles Supply Directory — app logic
   Views: #/ (home) · #/browse?... · #/shop/<slug>
   Judy: you never need to edit this file — your shops live in shops-data.js */

const app = document.getElementById("app");

/* hand-drawn line icons, one consistent 1.5px stroke */
const ic = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const ICONS = {
  "Altar Goods": ic('<path d="M10 9h4v9a2 2 0 0 1-2 2 2 2 0 0 1-2-2z"/><path d="M12 9V7"/><path d="M12 3c-1.2 1.3-1.2 2.4 0 3.4 1.2-1 1.2-2.1 0-3.4z"/><path d="M6 20h12"/>'),
  "Oracle & Affirmation Decks": ic('<rect x="7" y="4" width="10" height="15" rx="1.6"/><path d="M12 8.3c1.8-1.8 4.3.4 0 3.2-4.3-2.8-1.8-5 0-3.2z"/><path d="M5.2 6.5 4 7l1.8 12.1 1.4-.3"/>'),
  "Talking Pieces": ic('<path d="M19 4c-6 .5-10 4-12.5 9.5L5 19l1-.3C11 17 16 12 19 4z"/><path d="M8.5 11.5 12 15"/><path d="M11 8.8l2.8 2.8"/>'),
  "Floor Seating & Cushions": ic('<path d="M4 14c0-1.6 3.6-2.8 8-2.8s8 1.2 8 2.8-3.6 2.8-8 2.8-8-1.2-8-2.8z"/><path d="M4 14v2.4c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8V14"/><path d="M12 11.2V8.5"/><path d="M10.4 6.8c.6-1 2.6-1 3.2 0 .6 1-.4 2-1.6 1.7-1.2.3-2.2-.7-1.6-1.7z"/>'),
  "Ceremony Textiles & Blankets": ic('<path d="M5 5h14v14H5z"/><path d="M5 9c2.3 0 2.3 1.6 4.6 1.6S11.9 9 14.2 9s2.4 1.6 4.8 1.6"/><path d="M5 14c2.3 0 2.3 1.6 4.6 1.6s2.3-1.6 4.6-1.6 2.4 1.6 4.8 1.6"/>'),
  "Ceremonial Cacao & Sacred Pantry": ic('<path d="M6 10h10v5a4.5 4.5 0 0 1-4.5 4.5h-1A4.5 4.5 0 0 1 6 15z"/><path d="M16 11.5h1.4a2.1 2.1 0 0 1 0 4.2H16"/><path d="M9 7.2C9 6 10 5.6 10 4.6M12.8 7.2c0-1.2 1-1.6 1-2.6"/>'),
  "Sacred Sound & Instruments": ic('<ellipse cx="12" cy="8" rx="7" ry="2.6"/><path d="M5 8v7c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V8"/><path d="M5 12.5 12 10.6l7 1.9"/><path d="M8.5 5.2 6.8 3.4M15.5 5.2l1.7-1.8"/>'),
  "Circle Extras": ic('<path d="M12 4a5.5 5.5 0 0 1 5.5 5.5c0 3.2 1.1 4.6 1.9 5.5H4.6c.8-.9 1.9-2.3 1.9-5.5A5.5 5.5 0 0 1 12 4z"/><path d="M10.3 18.5a1.8 1.8 0 0 0 3.4 0"/>'),
};

/* per-category placeholder gradients (used when photo is "") */
const CAT_ART = {
  "Altar Goods":                      ["#c98a92", "#8f5560"],
  "Oracle & Affirmation Decks":       ["#a67fa5", "#6f4f76"],
  "Talking Pieces":                   ["#c2a179", "#8d6b47"],
  "Floor Seating & Cushions":         ["#ca9a7d", "#9a6a50"],
  "Ceremony Textiles & Blankets":     ["#b98f9b", "#875f6e"],
  "Ceremonial Cacao & Sacred Pantry": ["#a4746a", "#6e4238"],
  "Sacred Sound & Instruments":       ["#ad8468", "#7a5438"],
  "Circle Extras":                    ["#c7a06b", "#937146"],
};
const catIcon = (name) => ICONS[name] || ic('<circle cx="12" cy="12" r="7"/>');

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function photoBlock(shop, cls) {
  const [a, b] = CAT_ART[shop.category] || ["#b76e79", "#96505e"];
  const fallback = `<span class="ph-icon">${catIcon(shop.category)}</span>`;
  const bg = `background:linear-gradient(135deg,${a},${b})`;
  if (shop.photo) return `<div class="photo ${cls}" style="${bg}"><img src="${esc(shop.photo)}" alt="${esc(shop.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">${fallback}</div>`;
  return `<div class="photo ${cls}" style="${bg}">${fallback}</div>`;
}

function badges(shop) {
  let out = "";
  if (shop.women_owned === "yes") out += `<span class="chip badge-w">♀ Women-owned</span>`;
  if (shop.indigenous_owned === "yes") out += `<span class="chip badge-i">Indigenous-owned</span>`;
  if (shop.indigenous_made === "yes") out += `<span class="chip badge-im">Indigenous-made</span>`;
  return out;
}

function card(shop, delay) {
  return `
  <a class="card" href="#/shop/${slug(shop.name)}" style="animation-delay:${delay * 60}ms">
    ${photoBlock(shop, "")}
    <div class="body">
      <h3>${esc(shop.name)}</h3>
      <p class="tagline">${esc(shop.tagline)}</p>
      <div class="meta-row">
        <span class="chip">${esc(shop.category.split(" & ")[0])}</span>
        <span class="chip price">${esc(shop.price_feel)}</span>
        ${badges(shop)}
        <span class="chip ships">${esc(shop.ships_from)}</span>
      </div>
    </div>
  </a>`;
}

/* ── search ── */
function matches(shop, q) {
  const hay = [shop.name, shop.tagline, shop.signature_product, shop.category, ...(shop.tags || [])]
    .join(" ").toLowerCase();
  return q.toLowerCase().trim().split(/\s+/).every((word) => hay.includes(word));
}

/* ── views ── */
function homeView() {
  const featured = SHOPS.filter((s) => s.featured);
  app.innerHTML = `
    <section class="hero wrap">
      <h1>Everything you need to hold a <em>beautiful circle</em></h1>
      <p class="sub">Handpicked shops &amp; makers for altar goods, oracle decks, talking pieces, ceremonial cacao &amp; more — lovingly curated, so you never fall down an Etsy rabbit hole again.</p>
      <div class="moon-divider"><span>○</span><span>◔</span><span>●</span><span>◕</span><span>○</span></div>
      <div class="search-shell">
        <input id="search" type="search" placeholder="Search for anything… rose water, oracle deck, cacao" aria-label="Search the directory">
        <button class="go" id="searchGo" aria-label="Search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg></button>
      </div>
    </section>

    <section class="wrap">
      <div class="tiles">
        ${CATEGORIES.map((c, i) => `
          <a class="tile" href="#/browse?cat=${encodeURIComponent(c.name)}" style="animation-delay:${i * 70}ms">
            <span class="icon">${catIcon(c.name)}</span>
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.blurb)}</p>
          </a>`).join("")}
      </div>
    </section>

    <section class="wrap">
      <div class="section-head">
        <h2>Featured this moon <span class="dot">◦</span></h2>
        <a href="#/browse">Browse all shops →</a>
      </div>
      <div class="grid featured">${featured.map((s, i) => card(s, i)).join("")}</div>
    </section>

    <section class="wrap">
      <div class="capture">
        <h3>New finds, each new moon</h3>
        <p>A short, beautiful email when fresh shops join the directory. No noise, ever.</p>
        <form id="emailForm">
          <input type="email" required placeholder="your@email.com" aria-label="Email address">
          <button type="submit">Join the circle</button>
        </form>
        <div class="thanks" id="emailThanks" hidden>🌙 Welcome to the circle — you're on the list.</div>
      </div>
    </section>`;

  const input = document.getElementById("search");
  const go = () => { if (input.value.trim()) location.hash = `#/browse?q=${encodeURIComponent(input.value.trim())}`; };
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  document.getElementById("searchGo").addEventListener("click", go);

  document.getElementById("emailForm").addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const list = JSON.parse(localStorage.getItem("sacred_emails") || "[]");
      list.push({ email: e.target.querySelector("input").value, at: new Date().toISOString() });
      localStorage.setItem("sacred_emails", JSON.stringify(list));
    } catch (_) {}
    e.target.hidden = true;
    document.getElementById("emailThanks").hidden = false;
  });
}

function browseView(params) {
  const state = {
    cat: params.get("cat") || "",
    q: params.get("q") || "",
    price: params.get("price") || "",
    women: params.get("women") === "1",
    indigenous: params.get("indigenous") === "1",
    imade: params.get("imade") === "1",
    from: params.get("from") || "",
  };

  const results = SHOPS.filter((s) => {
    if (state.cat && s.category !== state.cat && !(s.extra_categories || []).includes(state.cat)) return false;
    if (state.price && s.price_feel !== state.price) return false;
    if (state.women && s.women_owned !== "yes") return false;
    if (state.indigenous && s.indigenous_owned !== "yes") return false;
    if (state.imade && s.indigenous_made !== "yes") return false;
    if (state.from && s.ships_from !== state.from) return false;
    if (state.q && !matches(s, state.q)) return false;
    return true;
  });

  const catInfo = CATEGORIES.find((c) => c.name === state.cat);
  const title = state.q ? `Results for “${esc(state.q)}”` : (state.cat || "All shops");
  const sub = catInfo ? catInfo.blurb : "Every shop in the directory, lovingly vetted.";
  const regions = ["North America", "Europe", "UK", "Australia-NZ"];

  app.innerHTML = `
    <div class="wrap">
      <a class="back-link" href="#/">← Home</a>
      <h1 class="page-title">${title}</h1>
      <p class="page-sub">${esc(sub)}</p>

      <div class="filters">
        <select id="f-cat" aria-label="Category">
          <option value="">All categories</option>
          ${CATEGORIES.map((c) => `<option value="${esc(c.name)}" ${c.name === state.cat ? "selected" : ""}>${esc(c.name)}</option>`).join("")}
        </select>
        <select id="f-price" aria-label="Price feel">
          <option value="">Any price</option>
          ${["$", "$$", "$$$"].map((p) => `<option ${p === state.price ? "selected" : ""}>${p}</option>`).join("")}
        </select>
        <label class="toggle ${state.women ? "on" : ""}"><input type="checkbox" id="f-women" ${state.women ? "checked" : ""}> ♀ Women-owned</label>
        <label class="toggle ${state.indigenous ? "on" : ""}"><input type="checkbox" id="f-indig" ${state.indigenous ? "checked" : ""}> Indigenous-owned</label>
        <label class="toggle ${state.imade ? "on" : ""}"><input type="checkbox" id="f-imade" ${state.imade ? "checked" : ""}> Indigenous-made</label>
        <select id="f-from" aria-label="Ships from">
          <option value="">Ships from anywhere</option>
          ${regions.map((r) => `<option ${r === state.from ? "selected" : ""}>${r}</option>`).join("")}
        </select>
        <button class="clear" id="f-clear">clear all</button>
      </div>

      <p class="count-line">${results.length} shop${results.length === 1 ? "" : "s"} found</p>

      ${results.length
        ? `<div class="grid">${results.map((s, i) => card(s, i)).join("")}</div>`
        : `<div class="empty"><div class="big">🌙</div><p>Nothing here yet — try fewer filters,<br>or a different word in the search.</p></div>`}
    </div>`;

  const apply = () => {
    const p = new URLSearchParams();
    const cat = document.getElementById("f-cat").value;
    const price = document.getElementById("f-price").value;
    const from = document.getElementById("f-from").value;
    if (state.q) p.set("q", state.q);
    if (cat) p.set("cat", cat);
    if (price) p.set("price", price);
    if (document.getElementById("f-women").checked) p.set("women", "1");
    if (document.getElementById("f-indig").checked) p.set("indigenous", "1");
    if (document.getElementById("f-imade").checked) p.set("imade", "1");
    if (from) p.set("from", from);
    location.hash = `#/browse?${p.toString()}`;
  };
  ["f-cat", "f-price", "f-women", "f-indig", "f-imade", "f-from"].forEach((id) =>
    document.getElementById(id).addEventListener("change", apply));
  document.getElementById("f-clear").addEventListener("click", () => (location.hash = "#/browse"));
}

function shopView(shopSlug) {
  const shop = SHOPS.find((s) => slug(s.name) === shopSlug);
  if (!shop) { location.hash = "#/browse"; return; }

  const link = shop.affiliate_link || shop.url;
  const related = SHOPS.filter((s) => s !== shop &&
    (s.category === shop.category || (s.extra_categories || []).includes(shop.category))).slice(0, 3);

  app.innerHTML = `
    <div class="wrap">
      <a class="back-link" href="#/browse?cat=${encodeURIComponent(shop.category)}">← Back to ${esc(shop.category)}</a>
      <div class="entry-shell">
      <article class="entry">
        ${photoBlock(shop, "")}
        <div class="inner">
          <h1>${esc(shop.name)}</h1>
          <p class="tagline">${esc(shop.tagline)}</p>
          <div class="meta-row">
            <span class="chip">${esc(shop.category)}</span>
            ${(shop.extra_categories || []).map((c) => `<span class="chip">${esc(c)}</span>`).join("")}
            ${badges(shop)}
          </div>

          <div class="love">
            <h4>Why we love it</h4>
            <p>${esc(shop.why_we_love_it)}</p>
          </div>

          <div class="facts">
            <div class="fact"><div class="label">Price feel</div><div class="value">${esc(shop.price_feel)}</div></div>
            <div class="fact"><div class="label">Ships from</div><div class="value">${esc(shop.ships_from)}</div></div>
            <div class="fact"><div class="label">Ships to</div><div class="value">${esc(shop.ships_to)}</div></div>
            <div class="fact"><div class="label">Shop type</div><div class="value">${esc(shop.shop_type)}</div></div>
          </div>

          ${shop.signature_product ? `<p class="signature"><span class="star">✶</span> Start with: <strong>${esc(shop.signature_product)}</strong></p>` : ""}

          <a class="visit" href="${esc(link)}" target="_blank" rel="noopener sponsored">Visit shop <span class="v-arrow">→</span></a>
        </div>
      </article>
      </div>

      ${related.length ? `
        <div class="section-head"><h2>More like this <span class="dot">◦</span></h2></div>
        <div class="grid">${related.map((s, i) => card(s, i)).join("")}</div>` : ""}
    </div>`;
}

/* ── router ── */
function route() {
  const hash = location.hash || "#/";
  const [path, query] = hash.slice(2).split("?");
  const params = new URLSearchParams(query || "");
  window.scrollTo(0, 0);

  if (path.startsWith("shop/")) shopView(path.slice(5));
  else if (path.startsWith("browse")) browseView(params);
  else homeView();
}

window.addEventListener("hashchange", route);
route();

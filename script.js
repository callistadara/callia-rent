// Builds the catalog and WhatsApp links from the data in dresses.js.
// You normally don't need to edit this file.

function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

// Shows the number nicely, e.g. 6281234567890 -> +62 812-3456-7890
function formatPhone(num) {
  const local = num.replace(/^62/, "");
  return "+62 " + local.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3");
}

// Simple dress silhouette used when a dress has no photo yet
function placeholderSVG(color) {
  return `
    <svg viewBox="0 0 100 140" class="silhouette" aria-hidden="true">
      <path fill="${color}" d="M38 10 L44 10 L46 30 L54 30 L56 10 L62 10 L64 34 Q60 44 62 52 L84 130 Q50 138 16 130 L38 52 Q40 44 36 34 Z"/>
    </svg>`;
}

function renderDresses(filter) {
  const grid = document.getElementById("dress-grid");
  const list = filter === "All" ? DRESSES : DRESSES.filter(d => d.category === filter);

  grid.innerHTML = list.map(d => {
    const media = d.image
      ? `<img src="${d.image}" alt="${d.name}" loading="lazy">`
      : placeholderSVG(d.color);
    const msg = `Halo Kemayu Rents! I'm interested in renting "${d.name}". Is it available for my date?`;
    return `
      <article class="card">
        <div class="card-media">
          ${media}
          <span class="tag">${d.category}</span>
        </div>
        <div class="card-body">
          <h3>${d.name}</h3>
          <p class="occasion">${d.occasion}</p>
          <p class="meta">Sizes: ${d.sizes}</p>
          <div class="card-foot">
            <p class="price">${formatRupiah(d.price)} <small>/ rental</small></p>
            <a class="btn btn-small" href="${waLink(msg)}" target="_blank" rel="noopener">Ask on WhatsApp</a>
          </div>
        </div>
      </article>`;
  }).join("");
}

// Filter buttons
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderDresses(btn.dataset.filter);
  });
});

// All general WhatsApp buttons
document.querySelectorAll(".wa-link").forEach(a => {
  a.href = waLink(a.dataset.msg);
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("wa-display").textContent = formatPhone(WHATSAPP_NUMBER);
document.getElementById("year").textContent = new Date().getFullYear();

renderDresses("All");

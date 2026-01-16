/* Portfolio behavior: render projects + timeline, filtering, theme toggle */
(function () {
  const qs = (s) => document.querySelector(s);

  // Year
  qs("#year").textContent = new Date().getFullYear();

  // Theme
  const themeToggle = qs("#themeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
  setThemeButtonIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  function setThemeButtonIcon() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    themeToggle.querySelector(".icon").textContent = current === "dark" ? "☾" : "☀";
  }

  // Social links
  const socialLinks = qs("#socialLinks");
  if (Array.isArray(SOCIAL) && SOCIAL.length) {
    SOCIAL.forEach(s => {
      const a = document.createElement("a");
      a.className = "link";
      a.href = s.href;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = s.label;
      socialLinks.appendChild(a);
    });
  } else {
    const p = document.createElement("p");
    p.className = "muted tiny";
    p.textContent = "Add your GitHub/LinkedIn in data.js to show links here.";
    socialLinks.appendChild(p);
  }

  const socialTop = qs("#socialLinksTop");

  if (socialTop && Array.isArray(SOCIAL)) {
    SOCIAL.forEach(s => {
      const a = document.createElement("a");
      a.href = s.href;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = s.label;
      socialTop.appendChild(a);
    });
  }

  // Timeline
  const timeline = qs("#timeline");
  if (timeline && Array.isArray(EXPERIENCE)) {
    const frag = document.createDocumentFragment();
    EXPERIENCE.forEach(x => {
      const el = document.createElement("article");
      el.className = "tl";
      el.innerHTML = `
        <div class="tl__left">
          <div><strong>${escapeHtml(x.dates || "")}</strong></div>
          <div>${escapeHtml(x.location || "")}</div>
        </div>
        <div>
          <h3 class="tl__title">${escapeHtml(x.role || "")} — ${escapeHtml(x.company || "")}</h3>
          <ul class="tl__bullets"></ul>
        </div>
      `;
      const ul = el.querySelector(".tl__bullets");
      (x.bullets || []).forEach(b => {
        const li = document.createElement("li");
        li.textContent = b;
        ul.appendChild(li);
      });
      frag.appendChild(el);
    });
    timeline.appendChild(frag);
  }

  // Projects filtering
  const grid = qs("#projectGrid");
  const tpl = qs("#projectCardTpl");
  const searchInput = qs("#searchInput");
  const companySelect = qs("#companySelect");
  const platformSelect = qs("#platformSelect");
  const resultCount = qs("#resultCount");

  // Populate company filter
  const companies = Array.from(new Set(PROJECTS.map(p => p.company))).sort((a,b)=>a.localeCompare(b));
  for (const c of companies) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    companySelect.appendChild(opt);
  }

  function render(items) {
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();

    items.forEach(p => {
      const node = tpl.content.cloneNode(true);
      node.querySelector(".project__title").textContent = p.name;

      const tagsEl = node.querySelector(".project__tags");
      const tagList = [p.company, p.platform, ...(p.tags || [])].filter(Boolean);
      tagList.slice(0, 6).forEach(t => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = t;
        tagsEl.appendChild(span);
      });

      node.querySelector(".project__desc").textContent = p.description || "";

      const actions = node.querySelector(".project__actions");
      const links = Array.isArray(p.links) ? p.links : [];
      if (!links.length) {
        const span = document.createElement("span");
        span.className = "muted tiny";
        span.textContent = "No public link provided.";
        actions.appendChild(span);
      } else {
        links.forEach((l, idx) => {
          const a = document.createElement("a");
          a.className = "link" + (l.primary ? " link--primary" : "");
          a.href = l.href;
          a.target = "_blank";
          a.rel = "noreferrer";
          a.textContent = l.label || (idx === 0 ? "Open" : "Link");
          actions.appendChild(a);
        });
      }

      frag.appendChild(node);
    });

    grid.appendChild(frag);
    resultCount.textContent = `${items.length} project${items.length === 1 ? "" : "s"} shown`;
  }

  function applyFilters() {
    const q = (searchInput.value || "").trim().toLowerCase();
    const company = companySelect.value;
    const platform = platformSelect.value;

    const filtered = PROJECTS.filter(p => {
      const matchesCompany = (company === "all") || p.company === company;
      const matchesPlatform = (platform === "all") || p.platform === platform;

      const hay = [
        p.name, p.company, p.platform,
        (p.tags || []).join(" "),
        p.description,
      ].join(" ").toLowerCase();

      const matchesQuery = !q || hay.includes(q);
      return matchesCompany && matchesPlatform && matchesQuery;
    });

    render(filtered);
  }

  [searchInput, companySelect, platformSelect].forEach(el => {
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });

  render(PROJECTS);

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, (m)=>({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[m]));
  }
})();

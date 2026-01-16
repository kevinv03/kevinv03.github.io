/* Portfolio behavior: render projects + timeline, filtering, theme toggle (safe) */
(function () {
  const qs = (s) => document.querySelector(s);

  // -------- Helpers
  function escapeHtml(str){
    return String(str ?? "").replace(/[&<>"']/g, (m)=>({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[m]));
  }

  function safeText(selector, text) {
    const el = qs(selector);
    if (el) el.textContent = text;
  }

  // -------- Year (safe)
  safeText("#year", new Date().getFullYear());

  // -------- Theme (safe even without .icon span)
  const themeToggle = qs("#themeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  function updateThemeButton() {
    if (!themeToggle) return;
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    // If you ever add <span class="icon"></span>, this will update it too.
    const iconEl = themeToggle.querySelector(".icon");
    if (iconEl) iconEl.textContent = current === "dark" ? "☾" : "☀";
    // Always ensure button has a readable label
    themeToggle.textContent = (current === "dark" ? "Theme: Dark" : "Theme: Light");
  }

  if (themeToggle) {
    updateThemeButton();
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeButton();
    });
  }

  // -------- Social links (fill both Top + Contact if they exist)
  function renderSocial(targetEl) {
    if (!targetEl) return;
    targetEl.innerHTML = "";

    if (Array.isArray(window.SOCIAL) && window.SOCIAL.length) {
      window.SOCIAL.forEach((s) => {
        const a = document.createElement("a");
        a.className = "btn btn--ghost"; // looks good in both places
        a.href = s.href;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.textContent = s.label;
        targetEl.appendChild(a);
      });
    } else {
      const p = document.createElement("span");
      p.className = "muted tiny";
      p.textContent = "Add links in data.js (SOCIAL) to show here.";
      targetEl.appendChild(p);
    }
  }

  renderSocial(qs("#socialLinks"));
  renderSocial(qs("#socialLinksTop"));

  // -------- Timeline
  const timeline = qs("#timeline");
  if (timeline && Array.isArray(window.EXPERIENCE)) {
    const frag = document.createDocumentFragment();

    window.EXPERIENCE.forEach((x) => {
      const el = document.createElement("article");
      el.className = "tl";
      el.innerHTML = `
        <div class="tl__left">
          <div><strong>${escapeHtml(x.dates)}</strong></div>
          <div>${escapeHtml(x.location)}</div>
        </div>
        <div>
          <h3 class="tl__title">${escapeHtml(x.role)} — ${escapeHtml(x.company)}</h3>
          <ul class="tl__bullets"></ul>
        </div>
      `;

      const ul = el.querySelector(".tl__bullets");
      (x.bullets || []).forEach((b) => {
        const li = document.createElement("li");
        li.textContent = b;
        ul.appendChild(li);
      });

      frag.appendChild(el);
    });

    timeline.innerHTML = "";
    timeline.appendChild(frag);
  }

  // -------- Projects (supports filter UI if present; otherwise renders simple list)
  const grid = qs("#projectGrid");
  if (!grid || !Array.isArray(window.PROJECTS)) return;

  const tpl = qs("#projectCardTpl");
  const searchInput = qs("#searchInput");
  const companySelect = qs("#companySelect");
  const platformSelect = qs("#platformSelect");
  const resultCount = qs("#resultCount");

  // If template is missing, use a fallback renderer
  const hasTemplate = !!tpl;

  function renderProjects(items) {
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();

    items.forEach((p) => {
      if (hasTemplate) {
        const node = tpl.content.cloneNode(true);
        node.querySelector(".project__title").textContent = p.name || "";

        const tagsEl = node.querySelector(".project__tags");
        const tagList = [p.company, p.platform, ...(p.tags || [])].filter(Boolean);
        tagList.slice(0, 6).forEach((t) => {
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
          links.forEach((l) => {
            const a = document.createElement("a");
            a.className = "btn" + (l.primary ? " btn--primary" : "");
            a.href = l.href;
            a.target = "_blank";
            a.rel = "noreferrer";
            a.textContent = l.label || "Open";
            actions.appendChild(a);
          });
        }

        frag.appendChild(node);
      } else {
        // Fallback card
        const card = document.createElement("article");
        card.className = "card";
        const tags = [p.company, p.platform, ...(p.tags || [])].filter(Boolean).join(" • ");
        const firstLink = (p.links || [])[0];

        card.innerHTML = `
          <h3>${escapeHtml(p.name)}</h3>
          <p class="muted tiny">${escapeHtml(tags)}</p>
          <p class="muted">${escapeHtml(p.description || "")}</p>
          ${firstLink ? `<a class="btn btn--primary" target="_blank" rel="noreferrer" href="${escapeHtml(firstLink.href)}">${escapeHtml(firstLink.label || "Open")}</a>` : ""}
        `;
        frag.appendChild(card);
      }
    });

    grid.appendChild(frag);
    if (resultCount) {
      resultCount.textContent = `${items.length} project${items.length === 1 ? "" : "s"} shown`;
    }
  }

  // Populate company filter if it exists
  if (companySelect) {
    const companies = Array.from(new Set(window.PROJECTS.map((p) => p.company).filter(Boolean)))
      .sort((a, b) => a.localeCompare(b));

    companies.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      companySelect.appendChild(opt);
    });
  }

  function applyFilters() {
    const q = (searchInput && searchInput.value ? searchInput.value : "").trim().toLowerCase();
    const company = companySelect ? companySelect.value : "all";
    const platform = platformSelect ? platformSelect.value : "all";

    const filtered = window.PROJECTS.filter((p) => {
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

    renderProjects(filtered);
  }

  // If filter controls exist, wire them up (safe)
  [searchInput, companySelect, platformSelect].filter(Boolean).forEach((el) => {
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });

  // Initial render
  renderProjects(window.PROJECTS);
})();

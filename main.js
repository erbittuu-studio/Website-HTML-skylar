/**
 * main.js — Skylar India Solar
 * All dynamic rendering, animations, and interactions.
 * All text content comes from locale file via i18n.t()
 */

const t = (path, fb = '') => window.i18n.get(path, fb);

/* ─── Icons ───────────────────────────────────────────────── */
const ICONS = {
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.72 6.72l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.955 0C5.362 0 0 5.373 0 11.979c0 2.099.546 4.12 1.586 5.894L.057 24l6.305-1.652a11.956 11.956 0 005.593 1.391h.005C18.352 23.739 24 18.366 24 11.76 24 5.373 18.548 0 11.955 0zm0 21.766a9.935 9.935 0 01-5.046-1.371l-.361-.214-3.742.981.999-3.648-.236-.374a9.905 9.905 0 01-1.519-5.301c0-5.484 4.46-9.944 9.942-9.944 2.659 0 5.156 1.037 7.033 2.919a9.878 9.878 0 012.91 7.028c-.003 5.487-4.463 9.924-9.98 9.924z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  // Service icons
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  farm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/><path d="M12 3V1"/><path d="M8 21V9"/><path d="M16 21V9"/></svg>`,
  commercial: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 3v18"/><path d="M16 3v18"/><path d="M2 9h20"/><path d="M2 15h20"/></svg>`,
  // Benefit icons
  bill: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/><polyline points="14 2 14 8 20 8"/></svg>`,
  money: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  env: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8c-2.5 2.5-3 5-2 7 1-1.5 2.5-2.5 4-3-1 1-1.5 2.5-1 4 2.5-2.5 3.5-5.5 2-9-1.5 1-2.5 2.5-3 4"/></svg>`,
  value: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  fast: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  support: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.72 6.72l.91-.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
  // Trust icons
  govt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21V9h6v12"/></svg>`,
  mnre: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  discom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
};

/* ─── Render helpers ──────────────────────────────────────── */
function stars(count) {
  return Array.from({ length: count }, () => `<span class="star">${ICONS.star}</span>`).join('');
}

/* ─── Preloader ───────────────────────────────────────────── */
function hidePreloader() {
  const pl = document.getElementById('preloader');
  if (!pl) return;
  pl.classList.add('done');
  setTimeout(() => pl.remove(), 700);
}

/* ─── Navbar ──────────────────────────────────────────────── */
function renderNav() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const path = el.getAttribute('data-t');
    const val = t(path);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-t-href]').forEach(el => {
    const path = el.getAttribute('data-t-href');
    const val = t(path);
    if (val) el.href = val;
  });

  // Scroll shrink
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile menu
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mob-overlay');
  const close = document.getElementById('mob-close');
  function openMenu() { mobileMenu.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { mobileMenu.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }
  toggle?.addEventListener('click', openMenu);
  close?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ─── Hero stats ──────────────────────────────────────────── */
function renderHeroStats() {
  const stats = t('hero.stats');
  const el = document.getElementById('hero-stats');
  if (!el || !Array.isArray(stats)) return;
  el.innerHTML = stats.map(s => `
    <div class="stat-item">
      <div class="stat-val">${s.value}</div>
      <div class="stat-lbl">${s.label}</div>
    </div>`).join('');
}

/* ─── Trust bar ───────────────────────────────────────────── */
function renderTrust() {
  const items = t('trust.items');
  const el = document.getElementById('trust-items');
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(item => `
    <div class="trust-item">
      <span class="trust-icon">${ICONS[item.icon] || ICONS.shield}</span>
      <span>${item.text}</span>
    </div>`).join('');
}

/* ─── Subsidy section ─────────────────────────────────────── */
function renderSubsidy() {
  const tiers = t('subsidy.tiers');
  const el = document.getElementById('subsidy-tiers');
  if (!el || !Array.isArray(tiers)) return;
  el.innerHTML = tiers.map((tier, i) => `
    <div class="subsidy-tier ${i === 2 ? 'tier-best' : ''}">
      ${i === 2 ? '<div class="tier-badge">Max Benefit</div>' : ''}
      <div class="tier-kw">${tier.kw}</div>
      <div class="tier-amount">${tier.amount}</div>
      <div class="tier-desc">${tier.desc}</div>
    </div>`).join('');
}

/* ─── Services ────────────────────────────────────────────── */
function renderServices() {
  const items = t('services.items');
  const el = document.getElementById('services-grid');
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(item => `
    <div class="service-card reveal-up">
      <div class="service-icon-wrap">${ICONS[item.icon] || ICONS.sun}</div>
      <div class="service-tag">${item.tag}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <ul class="service-points">
        ${item.points.map(p => `<li>${ICONS.check}<span>${p}</span></li>`).join('')}
      </ul>
    </div>`).join('');
}

/* ─── Benefits ────────────────────────────────────────────── */
function renderBenefits() {
  const items = t('benefits.items');
  const el = document.getElementById('benefits-grid');
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(item => `
    <div class="benefit-card reveal-up">
      <div class="benefit-icon">${ICONS[item.icon] || ICONS.sun}</div>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>`).join('');
}

/* ─── Process steps ───────────────────────────────────────── */
function renderProcess() {
  const steps = t('process.steps');
  const el = document.getElementById('process-steps');
  if (!el || !Array.isArray(steps)) return;
  el.innerHTML = steps.map((step, i) => `
    <div class="process-step reveal-up" style="animation-delay:${i * 0.1}s">
      <div class="step-num">${step.num}</div>
      <div class="step-body">
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    </div>`).join('');
}

/* ─── Testimonials ────────────────────────────────────────── */
function renderTestimonials() {
  const items = t('testimonials.items');
  const el = document.getElementById('testi-grid');
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(item => `
    <div class="testi-card reveal-up">
      <div class="testi-stars">${stars(item.stars)}</div>
      <p class="testi-text">"${item.text}"</p>
      <div class="testi-footer">
        <div class="testi-avatar">${item.name[0]}</div>
        <div>
          <div class="testi-name">${item.name}</div>
          <div class="testi-meta">${item.location} · ${item.system}</div>
        </div>
      </div>
    </div>`).join('');
}

/* ─── Contact form ────────────────────────────────────────── */
function renderContact() {
  const opts = t('contact.form.type_options');
  const sel = document.getElementById('inp-type');
  if (sel && Array.isArray(opts)) {
    sel.innerHTML = opts.map((o, i) => `<option value="${i}">${o}</option>`).join('');
  }

  document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('inp-name').value.trim();
    const phone = document.getElementById('inp-phone').value.trim();
    const location = document.getElementById('inp-location').value.trim();
    const typeEl = document.getElementById('inp-type');
    const typeTxt = typeEl.options[typeEl.selectedIndex].text;

    if (!name || !phone) {
      shakeForm();
      return;
    }

    const msg = encodeURIComponent(
      `Hello Skylar India! I'd like a free solar survey.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nInterest: ${typeTxt}`
    );
    const waUrl = t('contact.whatsapp_url').replace(/\?text=.*/, '') || 'https://wa.me/918530252952';
    window.open(`${waUrl}?text=${msg}`, '_blank', 'noopener');
  });
}

function shakeForm() {
  const form = document.getElementById('contact-form');
  form.classList.add('shake');
  setTimeout(() => form.classList.remove('shake'), 600);
}

/* ─── Footer ──────────────────────────────────────────────── */
function renderFooter() {
  const links = t('footer.links');
  const el = document.getElementById('footer-links');
  if (el && Array.isArray(links)) {
    el.innerHTML = links.map(l =>
      `<a href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ''}>${l.label}</a>`
    ).join('');
  }
  const certs = t('footer.certifications');
  const cel = document.getElementById('footer-certs');
  if (cel && Array.isArray(certs)) {
    cel.innerHTML = certs.map(c => `<span class="cert-badge">${ICONS.check}${c}</span>`).join('');
  }
}

/* ─── Scroll reveal ───────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-up').forEach(el => observer.observe(el));
}

/* ─── Animated counter ────────────────────────────────────── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.getAttribute('data-count'));
    const isFloat = el.getAttribute('data-count').includes('.');
    let start = 0;
    const dur = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const p = Math.min((timestamp - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = isFloat ? (ease * target).toFixed(1) : Math.round(ease * target);
      if (p < 1) requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { requestAnimationFrame(step); obs.disconnect(); }
    });
    obs.observe(el);
  });
}

/* ─── Boot ────────────────────────────────────────────────── */
window.i18n.load((data) => {
  renderNav();
  renderHeroStats();
  renderTrust();
  renderSubsidy();
  renderServices();
  renderBenefits();
  renderProcess();
  renderTestimonials();
  renderContact();
  renderFooter();
  initReveal();
  animateCounters();

  // Hide preloader after render
  setTimeout(hidePreloader, 1200);
});

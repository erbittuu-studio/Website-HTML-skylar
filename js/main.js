/**
 * Skylar India Solar — Main JS
 * Clean, fixed, English-only build.
 * Add hi.json / gu.json to js/locales/ to unlock more languages.
 */

const SITE = {
  phone:        '+918530252952',
  phoneDisplay: '+91 85302 52952',
  email:        'darshansolarkheda@gmail.com',
  whatsapp:     'https://wa.me/918530252952?text=Hello%2C+I+want+a+free+solar+survey.',
};

/* ── Icons ─────────────────────────────────────────────────────── */
const ICONS = {
  home:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
  farm:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17l4-8 4 4 4-6 4 10"/><path d="M2 20h20"/></svg>`,
  commercial: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
  savings:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  green:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22V12M12 12C12 6 17 3 21 3c0 4-2 8-9 9zM12 12C12 6 7 3 3 3c0 4 2 8 9 9z"/></svg>`,
  subsidy:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 14l6-6M9.5 8.5h.01M14.5 13.5h.01"/><circle cx="12" cy="12" r="9"/></svg>`,
  warranty:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>`,
  meter:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  finance:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
  certified:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"/></svg>`,
  service:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  survey:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
  design:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="17" r="2"/><circle cx="6" cy="17" r="3"/><line x1="10" y1="8" x2="7" y2="15"/><line x1="16" y1="8" x2="18" y2="15"/><line x1="9" y1="17" x2="17" y2="17"/></svg>`,
  install:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  electric:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>`,
  chevron:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6,9 12,15 18,9"/></svg>`,
  star:       `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  wa:         `<svg viewBox="0 0 24 24" fill="currentColor" style="width:17px;height:17px;flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.955 0C5.362 0 0 5.373 0 11.979c0 2.099.546 4.12 1.586 5.894L.057 24l6.305-1.652a11.956 11.956 0 005.593 1.391h.005C18.352 23.739 24 18.366 24 11.76 24 5.373 18.548 0 11.955 0zm0 21.766a9.935 9.935 0 01-5.046-1.371l-.361-.214-3.742.981.999-3.648-.236-.374a9.905 9.905 0 01-1.519-5.301c0-5.484 4.46-9.944 9.942-9.944 2.659 0 5.156 1.037 7.033 2.919a9.878 9.878 0 012.91 7.028c-.003 5.487-4.463 9.924-9.98 9.924z"/></svg>`,
};

function icon(name)   { return `<span class="icon">${ICONS[name] || ''}</span>`; }
function stars(n)     { return Array(n).fill(`<span class="star">${ICONS.star}</span>`).join(''); }
function svgIcon(name){ return ICONS[name] || ''; }

/* ── Language Switcher Visibility ─────────────────────────────── */
function updateLangSwitcherVisibility() {
  const supported = I18N.supported();
  document.querySelectorAll('.lang-switcher').forEach(el => {
    el.classList.toggle('hidden', supported.length < 2);
  });
}

/* ── Render: Nav ───────────────────────────────────────────────── */
function renderNav() {
  const t = k => I18N.t(k);
  const lang = I18N.getLang();
  ['services','about','how','faq','contact'].forEach(k => {
    document.querySelectorAll(`[data-nav="${k}"]`).forEach(el => el.textContent = t(`nav.${k}`));
  });
  document.querySelectorAll('[data-nav="cta"]').forEach(el => el.textContent = t('nav.cta'));
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  updateLangSwitcherVisibility();
}

/* ── Render: Hero ──────────────────────────────────────────────── */
function renderHero() {
  const h = I18N.t; // shorthand
  setEl('hero-badge',       I18N.t('hero.badge'));
  setEl('hero-line1',       I18N.t('hero.title_line1'));
  setEl('hero-highlight',   I18N.t('hero.title_highlight'));
  setEl('hero-line3',       I18N.t('hero.title_line3'));
  setEl('hero-subtitle',    I18N.t('hero.subtitle'));
  setEl('hero-btn-primary', I18N.t('hero.btn_primary'));
  setEl('hero-btn-secondary', I18N.t('hero.btn_secondary'));
  const stats = I18N.t('hero.stats');
  const statsEl = document.getElementById('hero-stats');
  if (statsEl && Array.isArray(stats)) {
    statsEl.innerHTML = stats.map(s => `
      <div class="stat-item">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');
  }
}

/* ── Render: Ticker ────────────────────────────────────────────── */
function renderTicker() {
  const items = I18N.t('ticker');
  const track = document.getElementById('ticker-track');
  if (!track || !Array.isArray(items)) return;
  const html = items.map(t => `<span class="ticker-item">${t}</span>`).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}

/* ── Render: Services ──────────────────────────────────────────── */
function renderServices() {
  setEl('services-label',     I18N.t('services.label'));
  setEl('services-title',     I18N.t('services.title'));
  setEl('services-highlight', I18N.t('services.title_highlight'));
  setEl('services-subtitle',  I18N.t('services.subtitle'));
  const items = I18N.t('services.items');
  const grid = document.getElementById('services-grid');
  if (!grid || !Array.isArray(items)) return;
  grid.innerHTML = items.map(item => `
    <div class="service-card">
      <div class="service-icon">${svgIcon(item.icon)}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <ul class="service-features">
        ${item.features.map(f => `<li><span class="check">✓</span>${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn btn-outline">${I18N.t('nav.cta')}</a>
    </div>`).join('');
}

/* ── Render: Benefits ──────────────────────────────────────────── */
function renderBenefits() {
  setEl('benefits-label',     I18N.t('benefits.label'));
  setEl('benefits-title',     I18N.t('benefits.title'));
  setEl('benefits-highlight', I18N.t('benefits.title_highlight'));
  const items = I18N.t('benefits.items');
  const grid = document.getElementById('benefits-grid');
  if (!grid || !Array.isArray(items)) return;
  grid.innerHTML = items.map(item => `
    <div class="benefit-card">
      <div class="benefit-icon">${svgIcon(item.icon)}</div>
      <div class="benefit-body">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>`).join('');
}

/* ── Render: Counters ──────────────────────────────────────────── */
function renderCounters() {
  const counters = I18N.t('counters');
  const grid = document.getElementById('counters-grid');
  if (!grid || !Array.isArray(counters)) return;
  grid.innerHTML = counters.map(c => `
    <div class="counter-item">
      <div class="counter-value" data-target="${c.target}" data-suffix="${c.suffix}">0${c.suffix}</div>
      <div class="counter-label">${c.label}</div>
    </div>`).join('');
}

/* ── Render: About ─────────────────────────────────────────────── */
function renderAbout() {
  setEl('about-label',    I18N.t('about.label'));
  setEl('about-title',    `${I18N.t('about.title')} <span class="hl">${I18N.t('about.title_highlight')}</span>`, true);
  setEl('about-subtitle', I18N.t('about.subtitle'));
  setEl('about-cta',      I18N.t('about.cta'));
  setEl('subsidy-title',  I18N.t('about.subsidy_title'));

  const pillars = I18N.t('about.pillars');
  const pillarsEl = document.getElementById('about-pillars');
  if (pillarsEl && Array.isArray(pillars)) {
    pillarsEl.innerHTML = pillars.map(p => `
      <div class="pillar">
        <div class="pillar-icon">${svgIcon(p.icon)}</div>
        <div><h4>${p.title}</h4><p>${p.text}</p></div>
      </div>`).join('');
  }

  const badges = I18N.t('about.badges');
  const badgesEl = document.getElementById('about-badges');
  if (badgesEl && Array.isArray(badges)) {
    badgesEl.innerHTML = badges.map(b => `
      <div class="badge-item">
        <div class="badge-value">${b.value}</div>
        <div class="badge-label">${b.label}</div>
      </div>`).join('');
  }

  const table = I18N.t('about.subsidy_table');
  const tableEl = document.getElementById('subsidy-table');
  if (tableEl && Array.isArray(table)) {
    tableEl.innerHTML = table.map(row => `
      <tr><td>${row.capacity}</td><td class="subsidy-amount">${row.subsidy}</td></tr>`).join('');
  }
}

/* ── Render: How It Works ──────────────────────────────────────── */
function renderHow() {
  setEl('how-label',     I18N.t('how.label'));
  setEl('how-title',     I18N.t('how.title'));
  setEl('how-highlight', I18N.t('how.title_highlight'));
  const steps = I18N.t('how.steps');
  const stepsEl = document.getElementById('how-steps');
  if (!stepsEl || !Array.isArray(steps)) return;
  stepsEl.innerHTML = `<div class="steps-connector"></div>` +
    steps.map((step, i) => `
      <div class="step-card">
        <div class="step-number">${i + 1}</div>
        <div class="step-icon">${svgIcon(step.icon)}</div>
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>`).join('');
}

/* ── Render: FAQ ───────────────────────────────────────────────── */
function renderFAQ() {
  setEl('faq-label',     I18N.t('faq.label'));
  setEl('faq-title',     I18N.t('faq.title'));
  setEl('faq-highlight', I18N.t('faq.title_highlight'));
  const items = I18N.t('faq.items');
  const list = document.getElementById('faq-list');
  if (!list || !Array.isArray(items)) return;
  list.innerHTML = items.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${item.q}</span>
        <span class="faq-chevron">${svgIcon('chevron')}</span>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </div>`).join('');
}

/* ── Render: Testimonials ──────────────────────────────────────── */
function renderTestimonials() {
  setEl('testimonials-label',     I18N.t('testimonials.label'));
  setEl('testimonials-title',     I18N.t('testimonials.title'));
  setEl('testimonials-highlight', I18N.t('testimonials.title_highlight'));
  const items = I18N.t('testimonials.items');
  const grid = document.getElementById('testimonials-grid');
  if (!grid || !Array.isArray(items)) return;
  grid.innerHTML = items.map(item => `
    <div class="testimonial-card">
      <div class="test-stars">${stars(item.stars)}</div>
      <p class="test-text">${item.text}</p>
      <div class="test-author">
        <div class="test-avatar">${item.name.charAt(0)}</div>
        <div>
          <div class="test-name">${item.name}</div>
          <div class="test-location">${item.location}</div>
        </div>
      </div>
    </div>`).join('');
}

/* ── Render: Contact ───────────────────────────────────────────── */
function renderContact() {
  setEl('contact-label',        I18N.t('contact.label'));
  setEl('contact-title',        I18N.t('contact.title'));
  setEl('contact-highlight',    I18N.t('contact.title_highlight'));
  setEl('contact-subtitle',     I18N.t('contact.subtitle'));
  setEl('contact-address-label', I18N.t('contact.address_label'));
  setEl('contact-phone-label',  I18N.t('contact.phone_label'));
  setEl('contact-hours-label',  I18N.t('contact.hours_label'));
  setEl('contact-hours-value',  I18N.t('contact.hours_value'));
  const f = I18N.t('contact.form');
  if (!f || typeof f !== 'object') return;
  attr('form-name',    'placeholder', f.name);
  attr('form-phone',   'placeholder', f.phone);
  attr('form-address', 'placeholder', f.address);
  setEl('form-system-label', f.system);
  setEl('form-submit', f.submit);
  const opts = f.system_options;
  const sel = document.getElementById('form-system');
  if (sel && Array.isArray(opts)) {
    sel.innerHTML = opts.map((o, i) => `<option value="${i}">${o}</option>`).join('');
  }
  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn) waBtn.innerHTML = `${ICONS.wa} ${f.whatsapp}`;
}

/* ── Render: Footer ────────────────────────────────────────────── */
function renderFooter() {
  setEl('footer-tagline',      I18N.t('footer.tagline'));
  setEl('footer-quick-links',  I18N.t('footer.quick_links'));
  setEl('footer-subsidy-help', I18N.t('footer.subsidy_help'));
  setEl('footer-copyright',    I18N.t('footer.copyright'));
  const links = I18N.t('footer.subsidy_links');
  const linksEl = document.getElementById('footer-subsidy-links');
  if (linksEl && Array.isArray(links)) {
    linksEl.innerHTML = links.map(l =>
      `<li><a href="${l.url}" target="${l.url.startsWith('http') ? '_blank' : '_self'}" rel="noopener">${l.label}</a></li>`
    ).join('');
  }
}

/* ── Render All ────────────────────────────────────────────────── */
function renderAll() {
  renderNav(); renderHero(); renderTicker(); renderServices();
  renderBenefits(); renderCounters(); renderAbout(); renderHow();
  renderFAQ(); renderTestimonials(); renderContact(); renderFooter();
}

/* ── Helpers ────────────────────────────────────────────────────── */
function setEl(id, val, html = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (html) el.innerHTML = val; else el.textContent = val;
}
function attr(id, name, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(name, val);
}

/* ── FAQ Toggle ─────────────────────────────────────────────────── */
window.toggleFAQ = function(i) {
  const item = document.getElementById(`faq-${i}`);
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
};

/* ── Counter Animation ──────────────────────────────────────────── */
function animateCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = '1';
      const target  = +entry.target.dataset.target;
      const suffix  = entry.target.dataset.suffix || '';
      let current   = 0;
      const step    = Math.max(1, Math.ceil(target / 60));
      const timer   = setInterval(() => {
        current = Math.min(current + step, target);
        entry.target.textContent = current.toLocaleString() + suffix;
        if (current >= target) clearInterval(timer);
      }, 20);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter-value').forEach(c => observer.observe(c));
}

/* ── Mobile Menu ────────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle  = document.getElementById('menu-toggle');
  const menu    = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  if (!toggle || !menu) return;

  function close() {
    menu.classList.remove('open');
    overlay.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    overlay.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
  });
  overlay.addEventListener('click', close);
  document.getElementById('menu-close')?.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ── Sticky Nav ─────────────────────────────────────────────────── */
function initStickyNav() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── Scroll Reveal ──────────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));
}

/* ── Contact Form → WhatsApp ────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('#form-name').value.trim();
    const phone   = form.querySelector('#form-phone').value.trim();
    const address = form.querySelector('#form-address').value.trim();
    const system  = form.querySelector('#form-system')?.selectedOptions[0]?.text || '';
    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    const msg = encodeURIComponent(
      `Hello, I want a free solar survey.\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nSystem: ${system}`
    );
    window.open(`https://wa.me/918530252952?text=${msg}`, '_blank');
  });
}

/* ── Language Switcher ──────────────────────────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const lang = btn.dataset.lang;
      try {
        await I18N.setLang(lang);
        renderAll();
        setTimeout(initReveal, 100);
      } catch (err) {
        console.warn(`Could not load language "${lang}":`, err.message);
      }
    });
  });
}

/* ── Boot ───────────────────────────────────────────────────────── */
document.addEventListener('i18n:ready', () => {
  renderAll();
  setTimeout(() => {
    animateCounters();
    initReveal();
    initMobileMenu();
    initStickyNav();
    initContactForm();
    initLangSwitcher();
    updateLangSwitcherVisibility();
  }, 50);
});

I18N.init();

/**
 * Skylar India Solar — Main JS
 * Renders all sections from i18n data, handles interactions.
 */

// ─── Company Data ──────────────────────────────────────────────
const SITE = {
  phone: "+918530252952",
  phoneDisplay: "+91 85302 52952",
  email: "darshansolarkheda@gmail.com",
  whatsapp: "https://wa.me/918530252952?text=Hello%2C+I+want+a+free+solar+survey.",
  address: "Shop No. 3, Sardar Patel Shopping Center,\nSardar Market, Kheda – 387411, Gujarat",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdfSP_04DuYMdhI3GDNzVFW1wnb8lMzYTMic3NIiNTMGEM_pA/viewform?embedded=true",
  mapUrl: "https://maps.app.goo.gl/kheda",
  rating: "4.9",
  reviewCount: 347
};

// ─── SVG Icons ─────────────────────────────────────────────────
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
  farm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5"/><path d="M2 20h20"/></svg>`,
  commercial: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  savings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  green: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22V12M12 12C12 6 17 3 21 3c0 4-2 8-9 9zM12 12C12 6 7 3 3 3c0 4 2 8 9 9z"/></svg>`,
  subsidy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 14l6-6M9.5 8.5h.01M14.5 13.5h.01"/><circle cx="12" cy="12" r="9"/></svg>`,
  warranty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>`,
  meter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/><path d="M6.3 17.7l1.4-1.4"/><path d="M17.7 17.7l-1.4-1.4"/><path d="M7 12H4"/><path d="M20 12h-3"/></svg>`,
  finance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
  certified: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"/></svg>`,
  service: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  survey: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
  design: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="17" r="2"/><circle cx="6" cy="17" r="3"/><line x1="10" y1="8" x2="7" y2="15"/><line x1="16" y1="8" x2="18" y2="15"/><line x1="9" y1="17" x2="17" y2="17"/></svg>`,
  install: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  electric: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.72 6.72l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.955 0C5.362 0 0 5.373 0 11.979c0 2.099.546 4.12 1.586 5.894L.057 24l6.305-1.652a11.956 11.956 0 005.593 1.391h.005C18.352 23.739 24 18.366 24 11.76 24 5.373 18.548 0 11.955 0zm0 21.766a9.935 9.935 0 01-5.046-1.371l-.361-.214-3.742.981.999-3.648-.236-.374a9.905 9.905 0 01-1.519-5.301c0-5.484 4.46-9.944 9.942-9.944 2.659 0 5.156 1.037 7.033 2.919a9.878 9.878 0 012.91 7.028c-.003 5.487-4.463 9.924-9.98 9.924z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6,9 12,15 18,9"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

// ─── Helpers ───────────────────────────────────────────────────
function icon(name) {
  return `<span class="icon">${ICONS[name] || ''}</span>`;
}
function stars(n) {
  return Array(n).fill(`<span class="star">${ICONS.star}</span>`).join('');
}
function nl2br(str) {
  return (str || '').replace(/\n/g, '<br>');
}

// ─── Render Functions ──────────────────────────────────────────

function renderNav() {
  const t = k => I18N.t(k);
  const lang = I18N.getLang();
  document.getElementById('nav-services').textContent = t('nav.services');
  document.getElementById('nav-about').textContent = t('nav.about');
  document.getElementById('nav-how').textContent = t('nav.how');
  document.getElementById('nav-faq').textContent = t('nav.faq');
  document.getElementById('nav-contact').textContent = t('nav.contact');
  document.getElementById('nav-cta').textContent = t('nav.cta');
  document.getElementById('mob-services').textContent = t('nav.services');
  document.getElementById('mob-about').textContent = t('nav.about');
  document.getElementById('mob-how').textContent = t('nav.how');
  document.getElementById('mob-faq').textContent = t('nav.faq');
  document.getElementById('mob-contact').textContent = t('nav.contact');
  document.getElementById('mob-cta').textContent = t('nav.cta');
  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function renderHero() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const hero = data.hero || en.hero;
  document.getElementById('hero-badge').textContent = hero.badge;
  document.getElementById('hero-line1').textContent = hero.title_line1;
  document.getElementById('hero-highlight').textContent = hero.title_highlight;
  document.getElementById('hero-line3').textContent = hero.title_line3;
  document.getElementById('hero-subtitle').textContent = hero.subtitle;
  document.getElementById('hero-btn-primary').textContent = hero.btn_primary;
  document.getElementById('hero-btn-secondary').textContent = hero.btn_secondary;
  const stats = hero.stats || en.hero.stats;
  const container = document.getElementById('hero-stats');
  container.innerHTML = stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

function renderTicker() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const items = (data.ticker || en.ticker);
  const track = document.getElementById('ticker-track');
  const html = items.map(t => `<span class="ticker-item">${t}</span>`).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}

function renderServices() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const s = data.services || en.services;
  const items = (s.items || en.services.items);
  document.getElementById('services-label').textContent = s.label;
  document.getElementById('services-title').textContent = s.title;
  document.getElementById('services-highlight').textContent = s.title_highlight;
  document.getElementById('services-subtitle').textContent = s.subtitle;
  document.getElementById('services-grid').innerHTML = items.map(item => `
    <div class="service-card">
      <div class="service-icon">${ICONS[item.icon] || ''}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <ul class="service-features">
        ${item.features.map(f => `<li><span class="check">✓</span>${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn btn-outline">${I18N.t('nav.cta')}</a>
    </div>
  `).join('');
}

function renderBenefits() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const b = data.benefits || en.benefits;
  const items = b.items || en.benefits.items;
  document.getElementById('benefits-label').textContent = b.label;
  document.getElementById('benefits-title').textContent = b.title;
  document.getElementById('benefits-highlight').textContent = b.title_highlight;
  document.getElementById('benefits-grid').innerHTML = items.map(item => `
    <div class="benefit-card">
      <div class="benefit-icon">${ICONS[item.icon] || ''}</div>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

function renderCounters() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const counters = data.counters || en.counters;
  const siteCnt = [
    { target: 500, suffix: '+' },
    { target: 25, suffix: '+' },
    { target: 90, suffix: '%' },
    { target: 1200, suffix: '+' }
  ];
  document.getElementById('counters-grid').innerHTML = counters.map((c, i) => `
    <div class="counter-item">
      <div class="counter-value" data-target="${siteCnt[i].target}" data-suffix="${siteCnt[i].suffix}">0</div>
      <div class="counter-label">${c.label}</div>
    </div>
  `).join('');
}

function renderAbout() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const a = data.about || en.about;
  document.getElementById('about-label').textContent = a.label;
  document.getElementById('about-title').innerHTML = `${a.title} <span class="highlight">${a.title_highlight}</span>`;
  document.getElementById('about-subtitle').textContent = a.subtitle;
  const pillars = a.pillars || en.about.pillars;
  document.getElementById('about-pillars').innerHTML = pillars.map(p => `
    <div class="pillar">
      <div class="pillar-icon">${ICONS[p.icon] || p.icon}</div>
      <div>
        <h4>${p.title}</h4>
        <p>${p.text}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('about-cta').textContent = a.cta;
  const badges = a.badges || en.about.badges;
  document.getElementById('about-badges').innerHTML = badges.map(b => `
    <div class="badge-item">
      <div class="badge-value">${b.value}</div>
      <div class="badge-label">${b.label}</div>
    </div>
  `).join('');
  const table = a.subsidy_table || en.about.subsidy_table;
  document.getElementById('subsidy-title').textContent = a.subsidy_title;
  document.getElementById('subsidy-table').innerHTML = table.map(row => `
    <tr>
      <td>${row.capacity}</td>
      <td class="subsidy-amount">${row.subsidy}</td>
    </tr>
  `).join('');
}

function renderHow() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const h = data.how || en.how;
  const steps = h.steps || en.how.steps;
  document.getElementById('how-label').textContent = h.label;
  document.getElementById('how-title').textContent = h.title;
  document.getElementById('how-highlight').textContent = h.title_highlight;
  document.getElementById('how-steps').innerHTML = steps.map((step, i) => `
    <div class="step-card">
      <div class="step-number">${i + 1}</div>
      <div class="step-icon">${ICONS[step.icon] || ''}</div>
      <h4>${step.title}</h4>
      <p>${step.desc}</p>
    </div>
  `).join('');
}

function renderFAQ() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const f = data.faq || en.faq;
  const items = f.items || en.faq.items;
  document.getElementById('faq-label').textContent = f.label;
  document.getElementById('faq-title').textContent = f.title;
  document.getElementById('faq-highlight').textContent = f.title_highlight;
  document.getElementById('faq-list').innerHTML = items.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${item.q}</span>
        <span class="faq-chevron">${ICONS.chevron}</span>
      </button>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const t = data.testimonials || en.testimonials;
  const items = t.items || en.testimonials.items;
  document.getElementById('testimonials-label').textContent = t.label;
  document.getElementById('testimonials-title').textContent = t.title;
  document.getElementById('testimonials-highlight').textContent = t.title_highlight;
  document.getElementById('testimonials-grid').innerHTML = items.map(item => `
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
    </div>
  `).join('');
}

function renderContact() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const c = data.contact || en.contact;
  const f = c.form || en.contact.form;
  document.getElementById('contact-label').textContent = c.label;
  document.getElementById('contact-title').textContent = c.title;
  document.getElementById('contact-highlight').textContent = c.title_highlight;
  document.getElementById('contact-subtitle').textContent = c.subtitle;
  document.getElementById('contact-address-label').textContent = c.address_label;
  document.getElementById('contact-phone-label').textContent = c.phone_label;
  document.getElementById('contact-hours-label').textContent = c.hours_label;
  document.getElementById('contact-hours-value').textContent = c.hours_value;
  document.getElementById('form-name').placeholder = f.name;
  document.getElementById('form-phone').placeholder = f.phone;
  document.getElementById('form-address').placeholder = f.address;
  document.getElementById('form-system-label').textContent = f.system;
  const opts = f.system_options || en.contact.form.system_options;
  document.getElementById('form-system').innerHTML = opts.map((o, i) => `<option value="${i}">${o}</option>`).join('');
  document.getElementById('form-submit').textContent = f.submit;
  document.getElementById('whatsapp-btn').textContent = f.whatsapp;
}

function renderFooter() {
  const data = I18N.getAll();
  const en = I18N.getEN();
  const f = data.footer || en.footer;
  const links = (data.footer && data.footer.subsidy_links) || en.footer.subsidy_links;
  document.getElementById('footer-tagline').textContent = f.tagline;
  document.getElementById('footer-quick-links').textContent = f.quick_links;
  document.getElementById('footer-subsidy-help').textContent = f.subsidy_help;
  document.getElementById('footer-copyright').textContent = f.copyright;
  document.getElementById('footer-subsidy-links').innerHTML = links.map(l =>
    `<li><a href="${l.url}" target="${l.url.startsWith('http') ? '_blank' : '_self'}" rel="noopener">${l.label}</a></li>`
  ).join('');
}

function renderAll() {
  renderNav();
  renderHero();
  renderTicker();
  renderServices();
  renderBenefits();
  renderCounters();
  renderAbout();
  renderHow();
  renderFAQ();
  renderTestimonials();
  renderContact();
  renderFooter();
}

// ─── FAQ Toggle ────────────────────────────────────────────────
window.toggleFAQ = function(i) {
  const item = document.getElementById(`faq-${i}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
};

// ─── Counter Animation ─────────────────────────────────────────
function animateCounters() {
  const counters = document.querySelectorAll('.counter-value');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = '1';
      const target = +entry.target.dataset.target;
      const suffix = entry.target.dataset.suffix || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        entry.target.textContent = current.toLocaleString() + suffix;
        if (current >= target) clearInterval(timer);
      }, 20);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ─── Mobile Menu ───────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  function close() { menu.classList.remove('open'); overlay.classList.remove('active'); }
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

// ─── Sticky Nav ────────────────────────────────────────────────
function initStickyNav() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── Smooth reveal on scroll ───────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Contact Form ──────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('#form-name').value;
    const phone = form.querySelector('#form-phone').value;
    const address = form.querySelector('#form-address').value;
    const system = form.querySelector('#form-system').selectedOptions[0]?.text || '';
    const msg = encodeURIComponent(`Hello, I want a free solar survey.\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nSystem: ${system}`);
    window.open(`https://wa.me/918530252952?text=${msg}`, '_blank');
  });
}

// ─── Language Switcher ─────────────────────────────────────────
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const lang = btn.dataset.lang;
      await I18N.setLang(lang);
      renderAll();
      setTimeout(initReveal, 100);
    });
  });
}

// ─── Boot ──────────────────────────────────────────────────────
document.addEventListener('i18n:ready', () => {
  renderAll();
  setTimeout(() => {
    animateCounters();
    initReveal();
    initMobileMenu();
    initStickyNav();
    initContactForm();
    initLangSwitcher();
  }, 50);
});

I18N.init();

/* Skylar India Solar — Main JS (Minimal build) */

const PHONE     = '+918530252952';
const PHONE_D   = '+91 85302 52952';
const WA_URL    = 'https://wa.me/918530252952?text=Hello%2C+I+want+a+free+solar+survey.';

/* ── Icons ─────────────────────────────────────────────── */
const IC = {
  home:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
  farm:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17l4-8 4 4 4-6 4 10"/><path d="M2 20h20"/></svg>`,
  commercial:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
  shield:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  star:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  bolt:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>`,
  clock:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  phone:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.72 6.72l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  pin:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  hours:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  wa:       `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.955 0C5.362 0 0 5.373 0 11.979c0 2.099.546 4.12 1.586 5.894L.057 24l6.305-1.652a11.956 11.956 0 005.593 1.391h.005C18.352 23.739 24 18.366 24 11.76 24 5.373 18.548 0 11.955 0zm0 21.766a9.935 9.935 0 01-5.046-1.371l-.361-.214-3.742.981.999-3.648-.236-.374a9.905 9.905 0 01-1.519-5.301c0-5.484 4.46-9.944 9.942-9.944 2.659 0 5.156 1.037 7.033 2.919a9.878 9.878 0 012.91 7.028c-.003 5.487-4.463 9.924-9.98 9.924z"/></svg>`,
  arrow:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>`,
  starFill: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  sun:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
};

const $ = id => document.getElementById(id);
const set = (id, html, isHtml = false) => {
  const el = $(id);
  if (!el) return;
  isHtml ? (el.innerHTML = html) : (el.textContent = html);
};

/* ── Build Page ─────────────────────────────────────────── */
function build() {
  const d = I18N.all();
  buildNav(d);
  buildHero(d);
  buildTrust(d);
  buildServices(d);
  buildTestimonials(d);
  buildContact(d);
  buildFooter(d);
}

function buildNav(d) {
  set('nav-services', d.nav.services);
  set('nav-contact',  d.nav.contact);
  set('nav-cta',      d.nav.cta);
  set('mob-services', d.nav.services);
  set('mob-contact',  d.nav.contact);
  set('mob-cta',      d.nav.cta);
}

function buildHero(d) {
  const h = d.hero;
  set('hero-badge',    h.badge);
  set('hero-line1',    h.title_line1);
  set('hero-line2',    h.title_line2);
  set('hero-line3',    h.title_line3);
  set('hero-sub',      h.subtitle);
  set('hero-btn-survey', h.btn_primary);
  set('hero-btn-call',   h.btn_call);
  set('hero-subsidy',  `${IC.bolt} ${h.subsidy_strip}`, true);

  const statsEl = $('hero-stats');
  if (statsEl && h.stats) {
    statsEl.innerHTML = h.stats.map(s => `
      <div class="stat-item">
        <div class="stat-val">${s.value}</div>
        <div class="stat-lbl">${s.label}</div>
      </div>`).join('');
  }
}

function buildTrust(d) {
  const el = $('trust-items');
  if (!el) return;
  el.innerHTML = d.trust.map((item, i) => `
    ${i > 0 ? '<div class="trust-sep"></div>' : ''}
    <div class="trust-item">${IC[item.icon] || ''}${item.text}</div>
  `).join('');
}

function buildServices(d) {
  const el = $('services-grid');
  if (!el) return;
  el.innerHTML = d.services.items.map(item => `
    <div class="svc-card" data-tag="${item.tag}">
      <div class="svc-icon">${IC[item.icon] || ''}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="#contact" class="svc-link">Get a quote ${IC.arrow}</a>
    </div>`).join('');
}

function buildTestimonials(d) {
  const el = $('testi-grid');
  if (!el) return;
  el.innerHTML = d.testimonials.map(t => `
    <div class="testi-card">
      <div class="testi-stars">${Array(t.stars).fill(`${IC.starFill}`).join('')}</div>
      <p class="testi-text">${t.text}</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-loc">${t.location}, Gujarat</div>
        </div>
      </div>
    </div>`).join('');
}

function buildContact(d) {
  const c = d.contact;
  const f = c.form;
  set('contact-title',    c.title);
  set('contact-subtitle', c.subtitle);
  set('contact-phone',    c.phone);
  set('contact-email',    c.email);
  set('contact-hours',    c.hours);
  set('contact-address',  c.address);
  set('form-submit',      f.submit);

  // form labels / placeholders
  const fields = ['name','phone','location','type'];
  fields.forEach(k => {
    const lbl = $(`lbl-${k}`); const inp = $(`inp-${k}`);
    if (lbl) lbl.textContent = f[k];
    if (inp) inp.placeholder = f[k];
  });

  // select options
  const sel = $('inp-type');
  if (sel && f.types) {
    sel.innerHTML = f.types.map((o,i) => `<option value="${i}">${o}</option>`).join('');
  }
}

function buildFooter(d) {
  set('footer-tagline',   d.footer.tagline);
  set('footer-copyright', d.footer.copyright);
}

/* ── Mobile Menu ────────────────────────────────────────── */
function initMenu() {
  const toggle  = $('menu-toggle');
  const menu    = $('mobile-menu');
  const overlay = $('menu-overlay');
  const close   = () => { menu.classList.remove('open'); overlay.classList.remove('active'); };
  toggle?.addEventListener('click', () => { menu.classList.toggle('open'); overlay.classList.toggle('active'); });
  overlay?.addEventListener('click', close);
  $('menu-close')?.addEventListener('click', close);
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ── Sticky Nav ─────────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', scrollY > 50), { passive: true });
}

/* ── Scroll Reveal ──────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal, .stagger').forEach(el => obs.observe(el));
}

/* ── Contact Form ───────────────────────────────────────── */
function initForm() {
  const form = $('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = $('inp-name').value.trim();
    const phone   = $('inp-phone').value.trim();
    const loc     = $('inp-location').value.trim();
    const type    = $('inp-type')?.selectedOptions[0]?.text || '';
    if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
    const msg = encodeURIComponent(`Hi, I want a free solar survey.\nName: ${name}\nPhone: ${phone}\nLocation: ${loc}\nType: ${type}`);
    window.open(`https://wa.me/${PHONE}?text=${msg}`, '_blank');
  });
}

/* ── Boot ───────────────────────────────────────────────── */
document.addEventListener('i18n:ready', () => {
  build();
  setTimeout(() => { initMenu(); initNav(); initReveal(); initForm(); }, 30);
});
I18N.init();

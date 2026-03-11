/**
 * Skylar India Solar — app.js
 * Loads: /data/site.json + /locales/{lang}.json
 * Then renders all dynamic sections and wires up UI.
 */

(function () {
  'use strict';

  /* ─── State ─── */
  let LANG = 'gu';
  let siteData = null;
  let langData = null;

  /* ─── Helpers ─── */
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }

  /* ─── Fetch helpers ─── */
  async function fetchJSON(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error('Failed to load ' + url);
    return r.json();
  }

  /* ════════════════════════════════════════
     LOADER
  ════════════════════════════════════════ */
  function initLoader() {
    const loader = qs('#loader');
    const pw     = qs('#pw');
    const fill   = qs('#ldf');
    let p = 0;
    const t = setInterval(function () {
      p += Math.random() * 18 + 4;
      if (p > 92) p = 92;
      fill.style.width = p + '%';
    }, 220);
    function hideLoader() {
      clearInterval(t);
      fill.style.width = '100%';
      setTimeout(function () {
        loader.classList.add('done');
        pw.classList.add('show');
      }, 350);
    }
    if (document.readyState === 'complete') { setTimeout(hideLoader, 600); }
    else { window.addEventListener('load', function () { setTimeout(hideLoader, 400); }); setTimeout(hideLoader, 4500); }
  }

  /* ════════════════════════════════════════
     LANGUAGE SYSTEM
  ════════════════════════════════════════ */
  function setLang(l) {
    LANG = l;
    document.body.classList.remove('gu', 'en');
    document.body.classList.add(l);
    document.documentElement.lang = (l === 'en') ? 'en' : 'gu';
    ['bGu', 'bEn', 'bGuM', 'bEnM'].forEach(function (id) {
      const btn = qs('#' + id);
      if (!btn) return;
      const isGu = (id === 'bGu' || id === 'bGuM');
      btn.classList.toggle('ac', (l === 'gu' && isGu) || (l === 'en' && !isGu));
    });
    try { localStorage.setItem('sl', l); } catch (e) { /* ignore */ }
    // Re-render lang-driven dynamic content
    if (siteData && langData) renderDynamic();
  }

  /* ════════════════════════════════════════
     RENDER — Ticker
  ════════════════════════════════════════ */
  function renderTicker() {
    const items = langData.ticker;
    const icons = ['fa-star', 'fa-bolt', 'fa-leaf', 'fa-check-circle', 'fa-phone'];
    const tkt = qs('#ticker-track');
    if (!tkt) return;
    // Build 2 copies for seamless loop
    let html = '';
    for (let pass = 0; pass < 2; pass++) {
      items.forEach(function (txt, i) {
        html += `<div class="ti"><i class="fa ${icons[i % icons.length]}"></i><span>${txt}</span></div>`;
      });
    }
    tkt.innerHTML = html;
  }

  /* ════════════════════════════════════════
     RENDER — Services
  ════════════════════════════════════════ */
  function renderServices() {
    const grid = qs('#services-grid');
    if (!grid) return;
    const l = LANG;
    grid.innerHTML = siteData.services.map(function (s) {
      const feats = s.features[l].map(function (f) {
        return `<li><span>${f}</span></li>`;
      }).join('');
      return `
      <div class="svc rv">
        <div class="si">${s.icon}</div>
        <h3 class="sn2">${s.title[l]}</h3>
        <p class="sd">${s.desc[l]}</p>
        <ul class="sf">${feats}</ul>
      </div>`;
    }).join('');
    // Re-observe new .rv elements
    observeReveal();
  }

  /* ════════════════════════════════════════
     RENDER — Counters
  ════════════════════════════════════════ */
  function renderCounters() {
    const grid = qs('#counters-grid');
    if (!grid) return;
    grid.innerHTML = siteData.counters.map(function (c, i) {
      const label = langData.counters[i] ? langData.counters[i].label : '';
      return `
      <div class="cti rv">
        <span class="ctn" data-t="${c.target}" data-sfx="${c.suffix}">0</span>
        <div class="ctl">${label}</div>
      </div>`;
    }).join('');
    observeCounters();
    observeReveal();
  }

  /* ════════════════════════════════════════
     RENDER — About pillars + badges
  ════════════════════════════════════════ */
  function renderAbout() {
    const pillarsEl = qs('#about-pillars');
    if (pillarsEl) {
      pillarsEl.innerHTML = langData.about.pillars.map(function (p) {
        return `
        <div class="apr">
          <div class="api">${p.icon}</div>
          <div><span class="aph4">${p.title}</span><p class="app">${p.text}</p></div>
        </div>`;
      }).join('');
    }

    const badgesEl = qs('#about-badges');
    if (badgesEl) {
      badgesEl.innerHTML = langData.about.badges.map(function (b) {
        return `
        <div class="bc">
          <span class="bn">${b.value}</span>
          <div class="bd">${b.label}</div>
        </div>`;
      }).join('');
    }

    const subsidyTitle = qs('#subsidy-title');
    if (subsidyTitle) subsidyTitle.textContent = '🏛️ ' + langData.about.subsidy_title;

    const subsidyRows = qs('#subsidy-rows');
    if (subsidyRows) {
      subsidyRows.innerHTML = siteData.subsidyTable.map(function (row) {
        const cap = row['capacity_' + LANG] || row.capacity;
        return `<div class="sr"><span>${cap}</span><span>${row.subsidy}</span></div>`;
      }).join('');
    }

    const aboutCta = qs('#about-cta');
    if (aboutCta) aboutCta.textContent = langData.about.cta;
  }

  /* ════════════════════════════════════════
     RENDER — Steps (How It Works)
  ════════════════════════════════════════ */
  function renderSteps() {
    const grid = qs('#steps-grid');
    if (!grid) return;
    grid.innerHTML = siteData.steps.map(function (s) {
      return `
      <div class="stpc rv">
        <div class="stpn">${s.icon}</div>
        <h3 class="stpt">${s.title[LANG]}</h3>
        <p class="stpd">${s.desc[LANG]}</p>
      </div>`;
    }).join('');
    observeReveal();
  }

  /* ════════════════════════════════════════
     RENDER — FAQs
  ════════════════════════════════════════ */
  function renderFaqs() {
    const grid = qs('#faq-grid');
    if (!grid) return;
    grid.innerHTML = siteData.faqs.map(function (f) {
      return `
      <div class="fqi">
        <div class="fqq">
          <span>${f.q[LANG]}</span>
          <div class="fqa2"><i class="fa fa-chevron-down"></i></div>
        </div>
        <div class="fqb"><div class="fqbi">${f.a[LANG]}</div></div>
      </div>`;
    }).join('');
    // Re-attach FAQ click handlers
    qsa('.fqi').forEach(function (item) {
      item.addEventListener('click', function () { toggleFaq(item); });
    });
  }

  /* ════════════════════════════════════════
     RENDER — Testimonials
  ════════════════════════════════════════ */
  function renderTestimonials() {
    const grid = qs('#tst-grid');
    if (!grid) return;
    grid.innerHTML = siteData.testimonials.map(function (t) {
      const stars = '★'.repeat(t.stars);
      return `
      <div class="tsc rv">
        <div class="stars">${stars}</div>
        <p class="tst2">${t.text[LANG]}</p>
        <div class="tau">
          <div class="tav">${t.initial}</div>
          <div><div class="tan">${t.name}</div><div class="tal">${t.location}</div></div>
        </div>
      </div>`;
    }).join('');
    observeReveal();
  }

  /* ════════════════════════════════════════
     RENDER — Nav & Section labels (i18n strings)
  ════════════════════════════════════════ */
  function renderI18n() {
    const L = langData;

    // Nav links
    const navMap = {
      '#nav-services': L.nav.services,
      '#nav-about':    L.nav.about,
      '#nav-how':      L.nav.how,
      '#nav-faq':      L.nav.faq,
      '#nav-contact':  L.nav.contact,
      '#nav-cta':      L.nav.cta,
      '#mob-services': '⚡ ' + L.nav.services,
      '#mob-about':    'ℹ️ ' + L.nav.about,
      '#mob-how':      '🔄 ' + L.nav.how,
      '#mob-contact':  '📍 ' + L.nav.contact
    };
    Object.entries(navMap).forEach(function([sel, txt]) {
      const e = qs(sel);
      if (e) e.textContent = txt;
    });

    // Hero
    setTxt('#hero-badge-txt', L.hero.badge);
    setTxt('#hero-title-1', L.hero.title_line1);
    setTxt('#hero-title-hi', L.hero.title_highlight);
    setTxt('#hero-title-3', L.hero.title_line3);
    setTxt('#hero-sub', L.hero.subtitle);
    setTxt('#hero-btn-primary', L.hero.btn_primary);
    setTxt('#hero-btn-secondary', L.hero.btn_secondary);
    // Hero stats
    qsa('.sc2').forEach(function(card, i) {
      const stat = L.hero.stats[i];
      if (!stat) return;
      const lbl = card.querySelector('.sl');
      if (lbl) lbl.textContent = stat.label;
    });

    // Section labels & titles
    setSection('services', L.services, true);
    setSection('about-sec', L.about, false);
    setSection('how-sec', L.how, false);
    setSection('faq-sec', L.faq, false);
    setSection('tst-sec', L.testimonials, false);
    setSection('contact-sec', L.contact, false);

    // About CTA
    const aboutCta = qs('#about-cta');
    if (aboutCta) aboutCta.textContent = L.about.cta;
    setTxt('#about-sub', L.about.subtitle);
    setTxt('#subsidy-title', '🏛️ ' + L.about.subsidy_title);

    // Contact details
    setTxt('#ct-addr-lbl', L.contact.address_label);
    setTxt('#ct-phone-lbl', L.contact.phone_label);
    setTxt('#ct-hours-lbl', L.contact.hours_label);
    setTxt('#ct-hours-val', L.contact.hours_value);
    setTxt('#contact-sub', L.contact.subtitle);

    // Footer
    setTxt('#ft-tagline', L.footer.tagline);
    setTxt('#ft-quick-title', L.footer.quick_links);
    const ftSubsidy = qs('#ft-subsidy');
    if (ftSubsidy) ftSubsidy.textContent = L.footer.subsidy_help;
  }

  function setTxt(sel, txt) {
    const e = qs(sel);
    if (e && txt !== undefined) e.textContent = txt;
  }

  function setSection(id, data, hasSubtitle) {
    if (!data) return;
    const lbl = qs('#' + id + '-lbl');
    const title = qs('#' + id + '-title');
    const titleHi = qs('#' + id + '-title-hi');
    const sub = qs('#' + id + '-sub');
    if (lbl) lbl.textContent = data.label || '';
    if (title && data.title) title.firstChild.textContent = data.title + ' ';
    if (titleHi && data.title_highlight) titleHi.textContent = data.title_highlight;
    if (sub && data.subtitle) sub.textContent = data.subtitle;
  }

  /* ════════════════════════════════════════
     RENDER — all dynamic content
  ════════════════════════════════════════ */
  function renderDynamic() {
    renderI18n();
    renderTicker();
    renderServices();
    renderCounters();
    renderAbout();
    renderSteps();
    renderFaqs();
    renderTestimonials();
  }

  /* ════════════════════════════════════════
     FAQ toggle
  ════════════════════════════════════════ */
  function toggleFaq(item) {
    const isOpen = item.classList.contains('op');
    qsa('.fqi.op').forEach(function (f) { f.classList.remove('op'); });
    if (!isOpen) item.classList.add('op');
  }

  /* ════════════════════════════════════════
     Counters
  ════════════════════════════════════════ */
  function animateCounter(el) {
    const tgt = parseInt(el.getAttribute('data-t'));
    const sfx = el.getAttribute('data-sfx') || '';
    const step = tgt / (1800 / 16);
    let cur = 0;
    const ti = setInterval(function () {
      cur = Math.min(cur + step, tgt);
      el.textContent = Math.floor(cur).toLocaleString('en-IN') + sfx;
      if (cur >= tgt) clearInterval(ti);
    }, 16);
  }

  let counterObserver = null;
  function observeCounters() {
    if (counterObserver) counterObserver.disconnect();
    counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCounter(e.target); counterObserver.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    qsa('.ctn[data-t]').forEach(function (el) { counterObserver.observe(el); });
  }

  /* ════════════════════════════════════════
     Scroll reveal
  ════════════════════════════════════════ */
  let revealObserver = null;
  function observeReveal() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('v'); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    }
    qsa('.rv').forEach(function (el) { revealObserver.observe(el); });
  }

  /* ════════════════════════════════════════
     Active nav highlight on scroll
  ════════════════════════════════════════ */
  function initActiveNav() {
    const navAs = qsa('.nlinks a');
    const so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        const id = e.target.getAttribute('id');
        navAs.forEach(function (a) {
          if (a.getAttribute('href') === '#' + id) {
            a.classList.toggle('ac', e.isIntersecting);
          }
        });
      });
    }, { threshold: 0.4 });
    qsa('section[id]').forEach(function (s) { so.observe(s); });
  }

  /* ════════════════════════════════════════
     Hamburger
  ════════════════════════════════════════ */
  function initHamburger() {
    const hb = qs('#hb');
    const mm = qs('#mm');
    if (!hb || !mm) return;
    hb.addEventListener('click', function () {
      const op = hb.classList.toggle('op');
      mm.classList.toggle('op', op);
      hb.setAttribute('aria-expanded', op);
    });
    function cMob() {
      hb.classList.remove('op');
      mm.classList.remove('op');
      hb.setAttribute('aria-expanded', 'false');
    }
    document.addEventListener('click', function (e) {
      if (!hb.contains(e.target) && !mm.contains(e.target)) cMob();
    });
    qsa('.mm a').forEach(function (a) { a.addEventListener('click', cMob); });
  }

  /* ════════════════════════════════════════
     Scroll: nav shadow + back-to-top
  ════════════════════════════════════════ */
  function initScroll() {
    const nav = qs('#nav');
    const btt = qs('#btt');
    window.addEventListener('scroll', function () {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('sc', y > 40);
      if (btt) btt.classList.toggle('v', y > 400);
    }, { passive: true });
    if (btt) btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ════════════════════════════════════════
     BOOT
  ════════════════════════════════════════ */
  async function boot() {
    initLoader();

    // Determine saved language
    let savedLang = 'gu';
    try { savedLang = localStorage.getItem('sl') || 'gu'; } catch (e) { /* ignore */ }
    LANG = savedLang;

    // Load data + lang file in parallel
    try {
      [siteData, langData] = await Promise.all([
        fetchJSON('./data/site.json'),
        fetchJSON('./locales/' + LANG + '.json')
      ]);
    } catch (err) {
      console.error('Data load error:', err);
      return;
    }

    // Apply body lang class before rendering
    document.body.classList.add(LANG);
    document.documentElement.lang = LANG === 'en' ? 'en' : 'gu';

    // Render all dynamic content
    renderDynamic();

    // Wire up UI
    initHamburger();
    initScroll();
    initActiveNav();
    observeReveal();
    observeCounters();

    // Language toggle buttons
    const bGu = qs('#bGu'), bEn = qs('#bEn'), bGuM = qs('#bGuM'), bEnM = qs('#bEnM');
    async function switchLang(l) {
      if (l === LANG) return;
      LANG = l;
      try {
        langData = await fetchJSON('./locales/' + l + '.json');
      } catch (err) { console.error(err); return; }
      setLang(l);
    }
    if (bGu)  bGu.addEventListener('click',  function () { switchLang('gu'); });
    if (bEn)  bEn.addEventListener('click',  function () { switchLang('en'); });
    if (bGuM) bGuM.addEventListener('click', function () { switchLang('gu'); });
    if (bEnM) bEnM.addEventListener('click', function () { switchLang('en'); });

    // Set initial active state on lang buttons
    ['bGu','bEn','bGuM','bEnM'].forEach(function (id) {
      const btn = qs('#' + id);
      if (!btn) return;
      const isGu = id === 'bGu' || id === 'bGuM';
      btn.classList.toggle('ac', (LANG === 'gu' && isGu) || (LANG === 'en' && !isGu));
    });
  }

  document.addEventListener('DOMContentLoaded', boot);

})();

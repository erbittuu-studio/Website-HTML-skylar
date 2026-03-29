/**
 * i18n.js — Skylar India Solar
 * Loads locale JSON and exposes t() for all text access.
 * To add a new language: drop e.g. gu.json in js/locales/
 * and append ?lang=gu to the URL (or set localStorage).
 */

window.i18n = (() => {
  let _data = {};
  let _lang = 'en';

  /* Resolve which language to load */
  function detectLang() {
    const param = new URLSearchParams(window.location.search).get('lang');
    const stored = localStorage.getItem('si_lang');
    return param || stored || 'en';
  }

  /* Deep-get by dot path: t('hero.badge') */
  function get(path, fallback = '') {
    return path.split('.').reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : undefined;
    }, _data) ?? fallback;
  }

  /* Load locale JSON, call cb when ready */
  async function load(cb) {
    _lang = detectLang();
    try {
      const res = await fetch(`js/locales/${_lang}.json`);
      if (!res.ok) throw new Error(`Locale ${_lang} not found`);
      _data = await res.json();
      // apply dir attribute for RTL languages
      document.documentElement.setAttribute('lang', _data.lang || _lang);
      document.documentElement.setAttribute('dir', _data.dir || 'ltr');
    } catch (err) {
      // Fallback to en
      if (_lang !== 'en') {
        console.warn(`[i18n] Falling back to en. Error: ${err.message}`);
        _lang = 'en';
        const res = await fetch('js/locales/en.json');
        _data = await res.json();
      } else {
        console.error('[i18n] Could not load en.json:', err);
      }
    }
    if (typeof cb === 'function') cb(_data, _lang);
  }

  /* Switch language at runtime */
  function setLang(lang) {
    localStorage.setItem('si_lang', lang);
    window.location.href = `?lang=${lang}`;
  }

  /* Available langs — extend this array when you add new locale files */
  const available = [
    { code: 'en', label: 'English' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'hi', label: 'हिंदी' }
  ];

  return { load, get, setLang, available, getLang: () => _lang };
})();

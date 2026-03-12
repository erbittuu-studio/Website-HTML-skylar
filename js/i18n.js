/**
 * Skylar India — i18n Engine
 * Loads language JSON, falls back to English for missing keys.
 */

const I18N = (() => {
  let _en = {};
  let _current = {};
  let _lang = 'en';

  /** Deep get a nested key like "hero.title_line1" */
  function deepGet(obj, keyPath) {
    return keyPath.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
  }

  /** Get translation with English fallback */
  function t(keyPath) {
    const val = deepGet(_current, keyPath);
    if (val !== undefined && val !== '') return val;
    return deepGet(_en, keyPath) ?? keyPath;
  }

  /** Load a locale JSON file */
  async function loadLocale(lang) {
    const res = await fetch(`locales/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
    return res.json();
  }

  /** Switch language and re-render */
  async function setLang(lang) {
    if (!['en', 'hi', 'gu'].includes(lang)) lang = 'en';
    _lang = lang;
    _current = await loadLocale(lang);
    document.documentElement.lang = _current.lang || lang;
    document.documentElement.dir = _current.dir || 'ltr';
    document.dispatchEvent(new CustomEvent('i18n:ready', { detail: { lang } }));
    localStorage.setItem('skylar_lang', lang);
  }

  /** Initialize: load English first, then selected language */
  async function init() {
    _en = await loadLocale('en');
    const saved = localStorage.getItem('skylar_lang') || 'en';
    if (saved === 'en') {
      _current = _en;
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      document.dispatchEvent(new CustomEvent('i18n:ready', { detail: { lang: 'en' } }));
    } else {
      await setLang(saved);
    }
    _lang = saved;
  }

  function getLang() { return _lang; }
  function getAll() { return _current; }
  function getEN() { return _en; }

  return { init, setLang, t, getLang, getAll, getEN };
})();

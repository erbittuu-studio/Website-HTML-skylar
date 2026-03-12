/**
 * Skylar India — i18n Engine (English-only build)
 * Drop hi.json / gu.json into js/locales/ to enable those languages.
 */

const I18N = (() => {
  let _data = {};
  const SUPPORTED = ['en']; // add 'hi','gu' once those files are added

  function deepGet(obj, keyPath) {
    return keyPath.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
  }

  function t(keyPath) {
    return deepGet(_data, keyPath) ?? keyPath;
  }

  async function loadLocale(lang) {
    const res = await fetch(`js/locales/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
    return res.json();
  }

  async function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    _data = await loadLocale(lang);
    document.documentElement.lang = _data.lang || lang;
    document.documentElement.dir = _data.dir || 'ltr';
    localStorage.setItem('skylar_lang', lang);
    document.dispatchEvent(new CustomEvent('i18n:ready', { detail: { lang } }));
  }

  async function init() {
    // Determine saved lang; fall back if unsupported
    let saved = localStorage.getItem('skylar_lang') || 'en';
    if (!SUPPORTED.includes(saved)) saved = 'en';
    await setLang(saved);
  }

  function getLang()  { return _data.lang || 'en'; }
  function getAll()   { return _data; }
  function getEN()    { return _data; } // only one locale active
  function supported(){ return SUPPORTED; }

  return { init, setLang, t, getLang, getAll, getEN, supported };
})();

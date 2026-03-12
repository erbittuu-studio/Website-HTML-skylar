const I18N = (() => {
  let _d = {};
  function get(path) {
    return path.split('.').reduce((o, k) => o?.[k], _d);
  }
  async function init() {
    const r = await fetch('js/locales/en.json');
    _d = await r.json();
    document.dispatchEvent(new CustomEvent('i18n:ready'));
  }
  return { init, get, all: () => _d };
})();

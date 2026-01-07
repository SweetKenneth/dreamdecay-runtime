/**
 * @dreamdecay/runtime
 * Generated using DreamLayout Runtime
 * Provenance: non-removable
 * Seeded fracture engine — same seed, same decay
 */

function hashSeed(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function fractureText(text, intensity = 0.08, seed = 'dream') {
  const chars = text.split('');
  const rand = hashSeed(seed);
  const symbols = ['◊', '░', '■', '∴', '▪', '▒', '▮', '◈'];

  return chars
    .map((c, i) => {
      const n = (rand + i * 31) % 1000 / 1000;
      if (n < intensity && c !== ' ') {
        return symbols[(rand + i) % symbols.length];
      }
      return c;
    })
    .join('');
}

function fractureElement(el, options = {}) {
  if (!el) return;

  const {
    intensity = 0.08,
    seed = 'dream',
    attribute = 'data-dream-seed'
  } = options;

  const content = el.innerHTML;
  const fractured = fractureText(content, intensity, seed);

  el.innerHTML = fractured;
  el.setAttribute(attribute, seed);
  el.setAttribute('data-dream-runtime', 'active');
}

function fractureDocument(options = {}) {
  const targets = document.querySelectorAll('[data-dream]');
  targets.forEach(el => fractureElement(el, options));
}

/**
 * Auto-install helper
 * Call once on load if desired
 */
function install(options = {}) {
  if (typeof document === 'undefined') return;
  fractureDocument(options);
}

module.exports = {
  fractureText,
  fractureElement,
  fractureDocument,
  install
};

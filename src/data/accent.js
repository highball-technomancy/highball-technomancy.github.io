// accent.js — small accent-coloured TEXT must reach 4.5:1 against the page
// (--ink #101014). Dark marks (Dicefire's red, Anamnesis's purple) don't, so the
// text colour is the same hue lifted toward white until it passes. Borders and
// dots keep the true sampled colour.
// Same math as the inline version in pages/ontap/[slug].astro, which can be
// switched to this helper later; left untouched for now.
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const lum = (rgb) => {
  const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2]);
};
const INK = lum([16, 16, 20]);

export function accentText(accent) {
  let rgb = hex(accent);
  for (let t = 0; t < 30 && (lum(rgb) + 0.05) / (INK + 0.05) < 4.5; t++) {
    rgb = rgb.map((c) => Math.round(c + (255 - c) * 0.08));
  }
  return `rgb(${rgb.join(',')})`;
}

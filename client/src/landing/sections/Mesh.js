import React, { useEffect, useRef } from 'react';

/* A malha: retículo triangular desenhado linha a linha, adensando da esquerda
   para a direita como o padrão de fundo do guia. Ruído determinístico, sem
   Math.random, para o desenho ser o mesmo a cada carga. */

const NS = 'http://www.w3.org/2000/svg';

const noise = (a, b, c) => {
  const v = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453;
  return v - Math.floor(v);
};

export default function Mesh() {
  const ref = useRef(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function draw() {
      const L = window.innerWidth;
      const A = window.innerHeight;
      svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
      svg.textContent = '';

      const side = L < 640 ? 88 : 128;
      const rowHeight = side * 0.866;
      const cols = Math.ceil(L / side) + 2;
      const rows = Math.ceil(A / rowHeight) + 2;
      const segs = [];

      for (let j = 0; j < rows; j++) {
        const y = j * rowHeight;
        const shift = (j % 2) * (side / 2);
        for (let i = 0; i < cols; i++) {
          const x = i * side - side + shift;
          const p = 0.1 + 0.7 * Math.pow(Math.max(0, x) / L, 1.8);
          [[x + side, y], [x + side / 2, y + rowHeight], [x - side / 2, y + rowHeight]]
            .forEach(([x2, y2], d) => { if (noise(i, j, d) < p) segs.push([x, y, x2, y2]); });
        }
      }

      segs.forEach((s, k) => {
        const [x1, y1, x2, y2] = s;
        const ln = document.createElementNS(NS, 'line');
        ln.setAttribute('x1', x1.toFixed(1)); ln.setAttribute('y1', y1.toFixed(1));
        ln.setAttribute('x2', x2.toFixed(1)); ln.setAttribute('y2', y2.toFixed(1));
        ln.style.setProperty('--len', Math.hypot(x2 - x1, y2 - y1).toFixed(1));
        ln.style.strokeOpacity = (0.07 + 0.26 * Math.max(0, Math.min(1, x1 / L))).toFixed(3);
        ln.style.animationDelay = reducedMotion ? '0s' : (0.15 + (x1 / L) * 0.9 + (k % 7) * 0.02).toFixed(2) + 's';
        svg.appendChild(ln);
      });
    }

    draw();
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(draw, 220); };
    window.addEventListener('resize', onResize);
    return () => { clearTimeout(t); window.removeEventListener('resize', onResize); };
  }, []);

  return <svg id="mesh" ref={ref} aria-hidden="true" />;
}
